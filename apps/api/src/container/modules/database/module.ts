import { AsyncContainerModule } from 'inversify';
import pino from 'pino';

import { dataSource } from './dataSource';
import { ConfigSymbols } from '@/container/symbols';

export default new AsyncContainerModule(async bind => {
  bind(ConfigSymbols.Database).toConstantValue(dataSource);

  try {
    await dataSource.initialize();

    pino().info(`${process.env.DB_TYPE} DB CONNECTED`);
  } catch (error) {
    pino().error('DB ERROR');
    pino().error(error);

    throw error;
  }
});
