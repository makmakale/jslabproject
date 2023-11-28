import * as React from 'react';
import Geocoder from 'react-native-geocoding';
import {GOOGLE_MAPS_APIKEY, GS} from 'constants';
import * as geolib from 'geolib';

Geocoder.init(GOOGLE_MAPS_APIKEY);

export const DEFAULT_DELTA = {
  latitudeDelta: 0.005,
  longitudeDelta: (GS.SIZES.width / GS.SIZES.height) * 0.005,
};

export const addressToCoords = async (location) => {
  let res = await Geocoder.from(location);
  return {
    latitude: res.results[0].geometry.location.lat,
    longitude: res.results[0].geometry.location.lng,
  };
};

export const getRegion = (start, end) => {
  return {
    latitude: (start.latitude + end.latitude) / 2,
    longitude: (start.longitude + end.longitude) / 2,
    latitudeDelta: Math.abs(start.latitude - end.latitude) * 2,
    longitudeDelta: Math.abs(start.longitude - end.longitude) * 2,
  };
};

export const zoomIn = (region, mapView) => {
  let mapRegion = {
    latitude: region.latitude,
    longitude: region.longitude,
    latitudeDelta: region.latitudeDelta / 2,
    longitudeDelta: region.longitudeDelta / 2,
  };
  mapView.current.animateToRegion(mapRegion);
};

export const zoomOut = (region, mapView) => {
  let mapRegion = {
    latitude: region.latitude,
    longitude: region.longitude,
    latitudeDelta: region.latitudeDelta * 2,
    longitudeDelta: region.longitudeDelta * 2,
  };
  mapView.current.animateToRegion(mapRegion);
};

export const getDistance = (start, end) => {
  if (!start || !end) {
    return;
  }

  let dist = geolib.getDistance(start, end);
  if (dist > 1000) {
    return (dist / 1000).toFixed(2) + ' км';
  }
  return dist + ' м';
};

export const fitToCoordinates = (arr, mapView) => {
  mapView.current.fitToCoordinates(
    arr,
    {
      edgePadding: {top: 100, right: 100, bottom: 100, left: 100},
      animated: true,
    },
  );
};
