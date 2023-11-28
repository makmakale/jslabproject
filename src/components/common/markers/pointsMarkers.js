import React from 'react';
import {Image, View, Text} from 'react-native';
import {Marker, Callout} from 'react-native-maps';
import {IMAGES} from 'constants';
import styles from '../styles';
import {fitToCoordinates} from 'services/map';

export const wayPointsMarkers = (waypoints, navigation, mapView) => {
  return waypoints.map((wp, idx) => (
    <React.Fragment key={idx}>
      <Marker
        coordinate={wp.location}
        onPress={() => fitToCoordinates([wp.location], mapView)}
      >
        <Image
          source={
            idx === 0 || idx === waypoints.length - 1
              ? wp.isChecked
              ? IMAGES.mapMarkerChecked
              : IMAGES.mapMarker
              : wp.isChecked
              ? IMAGES.checkMarkerChecked
              : IMAGES.checkMarker
          }
          style={{
            width: idx === 0 || idx === waypoints.length - 1 ? 40 : 30,
            height: idx === 0 || idx === waypoints.length - 1 ? 40 : 30,
          }}
          resizeMode="contain"
        />
        <Callout
          tooltip={true}
          onPress={() => {
            if (
              idx === 0 ||
              (!!waypoints[idx - 1] && waypoints[idx - 1].isChecked)
            ) {
              navigation.push(APP_MAP.map.waypoint.name, {id: wp.id});
            }
          }}>
          <View>
            <View style={styles.bubble}>
              {wp.title ? <Text style={styles.name}>{wp.title}</Text> : null}
              {wp.description ? (
                <Text style={styles.description}>{wp.description}</Text>
              ) : null}
              {wp.expectDate ? (
                <Text style={styles.description}>Ожидается прибытие: {wp.expectDate}</Text>
              ) : null}
            </View>
            <View style={styles.arrowBorder}/>
            <View style={styles.arrow}/>
          </View>
        </Callout>
      </Marker>
    </React.Fragment>
  ));
};
