import * as React from 'react';
import {connect} from 'react-redux';
import {isValidEmail, isValidPassword} from './validation';
import LoginView from './view';
import {useDropDown} from 'contexts/DropDownContext';
import {loginUser} from 'store/user/actions';
import {Loader} from 'screens';

const LoginScreen = (props) => {
  const toast = useDropDown();

  const [data, setData] = React.useState({
    email: 'vodyatel1992@mail.ru',
    password: 'passWORD1',
    hidePassword: true,
    isValidEmail: true,
    isValidPassword: true,
  });

  const emailHandle = (val) => {
    setData({
      ...data,
      email: val,
      isValidEmail: isValidEmail(val),
    });
  };

  const passwordHandle = (val) => {
    setData({
      ...data,
      password: val,
      isValidPassword: isValidPassword(val),
    });
  };

  const securePassword = () => {
    setData({
      ...data,
      hidePassword: !data.hidePassword,
    });
  };

  const isFormValid = () => {
    if (!data.isValidEmail) {
      toast('error', 'Ошибка', 'Неправильный email!');
      return false;
    }
    if (!data.isValidPassword) {
      toast('error', 'Ошибка', 'Неправильный пароль!');
      return false;
    }
    return true;
  };

  function handleSubmit() {
    if (isFormValid()) {
      props.dispatchLoginAction(
        data.email,
        data.password,
        () => toast('success', 'Вы успешно авторизованы!'),
        (message) => toast('error', 'Ошибка', message),
      );
    }
  }

  if (props.isLoading) {
    return <Loader/>;
  }

  return (
    <LoginView
      navigation={props.navigation}
      data={data}
      securePassword={securePassword}
      emailHandle={emailHandle}
      passwordHandle={passwordHandle}
      handleSubmit={handleSubmit}
    />
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.loading,
});
const mapDispatchToProps = (dispatch) => ({
  dispatchLoginAction: (email, password, onSuccess, onError) =>
    dispatch(loginUser({email, password}, onSuccess, onError)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
