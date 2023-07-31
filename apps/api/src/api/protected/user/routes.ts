import { FastifyInstance } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import { API_ROUTES, UserSchema, UserSettingsSchema } from 'gym-shared';

import { UserRepo } from '@/repositories';

export default function routes(fastify: FastifyInstance, _: any, done: () => void) {
  fastify.withTypeProvider<ZodTypeProvider>().get(
    API_ROUTES.USER,
    {
      schema: {
        description: 'Get user data',
        tags: ['user'],
        summary: 'Get user data route',
        response: {
          200: UserSchema,
        },
      },
    },
    async ({ user }, res) => {
      const data = await UserRepo.findOneOrFail({ where: { id: user.id } });

      return res.status(200).send(data);
    },
  );

  fastify.withTypeProvider<ZodTypeProvider>().patch(
    API_ROUTES.USER,
    {
      schema: {
        description: 'Update user settings data',
        tags: ['user'],
        summary: 'Update user settings data route',
        body: UserSettingsSchema,
        response: {
          200: UserSettingsSchema,
        },
      },
    },
    async ({ user, body }, res) => {
      const settings = await UserRepo.updateUserSettings(user, body);

      return res.status(200).send(settings);
    },
  );

  done();
}
