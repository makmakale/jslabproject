import React from 'react';
import FormView from './view';
import {connect, useDispatch, useSelector} from 'react-redux';
import {finishWaybill} from 'store/waybill/actions';
import {setRoutePoints} from 'store/map/actions';
import {useDropDown} from 'contexts/DropDownContext';

const WaybillFormScreen = ({navigation, route, dispatchFinishWaybill}) => {
  const {waybill, waybillCompleted} = route.params;
  const dispatch = useDispatch();
  const map = useSelector((state) => state.map);
  const waybillIsReadyForCheck =
    waybill &&
    map.length &&
    map[map.length - 1].isChecked;
  const toast = useDropDown();

  const handleRoutePress = () => {
    dispatch(setRoutePoints(waybill));
    navigation.navigate(APP_MAP.map.name);
  };

  const handleGoodsPress = () => {
    navigation.navigate(APP_MAP.cargo.name, {
      screen: APP_MAP.cargo.name,
      params: {waybill},
    });
  };

  const handleFinishWaybill = () => {
    dispatchFinishWaybill(
      waybill.id,
      () => toast('success', 'Доставка товаров завершена!'),
      (message) => toast('error', 'Ошибка', message),
    );
    navigation.navigate(APP_MAP.waybills.name);
  };

  return (
    <FormView
      navigation={navigation}
      waybill={waybill}
      waybillCompleted={waybillCompleted}
      waybillIsReadyForCheck={waybillIsReadyForCheck}
      handleRoutePress={handleRoutePress}
      handleGoodsPress={handleGoodsPress}
      handleFinishWaybill={handleFinishWaybill}
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  dispatchFinishWaybill: (id, onSuccess, onError) =>
    dispatch(finishWaybill(id, onSuccess, onError)),
});

export default connect(null, mapDispatchToProps)(WaybillFormScreen);
