import { FastifyInstance } from 'fastify';
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';
import { jsonSchemaTransform } from 'fastify-type-provider-zod';

/** @param {import('fastify').FastifyInstance} app */
export default function swaggerPlugin(app: FastifyInstance) {
  app.register(fastifySwagger, {
    transform: jsonSchemaTransform,
    swagger: {
      info: {
        title: 'Test swagger',
        description: 'Testing the Fastify swagger API',
        version: '0.1.0',
      },
      host: 'localhost',
      schemes: ['http'],
      consumes: ['application/json'],
      produces: ['application/json'],
      tags: [
        { name: 'health', description: 'Health related end-points' },
        { name: 'auth', description: 'Auth related end-points' },
        { name: 'user', description: 'User related end-points' },
      ],
    },
  });

  app.register(fastifySwaggerUi, {
    routePrefix: '/docs',
  });

  return app;
}
