import React from 'react';
import {View} from 'react-native';
import {Title, Drawer} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {ICONS} from 'constants';
import {connect, useDispatch} from 'react-redux';
import {logoutUser} from 'store/user/actions';
import styles from './styles';

function SidebarMenu(props) {
  const dispatch = useDispatch();
  const {fullName} = props.user || '';

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <Title style={styles.title}>{fullName}</Title>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <ICONS.waybills color={color} size={size}/>
              )}
              label={APP_MAP.waybills.title}
              onPress={() => props.navigation.navigate(APP_MAP.waybills.name)}
            />

            <DrawerItem
              icon={({color, size}) => (
                <ICONS.goods color={color} size={size}/>
              )}
              label={APP_MAP.cargo.title}
              onPress={() => props.navigation.navigate(APP_MAP.cargo.name)}
            />

            <DrawerItem
              icon={({color, size}) => <ICONS.acts color={color} size={size}/>}
              label={APP_MAP.acts.title}
              onPress={() => props.navigation.navigate(APP_MAP.acts.name)}
            />

            {props.goods.length ? (
              <DrawerItem
                icon={({color, size}) => (
                  <ICONS.addToAct color={color} size={size}/>
                )}
                label={APP_MAP.acts.add.title}
                onPress={() =>
                  props.navigation.navigate(APP_MAP.acts.name, {
                    screen: APP_MAP.acts.add.name,
                  })
                }
              />
            ) : null}

            <DrawerItem
              icon={({color, size}) => <ICONS.map color={color} size={size}/>}
              label={APP_MAP.map.title}
              onPress={() => props.navigation.navigate(APP_MAP.map.name)}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>

      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => <ICONS.exit color={color} size={size}/>}
          label="Выйти"
          onPress={() => dispatch(logoutUser())}
        />
      </Drawer.Section>
    </View>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
  goods: state.goods,
});

export default connect(mapStateToProps)(SidebarMenu);
