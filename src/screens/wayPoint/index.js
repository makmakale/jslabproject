import React from 'react';
import {View} from 'react-native';
import {Title, Subheading, Button, Text} from 'react-native-paper';
import {GS} from 'constants';
import {useDispatch, useSelector} from 'react-redux';
import {checkPoint} from 'store/map/actions';

const WaypointScreen = ({navigation, route}) => {
  const id = route.params?.id;
  const points = useSelector((state) => state.map);
  const waybills = useSelector((state) => state.wayBills);
  const [data, setData] = React.useState(null);
  const lastPoint = points.length && points[points.length - 1];
  const dispatch = useDispatch();

  React.useEffect(() => {
    let point = points.find((item) => item.id === id);
    if (point) {
      setData(point);
    }
  }, [points]);

  React.useLayoutEffect(() => {
    !points.length && navigation.navigate(APP_MAP.waybills.name);
  }, [points.length]);

  return (
    data && (
      <View style={[GS.main.flex, GS.main.flexCenter]}>
        <View
          style={{
            borderWidth: 0.5,
            borderRadius: 5,
            borderColor: '#bbb',
            padding: 20,
            margin: 20,
          }}>
          <Title style={{textAlign: 'center'}}>{data.title}</Title>
          {data.description ? (
            <Subheading>{data.description}</Subheading>
          ) : null}
          {data.expectDate ? (
            <Subheading>не позднее: {data.expectDate}</Subheading>
          ) : null}
        </View>
        <View>
          {!data.isChecked ? (
            <Button
              icon="map-check"
              mode="contained"
              onPress={() => {
                dispatch(checkPoint(id));
              }}>
              Отметиться
            </Button>
          ) : (
            <>
              <Text style={[GS.fonts.body5, {textAlign: 'center'}]}>
                Точка пройдена.
              </Text>

              {lastPoint && lastPoint.isChecked ? (
                <Button
                  mode="contained"
                  onPress={() => {
                    let waybill = !!points.length &&
                      waybills.filter(item => item.id === points[0].waybillId)[0];
                    navigation.navigate(APP_MAP.waybills.view.name, {waybill});
                  }}
                  style={{marginTop: 20}}>
                  Вернуться в путевой лист
                </Button>
              ) : null}
            </>
          )}
        </View>
      </View>
    )
  );
};

export default WaypointScreen;
