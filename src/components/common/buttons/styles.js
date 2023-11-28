import {StyleSheet} from 'react-native';
import {GS} from 'constants';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: GS.colors.white,
    width: 40,
    height: 40,
    borderRadius: 20,
    ...GS.main.flexCenter,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  iconColor: {
    color: GS.colors.default,
  },
});
