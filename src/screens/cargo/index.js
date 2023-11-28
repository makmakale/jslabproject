import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {GS} from 'constants';
import {CargoScreen} from 'screens';

const Stack = createStackNavigator();

const CargoStackScreen = ({navigation}) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {backgroundColor: GS.colors.default},
      headerTintColor: '#fff',
      headerTitleStyle: {fontWeight: 'bold'},
    }}>
    <Stack.Screen
      name={APP_MAP.cargo.name}
      component={CargoScreen}
      options={{
        title: 'Проверка товаров',
        headerLeft: () => (
          <Icon.Button
            name="menu"
            size={25}
            backgroundColor={GS.colors.default}
            onPress={() => navigation.openDrawer()}
            style={{paddingLeft: 15}}
          />
        ),
      }}
    />
  </Stack.Navigator>
);
export default CargoStackScreen;
