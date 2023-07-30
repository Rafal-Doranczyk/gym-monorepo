import { Container } from 'inversify';

import {
  ConfigModuleContainer,
  ServerContainerModule,
  DatabaseModuleContainer,
} from './modules';

const appContainer = new Container();

appContainer.load(ConfigModuleContainer);
appContainer.load(ServerContainerModule);
appContainer.loadAsync(DatabaseModuleContainer);

export default appContainer;
