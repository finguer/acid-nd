const { createConnections } = require('@pxp-nd/core');
const { entities } = require('@pxp-nd/common');

/** You can use these parameters
 * synchronize: boolean, - Indicates if database schema should be auto created on every application launch. 
 *                         Be careful with this option and don't use this in production -
 *                         otherwise you can lose production data. 
 * logging: boolean,     - If set to true then query and error logging will be enabled.
**/
const connection = {
  name: 'default',
  type: 'postgres',
  host: 'localhost',
  port: 9101,
  username: 'acid',
  password: 'acid',
  database: 'dbacid',
  entities
};

module.exports = createConnections(connection);
