import React from 'react';
import {Polyline} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_MAPS_APIKEY, GS} from 'constants';

const RenderFullPath = ({points}) => {
  if (process.env.NODE_ENV === 'production') {
    return (
      <MapViewDirections
        origin={points[0].location}
        destination={points[points.length - 1].location}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={3}
        strokeColor={GS.colors.danger}
        waypoints={points.map((item) => item.location)}
        optimizeWaypoints={true}
        mode="DRIVING"
      />
    );
  } else {
    return (
      <Polyline
        coordinates={[points[0].location, ...points.map((item) => item.location), points[points.length - 1].location]}
        strokeColor={GS.colors.danger}
        strokeWidth={3}
      />
    );
  }
};

export default RenderFullPath;
