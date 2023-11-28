import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {GS} from 'constants';
import {MapScreen, WaypointScreen} from 'screens';

const Stack = createStackNavigator();

const MapStackScreen = ({navigation}) => {
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('tabPress', (e) => {
      e.preventDefault();
      navigation.navigate(APP_MAP.map.name, {screen: APP_MAP.map.name});
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: GS.colors.default},
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'bold'},
      }}>
      <Stack.Screen
        name={APP_MAP.map.name}
        component={MapScreen}
        options={{
          title: APP_MAP.map.title,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={APP_MAP.map.waypoint.name}
        component={WaypointScreen}
        options={{
          title: APP_MAP.map.waypoint.title,
        }}
      />
    </Stack.Navigator>
  );
};
export default MapStackScreen;
