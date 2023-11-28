import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RootScreen, LoginNav} from 'screens';

function RootNav() {
  const RootStack = createStackNavigator();

  return (
    <RootStack.Navigator headerMode="none">
      <RootStack.Screen name={APP_MAP.root.name} component={RootScreen}/>
      <RootStack.Screen name={APP_MAP.login.name} component={LoginNav}/>
    </RootStack.Navigator>
  );
}

export default RootNav;
