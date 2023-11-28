import React from 'react';
import {ICONS} from 'constants';
import {TouchableOpacity} from 'react-native';
import {styles} from './styles';

export const gpsButton = (onPress) => (
  <TouchableOpacity onPress={onPress} style={[styles.container]}>
    <ICONS.gps style={styles.iconColor}/>
  </TouchableOpacity>
);
