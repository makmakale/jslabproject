import * as React from 'react';
import {Text, View, TouchableOpacity, TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import {ICONS, GS} from 'constants';
import styles from './styles';

const LoginView = (props) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.text_header}>Добро пожаловать!</Text>
    </View>

    <Animatable.View
      animation="fadeInUpBig"
      style={[styles.footer, {backgroundColor: GS.colors.white}]}>
      <Text
        style={[
          styles.text_footer,
          {
            color: !props.data.isValidEmail
              ? GS.colors.danger
              : GS.colors.secondary,
          },
        ]}>
        Email
      </Text>
      <View style={styles.action}>
        <ICONS.user
          color={
            !props.data.isValidEmail ? GS.colors.danger : GS.colors.secondary
          }
        />
        <TextInput
          placeholder="Email"
          placeholderTextColor={GS.colors.secondary}
          style={[
            styles.textInput,
            {
              color: !props.data.isValidEmail
                ? GS.colors.danger
                : GS.colors.secondary,
            },
          ]}
          autoCapitalize="none"
          keyboardType="email-address"
          onChangeText={props.emailHandle}
          value={props.data.email}
        />
      </View>
      {props.data.isValidEmail ? null : (
        <Animatable.View animation="fadeInLeft" duration={500}>
          <Text style={styles.errorMsg}>Некорректный Email</Text>
        </Animatable.View>
      )}

      <Text
        style={[
          styles.text_footer,
          {
            color: !props.data.isValidPassword
              ? GS.colors.danger
              : GS.colors.secondary,
            marginTop: 35,
          },
        ]}>
        Пароль
      </Text>
      <View style={styles.action}>
        <ICONS.password
          color={
            !props.data.isValidPassword ? GS.colors.danger : GS.colors.secondary
          }
        />
        <TextInput
          placeholder="Your Password"
          placeholderTextColor={GS.colors.secondary}
          secureTextEntry={props.data.hidePassword}
          style={[
            styles.textInput,
            {
              color: !props.data.isValidPassword
                ? GS.colors.danger
                : GS.colors.secondary,
            },
          ]}
          autoCapitalize="none"
          onChangeText={props.passwordHandle}
          value={props.data.password}
        />
        <TouchableOpacity onPress={props.securePassword}>
          {props.data.hidePassword ? (
            <ICONS.hidePassword style={GS.main.inputIcon}/>
          ) : (
            <ICONS.showPassword style={GS.main.inputIcon}/>
          )}
        </TouchableOpacity>
      </View>
      {props.data.isValidPassword ? null : (
        <Animatable.View animation="fadeInLeft" duration={500}>
          <Text style={styles.errorMsg}>
            Пароль должен быть от 8 до 15 символов.
          </Text>
        </Animatable.View>
      )}

      <TouchableOpacity
        onPress={() => props.navigation.push(APP_MAP.login.forgot.name)}>
        <Text style={{color: GS.colors.default, marginTop: 15}}>
          Забыли пароль?
        </Text>
      </TouchableOpacity>

      <View style={styles.button}>
        <TouchableOpacity style={styles.signIn} onPress={props.handleSubmit}>
          <LinearGradient colors={GS.gradients.default} style={styles.signIn}>
            <Text
              style={[
                styles.textSign,
                {
                  color: GS.colors.white,
                },
              ]}>
              Войти
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </Animatable.View>
  </View>
);

export default LoginView;
