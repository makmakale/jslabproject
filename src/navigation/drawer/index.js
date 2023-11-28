import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {SidebarMenu} from 'screens';
import {MainTabScreen} from 'navigation';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <SidebarMenu {...props} />}>
      <Drawer.Screen name="Sidebar" component={MainTabScreen}/>
    </Drawer.Navigator>
  );
};

export default DrawerNav;
