import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen, ForgotScreen} from 'screens';
import {GS} from 'constants';

function LoginNav() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: GS.colors.default},
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'bold'},
        initialRouteName: APP_MAP.login.name,
      }}>
      <Stack.Screen
        name={APP_MAP.login.name}
        component={LoginScreen}
        options={{title: APP_MAP.login.title, headerShown: false}}
      />
      <Stack.Screen
        name={APP_MAP.login.forgot.name}
        component={ForgotScreen}
        options={{title: ''}}
      />
    </Stack.Navigator>
  );
}

export default LoginNav;
