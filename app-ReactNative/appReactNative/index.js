/**
 * @format
 */

import {AppRegistry, Platform} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import {registerRootComponent} from 'expo';

registerRootComponent(App);
AppRegistry.registerComponent(appName, () => App);