import React from 'react';
import {ICONS} from 'constants';
import {TouchableOpacity} from 'react-native';
import {styles} from './styles';

export const menuButton = (onPress) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.container, {top: 10, left: 10}]}>
    <ICONS.menu style={styles.iconColor}/>
  </TouchableOpacity>
);
