import {StyleSheet, Dimensions} from 'react-native';
import {GS} from 'constants';

const {height} = Dimensions.get('screen');
const height_logo = height * 0.45;

const styles = StyleSheet.create({
  footer: {
    backgroundColor: GS.colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 30,
    paddingHorizontal: 30,
  },
  headerImageContainer: {
    width: height_logo,
    height: height_logo,
    borderRadius: height_logo / 2,
    borderWidth: 10,
    borderColor: '#fff',
    overflow: 'hidden',
  },
  headerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  title: {
    ...GS.fonts.companyName,
    fontSize: GS.SIZES.h1,
    color: '#05375a',
    textShadowColor: 'rgba(0, 0, 0, 0.35)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 10,
  },
  subTitle: {
    ...GS.fonts.companyName,
    fontSize: GS.SIZES.h5,
  },
  buttonGroup: {
    alignItems: 'flex-end',
    marginTop: 50,
  },
  signIn: {
    width: 200,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.35)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 5,
  },
});

export default styles;
