import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import {GS, ICONS, IMAGES} from 'constants';

const RootScreenView = ({navigation}) => {
  return (
    <View style={[GS.main.flex, GS.main.defaultBG]}>
      <View style={[GS.main.flexCenter, {flex: 2}]}>
        <View style={styles.headerImageContainer}>
          <Animatable.Image
            animation="bounceIn"
            duraton="1500"
            source={IMAGES.mainPage}
            style={styles.headerImage}
          />
        </View>
      </View>

      <Animatable.View
        style={[GS.main.container, styles.footer]}
        animation="fadeInUpBig">
        <Text style={styles.title}>JSLabTrans!</Text>
        <Text style={styles.subTitle}>Транспортная компания</Text>

        <View style={styles.buttonGroup}>
          <TouchableOpacity
            onPress={() => navigation.navigate(APP_MAP.login.name)}>
            <LinearGradient
              colors={GS.gradients.default}
              style={[
                GS.buttons.button,
                GS.width.w200,
                GS.main.row,
                GS.main.flexCenter,
              ]}>
              <Text
                style={[GS.fonts.h4, {color: GS.colors.white, marginRight: 5}]}>
                Начать
              </Text>
              <ICONS.chevronRight size={20} color={GS.colors.white}/>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default RootScreenView;
