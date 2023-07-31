import { DataSource } from 'typeorm';

import * as Entities from '@/entities';

export const dataSource = new DataSource({
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [...Object.values(Entities)],
  dropSchema: true,
  synchronize: true,
});
