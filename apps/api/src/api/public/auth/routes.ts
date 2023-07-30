import { FastifyInstance } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import { OAuth2Client } from 'google-auth-library';
import {
  API_ROUTES,
  GoogleSigninPayloadSchema,
  GoogleSigninResponseSchema,
} from 'gym-shared';

import { UserRepo } from '@/repositories';

export default function routes(fastify: FastifyInstance, _: any, done: () => void) {
  fastify.withTypeProvider<ZodTypeProvider>().put(
    API_ROUTES.AUTH,
    {
      schema: {
        tags: ['auth'],
        summary: 'Auth endpoint for google',
        description: 'Google signup user route',
        body: GoogleSigninPayloadSchema,
        response: {
          200: GoogleSigninResponseSchema,
          201: GoogleSigninResponseSchema,
        },
      },
    },
    async ({ body: { idToken } }, res) => {
      const audience = process.env.GOOGLE_CLIENT_ID;

      const ticket = await new OAuth2Client(audience).verifyIdToken({
        idToken,
        audience,
      });

      const googleUser = ticket.getPayload();

      const user = await UserRepo.findOne({ where: { email: googleUser?.email } });

      const tokens = {
        accessToken: idToken,
        refreshToken: idToken,
      };

      if (!user) {
        const createdUser = await UserRepo.createUserWithGoogle(googleUser!);
        // await IngredientsRepo.createInitialIngredients(createdUser);

        return res.status(201).send(tokens);
      }

      return res.status(200).send(tokens);
    },
  );

  done();
}
