import { FastifyInstance } from 'fastify';

import publicRoutes from './public';
import protectedRoutes from './protected';
import { authMiddleware } from './middlewares';

export default function Api(server: FastifyInstance) {
  server.register((fastify, _, done) => {
    publicRoutes.forEach(route => {
      fastify.register(route);
    });

    done();
  });

  server.register((fastify, _, done) => {
    fastify.addHook('preHandler', (request, reply, done) => {
      return authMiddleware(request, reply);
    });

    protectedRoutes.forEach(route => {
      fastify.register(route);
    });

    done();
  });
}
