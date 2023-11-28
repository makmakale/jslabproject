import React from 'react';
import {ICONS} from 'constants';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

export const distanceBlock = (address, distance, onPress) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <ICONS.dist style={styles.icon}/>

    <View style={styles.textContainer}>
      <Text style={styles.text}>{address}</Text>
      <Text style={[styles.text, {minWidth: 65, textAlign: 'right'}]}>{distance}</Text>
    </View>
  </TouchableOpacity>
);
