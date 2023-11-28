/**
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
//Toast notifications
import {DropDownComponentProvider} from 'contexts/DropDownContext';
import ReduxWrapper from 'store/wrapper';

const Main = () => (
  <ReduxWrapper>
    <DropDownComponentProvider>
      <App/>
    </DropDownComponentProvider>
  </ReduxWrapper>
);

AppRegistry.registerComponent(appName, () => Main);
