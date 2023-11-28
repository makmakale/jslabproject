import {StyleSheet} from 'react-native';
import {GS} from 'constants';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 10,
    left: 60,
    right: 10,
    minHeight: 40,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 0.5,
    borderRadius: 5,
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
  },
  icon: {
    marginRight: 10,
    color: GS.colors.default,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 12,
    color: GS.colors.secondary,
  },
});

export default styles;
