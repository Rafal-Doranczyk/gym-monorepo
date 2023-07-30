import { FastifyInstance } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import z from 'zod';
import { API_ROUTES } from 'gym-shared';

export default function routes(fastify: FastifyInstance, _: any, done: () => void) {
  fastify.withTypeProvider<ZodTypeProvider>().get(
    API_ROUTES.HEALTH,
    {
      schema: {
        description: 'App health status',
        tags: ['health'],
        summary: 'health',
        response: {
          200: z.object({
            status: z.string(),
          }),
        },
      },
    },
    (_, reply) => {
      reply.status(200).send({ status: 'ok' });
    },
  );

  done();
}
