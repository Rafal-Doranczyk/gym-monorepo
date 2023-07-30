import { FastifyInstance } from 'fastify';
import { serializerCompiler, validatorCompiler } from 'fastify-type-provider-zod';

/** @param {import('fastify').FastifyInstance} app */
export default function zodPlugin(app: FastifyInstance) {
  return app
    .setValidatorCompiler(validatorCompiler)
    .setSerializerCompiler(serializerCompiler);
}
