import React, {useState, useEffect, useCallback} from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {GS} from 'constants';
import {
  DEFAULT_DELTA,
  zoomIn,
  zoomOut,
  getDistance,
  fitToCoordinates,
} from 'services/map';
import {
  MyLocation,
  wayPointsMarkers,
  gpsButton,
  zoomButtons,
  regionButton,
  mapPathButton,
  menuButton,
  trafficButton,
  distanceBlock,
  RenderCurrentPath,
  RenderFullPath,
  mapFullPathButton,
} from 'components/common';
import {useFocusEffect} from '@react-navigation/native';
import Loading from 'screens/loading';
import {getMapRoutesFromStorage} from 'store/map/actions';

const MapsScreen = (props) => {
  const dispatch = useDispatch();
  const mapView = React.useRef(null);
  const GEO_LOC = useSelector((state) => state.geoLoc.coords);
  const points = useSelector((state) => state.map);

  const [currentLocation, setCurrentLocation] = useState(null);
  const [region, setRegion] = useState(null);
  const [showTraffic, setShowTraffic] = useState(false);
  const [showFullPath, setShowFullPath] = useState(true);

  const nextPoint = points.length && points.find((item) => !item.isChecked);

  useEffect(() => {
    if (GEO_LOC.length) {
      setCurrentLocation(GEO_LOC[0].location);
      if (!region) {
        setRegion({
          ...GEO_LOC[0].location,
          ...DEFAULT_DELTA,
        });
      }
    }
  }, [GEO_LOC.length]);

  useEffect(() => {
    if (!points.length) {
      dispatch(getMapRoutesFromStorage());
    }
  }, [points.length]);

  useFocusEffect(
    useCallback(() => {
      dispatch({type: 'START_WATCH_LOCATION'});

      return () => {
        dispatch({type: 'STOP_WATCH_LOCATION'});
      };
    }, [props.navigation, props.route]),
  );

  if (!currentLocation) {
    return <Loading/>;
  }

  return (
    <View style={GS.main.flex}>
      <MapView
        ref={mapView}
        provider={PROVIDER_GOOGLE}
        initialRegion={{...currentLocation, ...DEFAULT_DELTA}}
        showsTraffic={showTraffic}
        style={GS.main.flex}
        onRegionChangeComplete={(region) => setRegion(region)}>

        <MyLocation location={currentLocation}/>

        {!!points.length && showFullPath && nextPoint ? (<RenderFullPath points={points}/>) : null}
        {!!nextPoint ? (<RenderCurrentPath startLocation={currentLocation} endLocation={nextPoint.location}/>) : null}

        {!!points.length ? (wayPointsMarkers(points, props.navigation, mapView)) : null}
      </MapView>

      {/*Top block*/}
      {menuButton(() => props.navigation.openDrawer())}

      {!!nextPoint ?
        distanceBlock(
          nextPoint.description || nextPoint.title,
          getDistance(currentLocation, nextPoint.location),
          () => fitToCoordinates([nextPoint.location], mapView),
        )
        : null}

      {trafficButton(showTraffic, () => setShowTraffic(!showTraffic))}

      {!!nextPoint && mapFullPathButton(showFullPath, () => setShowFullPath(!showFullPath))}

      {zoomButtons(
        () => zoomIn(region, mapView),
        () => zoomOut(region, mapView),
      )}

      {gpsButton(() => fitToCoordinates([currentLocation], mapView))}

      {!!nextPoint && mapPathButton(() =>
        fitToCoordinates([currentLocation, nextPoint.location], mapView),
      )}

      {points.length >= 2 &&
      regionButton(() =>
        fitToCoordinates(
          points.map((item) => item.location),
          mapView,
        ),
      )}
    </View>
  );
};

export default MapsScreen;
