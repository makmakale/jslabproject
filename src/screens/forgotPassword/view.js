import * as React from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Loading from 'screens/loading';
import {ICONS, GS} from 'constants';
import * as Animatable from 'react-native-animatable';
import styles from '../login/views/styles';

const ForgotView = (props) => (
  <>
    {props.user.isLoading && <Loading/>}
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Забыли пароль?</Text>
      </View>
      <Animatable.View
        animation="fadeInUpBig"
        style={[
          styles.footer,
          {
            backgroundColor: GS.colors.white,
          },
        ]}>
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
                Восстановить | <ICONS.update/>
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  </>
);

export default ForgotView;
