import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import CargoView from './view';
import {useSelector} from 'react-redux';
import {GS} from 'constants';

const CargoScreen = ({navigation, route}) => {
  const [waybill, setWaybill] = useState(null);
  const [cargo, setCargo] = useState([]);
  const goodsList = useSelector((state) => state.goods);

  React.useLayoutEffect(() => {
    if (!goodsList.length) {
      setWaybill(null);
    }
  }, [goodsList.length]);

  useEffect(() => {
    let waybill = route?.params?.waybill;
    if (waybill) {
      setWaybill(waybill);
      setCargo(waybill.consignment_note.goods);
    }
  }, [route]);

  return !!waybill && !!cargo.length ? (
    <CargoView navigation={navigation} waybill={waybill} cargo={cargo}/>
  ) : (
    <View style={[GS.main.flex, GS.main.flexCenter]}>
      <Text style={{textAlign: 'center'}}>
        Проверка товаров доступна из путевого листа по завершению маршрута.
      </Text>
    </View>
  );
};

export default CargoScreen;
