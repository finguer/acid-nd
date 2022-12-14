import {PxpApp} from '@pxp-nd/core';
import config from './config';
import { configAuth } from '@pxp-nd/auth';

class App extends PxpApp {
  constructor() {
    super(config);
    this.ConfigAuth = configAuth;
  }
}

export default App;
