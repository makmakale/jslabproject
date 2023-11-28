import React from 'react';
import {TouchableOpacity} from 'react-native';
import {GS, ICONS} from 'constants';
import {styles} from './styles';

const zoomInButton = (onPress) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.container, {top: GS.SIZES.height / 3 + 50}]}>
    <ICONS.zoomIn style={styles.iconColor}/>
  </TouchableOpacity>
);

const zoomOutButton = (onPress) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.container, {top: GS.SIZES.height / 3 + 100}]}>
    <ICONS.zoomOut style={styles.iconColor}/>
  </TouchableOpacity>
);

export const zoomButtons = (onPressIn, onPressOut) => (
  <React.Fragment>
    {zoomInButton(onPressIn)}
    {zoomOutButton(onPressOut)}
  </React.Fragment>
);
