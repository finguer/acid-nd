import { IConfigPxpApp } from '@pxp-nd/core';
import { Session, commonScripts } from '@pxp-nd/common';
import {  isAuthenticated } from '@pxp-nd/auth';
const config: IConfigPxpApp = {
  defaultDbSettings: 'Orm', // Orm, Procedure, Query
  apiPrefix: '/api',
  logDuration: true,
  showRoutes: true,
  middlewares: [ isAuthenticated ],
  session: Session,
  auth: true,
  scripts: [...commonScripts],
};

export default config;