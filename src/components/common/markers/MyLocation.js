import React from 'react';
import {Image} from 'react-native';
import {Marker} from 'react-native-maps';
import {IMAGES} from 'constants';

const MyLocation = ({location}) => (
  <Marker
    coordinate={location}
    title="Я"
    anchor={{x: 0.5, y: 0.5}}
    flat={true}>
    <Image
      source={IMAGES.locMarker}
      style={{width: 40, height: 40}}
      resizeMode="contain"
    />
  </Marker>
);

export default MyLocation;
