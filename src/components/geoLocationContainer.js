import React, {useEffect} from 'react';
import {requestLocationPermission} from 'services/permissions';
import Geolocation from 'react-native-geolocation-service';
import {connect, useDispatch} from 'react-redux';
import {addPosition} from 'store/geoLoc/actions';

const GEO_CONFIG = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
  showLocationDialog: false,
};

let watchID = null;

function GeoLocationContainer({geoLoc}) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (geoLoc.isActive) {
      requestLocationPermission().then(() => {
        watchID = Geolocation.watchPosition(
          (position) => {
            const {latitude, longitude} = position.coords;
            dispatch(addPosition({location: {latitude, longitude}}));
          },
          (err) => {
            console.warn('ERROR(' + err.code + '): ' + err.message);
          },
          GEO_CONFIG,
        );
      });
    } else {
      Geolocation.clearWatch(watchID);
    }
  }, [geoLoc.isActive]);

  return null;
}

const mapStateToProps = (state) => ({
  geoLoc: state.geoLoc,
});
export default connect(mapStateToProps)(GeoLocationContainer);
