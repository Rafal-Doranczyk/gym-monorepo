import { interfaces } from 'inversify';
import { UserEntity } from 'entities';

declare module 'fastify' {
  interface FastifyRequest {
    container: interfaces.Container;
    user: UserEntity;
  }
}
