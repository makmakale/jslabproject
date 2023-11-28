import React from 'react';
import {ICONS} from 'constants';
import {TouchableOpacity} from 'react-native';
import {styles} from './styles';

export const regionButton = (onPress) => (
  <TouchableOpacity onPress={onPress} style={[styles.container, {right: 110}]}>
    <ICONS.region style={styles.iconColor}/>
  </TouchableOpacity>
);

export const mapPathButton = (onPress) => (
  <TouchableOpacity onPress={onPress} style={[styles.container, {right: 60}]}>
    <ICONS.mapPath style={styles.iconColor}/>
  </TouchableOpacity>
);
