import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {GS} from 'constants';
import {WaybillStack, CargoStack, ActsStack, MapsStack} from 'screens';

const Tab = createBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName;

        if (route.name === APP_MAP.waybills.name) {
          iconName = focused ? 'car-info' : 'car-arrow-left';
        } else if (route.name === APP_MAP.cargo.name) {
          iconName = focused ? 'package-variant' : 'package';
        } else if (route.name === APP_MAP.acts.name) {
          iconName = focused ? 'folder-alert' : 'folder-alert-outline';
        } else if (route.name === APP_MAP.map.name) {
          iconName = focused ? 'map-marker-distance' : 'map';
        }

        return <Icon name={iconName} size={size} color={color}/>;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'tomato',
      activeBackgroundColor: GS.colors.light,
      inactiveTintColor: GS.colors.white,
      inactiveBackgroundColor: GS.colors.default,
    }}>
    <Tab.Screen
      name={APP_MAP.waybills.name}
      component={WaybillStack}
      options={{
        tabBarLabel: APP_MAP.waybills.title,
      }}
    />
    <Tab.Screen
      name={APP_MAP.cargo.name}
      component={CargoStack}
      options={{
        tabBarLabel: APP_MAP.cargo.title,
      }}
    />
    <Tab.Screen
      name={APP_MAP.acts.name}
      component={ActsStack}
      options={{
        tabBarLabel: APP_MAP.acts.title,
      }}
    />
    <Tab.Screen
      name={APP_MAP.map.name}
      component={MapsStack}
      options={{
        tabBarLabel: APP_MAP.map.title,
        headerShown: false,
        tabBarVisible: false,
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;
