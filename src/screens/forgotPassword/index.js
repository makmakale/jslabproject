import * as React from 'react';
import {isValidEmail} from '../login/views/validation';
import {connect} from 'react-redux';
import {useDropDown} from 'contexts/DropDownContext';
import {recoverPassword} from 'store/user/actions';
import View from './view';

const ForgotPasswordScreen = (props) => {
  const toast = useDropDown();

  const [data, setData] = React.useState({
    email: '',
    isValidEmail: true,
  });

  const emailHandle = (val) => {
    setData({
      ...data,
      email: val,
      isValidEmail: isValidEmail(val),
    });
  };

  const isFormValid = () => {
    if (!data.isValidEmail || !data.email) {
      toast('error', 'Ошибка', 'Неправильный email!');
      return false;
    }
    return true;
  };

  function handleSubmit() {
    if (isFormValid()) {
      if (props.recoverPassword(data.email)) {
        toast('success', '', 'Пароль выслан Вам на email.');
        props.navigation.navigate(APP_MAP.login.name);
      } else {
        toast('error', 'Ошибка', 'Что-то пошло не так. Попробуйте еще раз.');
      }
    }
  }

  return (
    <View
      navigation={props.navigation}
      user={props.user}
      data={data}
      emailHandle={emailHandle}
      handleSubmit={handleSubmit}
    />
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  recoverPassword: (email, onSuccess, onError) =>
    dispatch(recoverPassword({email}, onSuccess, onError)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ForgotPasswordScreen);
