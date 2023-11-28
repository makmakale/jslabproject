import {Dimensions} from 'react-native';

const sWidth = Dimensions.get('window').width;
const sHeight = Dimensions.get('window').height;

const SIZES = {
  width: sWidth,
  height: sHeight,
  h1: 34,
  h2: 27,
  h3: 22,
  h4: 18,
  h5: 16,
  body1: 24,
  body2: 20,
  body3: 18,
  body4: 16,
  body5: 14,
};

const lineHeightRate = 1.5;

const fonts = {
  companyName: {fontFamily: 'RussoOne'},
  h1: {
    fontFamily: 'Roboto-Black',
    fontSize: SIZES.h1,
    lineHeight: SIZES.h1 * lineHeightRate,
  },
  h2: {
    fontFamily: 'Roboto-Bold',
    fontSize: SIZES.h2,
    lineHeight: SIZES.h2 * lineHeightRate,
  },
  h3: {
    fontFamily: 'Roboto-Bold',
    fontSize: SIZES.h3,
    lineHeight: SIZES.h3 * lineHeightRate,
  },
  h4: {
    fontFamily: 'Roboto-Bold',
    fontSize: SIZES.h4,
    lineHeight: SIZES.h4 * lineHeightRate,
  },
  h5: {
    fontFamily: 'Roboto-Bold',
    fontSize: SIZES.h5,
    lineHeight: SIZES.h5 * lineHeightRate,
  },
  body1: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body1,
    lineHeight: SIZES.body1 * lineHeightRate,
  },
  body2: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body2,
    lineHeight: SIZES.body2 * lineHeightRate,
  },
  body3: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body3,
    lineHeight: SIZES.body3 * lineHeightRate,
  },
  body4: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body4,
    lineHeight: SIZES.body4 * lineHeightRate,
  },
  body5: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body5,
    lineHeight: SIZES.body5 * lineHeightRate,
  },
};

const colors = {
  default: '#009387',
  primary: '#007bff',
  secondary: '#6c757d',
  success: '#28a745',
  danger: '#dc3545',
  warning: '#ffc107',
  info: '#17a2b8',
  light: '#f8f9fa',
  dark: '#343a40',
  white: '#ffffff',
};

const gradients = {
  default: ['#08d4c4', '#01ab9d'],
};

const links = {
  link: {
    color: colors.default,
  },
};
//Width
const width = {
  w50: {width: 50},
  w100: {width: 100},
  w150: {width: 150},
  w200: {width: 200},
  w250: {width: 250},
  w300: {width: 300},
};

//Buttons
const buttons = {
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 50,
  },
  buttonPrimary: {
    backgroundColor: colors.primary,
  },
  buttonPrimaryText: {
    color: colors.white,
  },
  buttonDanger: {
    backgroundColor: colors.danger,
  },
  buttonDangerText: {
    color: colors.white,
  },
  buttonSecondary: {
    backgroundColor: colors.secondary,
  },
  buttonSuccess: {
    backgroundColor: colors.success,
  },
  buttonSuccessText: {
    color: colors.white,
  },
  buttonInfo: {
    backgroundColor: colors.info,
  },
  buttonInfoText: {
    color: colors.white,
  },
  buttonWarning: {
    backgroundColor: colors.warning,
  },
  buttonWarningText: {
    color: '#222',
  },
};

const main = {
  //Basics
  flex: {flex: 1},
  container: {flex: 1, paddingHorizontal: 20},
  row: {flexDirection: 'row'},
  flexCenter: {justifyContent: 'center', alignItems: 'center'},
  //Fonts
  defaultBG: {backgroundColor: colors.default},
  defaultFont: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body5,
    lineHeight: SIZES.body5 * lineHeightRate,
  },
  //Links
  link: {color: colors.default},
  //Form
  inputGroup: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    color: colors.secondary,
    padding: 6,
  },
  inputIcon: {
    color: colors.secondary,
  },
  inputError: {color: colors.danger, borderColor: colors.danger},
  textError: {color: colors.danger},
};

const tables = {
  table: {
    width: '100%',
  },
  tableHead: {
    backgroundColor: colors.default,
    flexDirection: 'row',
    ...main.flexCenter,
    padding: 5,
  },
  tableHeadText: {
    color: colors.white,
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    ...main.flexCenter,
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  tableFooter: {
    backgroundColor: colors.default,
    flexDirection: 'row',
    ...main.flexCenter,
    padding: 5,
  },
  tableFooterText: {
    color: colors.white,
  },
};

const GS = {
  main,
  SIZES,
  fonts,
  colors,
  gradients,
  links,
  width,
  buttons,
  tables,
};

export default GS;
