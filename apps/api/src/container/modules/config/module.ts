import { ContainerModule } from 'inversify';

import { ConfigSymbols } from '@/container/symbols';

export type ConfigModuleInterface = {
  port: number;
  host: string;
};

const configModule = new ContainerModule(bind => {
  const value: ConfigModuleInterface = {
    port: +process.env.API_PORT,
    host: process.env.API_HOST,
  };

  bind(ConfigSymbols.Config).toConstantValue(value);
});

export default configModule;
