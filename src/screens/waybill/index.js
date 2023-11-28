import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {WaybillList, WaybillView} from 'screens';
import {GS} from 'constants';
import {useDispatch} from 'react-redux';
import {fetchAllWaybills} from 'store/waybill/actions';

const Stack = createStackNavigator();

const WaybillStackScreen = ({navigation}) => {
  const dispatch = useDispatch();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: GS.colors.default},
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'bold'},
        initialRouteName: APP_MAP.waybills.name,
      }}>
      <Stack.Screen
        name={APP_MAP.waybills.name}
        component={WaybillList}
        options={{
          title: APP_MAP.waybills.title,
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
              onPress={() => dispatch(fetchAllWaybills())}
              style={{paddingLeft: 15}}
            />
          ),
        }}
      />
      <Stack.Screen
        name={APP_MAP.waybills.view.name}
        component={WaybillView}
        options={{
          title: APP_MAP.waybills.view.title,
        }}
      />
    </Stack.Navigator>
  );
};
export default WaybillStackScreen;
