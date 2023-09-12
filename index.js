/**
 * @format
 */

// if (__DEV__) {
//   import('./config/ReactotronConfig');
// }

import { AppRegistry, LogBox } from 'react-native';
import App from './src';
import { name as appName } from './app.json';

// Remover warning relacionado ao Async Storage
LogBox.ignoreAllLogs([
  'Warning: Async Storage has been extracted from react-native core',
]);

AppRegistry.registerComponent(appName, () => App);
