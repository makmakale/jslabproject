import {StyleSheet, Platform} from 'react-native';
import {GS} from 'constants';

const styles = StyleSheet.create({
  container: {
    ...GS.main.flex,
    ...GS.main.defaultBG,
  },
  header: {
    ...GS.main.flex,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: GS.colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 40,
    paddingVertical: 40,
  },
  text_header: {
    color: GS.colors.white,
    ...GS.fonts.h1,
    ...GS.fonts.companyName,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    ...GS.main.row,
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: GS.colors.danger,
    paddingBottom: 5,
  },
  textInput: {
    ...GS.main.flex,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  errorMsg: {
    color: GS.colors.danger,
    ...GS.fonts.body5,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    ...GS.fonts.h4,
  },
});

export default styles;
