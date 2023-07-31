import { AsyncContainerModule } from 'inversify';
import pino from 'pino';

import { ConfigSymbols } from '@/container/symbols';
import { dataSource } from './dataSource';

const databaseModule = new AsyncContainerModule(async bind => {
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

export default databaseModule;
