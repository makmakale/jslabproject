import * as React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import GeoLocationContainer from 'components/geoLocationContainer';
import {GS} from 'constants';
import {NavigationContainer} from '@react-navigation/native';
import {RootNav, DrawerNav} from 'navigation';
import {getUserFromStorage} from 'store/user/actions';
import {connect} from 'react-redux';

function App({user, dispatchGetUserFromStorage}) {
  React.useEffect(() => dispatchGetUserFromStorage(), [
    user.isLoggedIn,
    dispatchGetUserFromStorage,
  ]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <GeoLocationContainer/>
      <StatusBar backgroundColor={GS.colors.default} barStyle="light-content"/>
      <NavigationContainer>
        {!user.isLoggedIn ? <RootNav/> : <DrawerNav/>}
      </NavigationContainer>
    </SafeAreaView>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
});
const mapDispatchToProps = (dispatch) => ({
  dispatchGetUserFromStorage: (userInfo) =>
    dispatch(getUserFromStorage(userInfo)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
