import React from 'react';
import {ICONS} from 'constants';
import {TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {GS} from 'constants';

export const trafficButton = (state, onPress) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.container, {top: GS.SIZES.height / 3 - 40}]}>
    <ICONS.traffic
      style={{color: state ? GS.colors.default : GS.colors.danger}}
      size={24}
    />
  </TouchableOpacity>
);
