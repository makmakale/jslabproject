import React from 'react';
import {Polyline} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_MAPS_APIKEY, GS} from 'constants';

const RenderCurrentPath = ({startLocation, endLocation}) => {
  if (process.env.NODE_ENV === 'production') {
    return (
      <MapViewDirections
        origin={startLocation}
        destination={endLocation}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={4}
        strokeColor={GS.colors.primary}
        mode="DRIVING"
      />
    );
  } else {
    return (
      <Polyline
        coordinates={[startLocation, endLocation]}
        strokeColor={GS.colors.primary}
        strokeWidth={4}
      />
    );
  }
};

export default RenderCurrentPath;
