import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {GS} from 'constants';
import {ActsList, ActAdd, ActView} from 'screens';
import {fetchAllActs} from 'store/acts/actions';
import {useDispatch} from 'react-redux';

const Stack = createStackNavigator();

const ActsStackScreen = ({navigation}) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('tabPress', (e) => {
      e.preventDefault();
      navigation.navigate(APP_MAP.acts.name, {screen: APP_MAP.acts.name});
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
        name={APP_MAP.acts.name}
        component={ActsList}
        options={{
          title: APP_MAP.acts.title,
          headerLeft: () => (
            <Icon.Button
              name="menu"
              size={25}
              backgroundColor={GS.colors.default}
              onPress={() => navigation.openDrawer()}
              style={{paddingLeft: 15}}
            />
          ),
          headerRight: () => (
            <Icon.Button
              name="refresh"
              size={25}
              backgroundColor={GS.colors.default}
              onPress={() => dispatch(fetchAllActs())}
              style={{paddingLeft: 15}}
            />
          ),
        }}
      />
      <Stack.Screen
        name={APP_MAP.acts.add.name}
        component={ActAdd}
        options={{
          title: APP_MAP.acts.add.title,
          headerLeft: () => (
            <Icon.Button
              name="arrow-left"
              size={25}
              backgroundColor={GS.colors.default}
              onPress={() => navigation.navigate(APP_MAP.cargo.name)}
              style={{paddingLeft: 15}}
            />
          ),
          headerRight: () => (
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
      <Stack.Screen
        name={APP_MAP.acts.view.name}
        component={ActView}
        options={{
          title: APP_MAP.acts.view.title,
        }}
      />
    </Stack.Navigator>
  );
};

export default ActsStackScreen;
