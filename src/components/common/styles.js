import {StyleSheet} from 'react-native';
import {GS} from 'constants';

const styles = StyleSheet.create({
  bubble: {
    backgroundColor: GS.colors.white,
    borderRadius: 6,
    borderColor: '#ccc',
    borderWidth: 0.5,
    padding: 8,
    width: 200,
  },
  arrow: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#fff',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#007a87',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -0.5,
  },
  name: {
    ...GS.fonts.body5,
    marginBottom: 5,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  description: {
    fontSize: 12,
    color: GS.colors.secondary,
    textAlign: 'center',
  },
});

export default styles;
