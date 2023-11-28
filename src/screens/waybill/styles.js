import {StyleSheet} from 'react-native';
import {GS} from 'constants';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
    marginBottom: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 15,
  },
  containerAvatar: {
    width: 70,
    height: 70,
    marginRight: 10,
    borderRadius: 70,
  },
  title: {fontSize: 18, fontWeight: 'bold'},
  car: {fontSize: 16, opacity: 0.7},
  ttn: {fontSize: 14, opacity: 0.7},
  route: {fontSize: 14, opacity: 0.8, color: GS.colors.default},
});

export default styles;
