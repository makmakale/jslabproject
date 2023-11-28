import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {GS, ICONS} from 'constants';
import styles from '../../styles';
import {useSelector} from 'react-redux';

const WaybillListItem = ({navigation, waybill}) => {
  const waybillCompleted = waybill.waybillStatusId === 2;
  const map = useSelector((state) => state.map);
  const waybillIsReadyForCheck =
    map.length &&
    map[0].waybillId === waybill.id &&
    map[map.length - 1].isChecked;

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.push(APP_MAP.waybills.view.name, {
          waybill,
          waybillCompleted,
        })
      }>
      <View
        style={[
          styles.containerAvatar,
          {
            backgroundColor: !waybillIsReadyForCheck
              ? GS.colors.default
              : GS.colors.warning,
            ...GS.main.flexCenter,
          },
        ]}>
        <ICONS.truck size={40} color="#fff"/>
      </View>

      <View style={GS.main.flex}>
        <Text
          style={[
            styles.title,
            {textDecorationLine: waybillCompleted ? 'line-through' : 'none'},
          ]}>
          Путевой лист №{waybill.id}
        </Text>
        <Text style={styles.car}>
          Машина: {waybill.consignment_note.vehicle}
        </Text>
        <Text style={styles.route}>
          Доставка до: {waybill.warehouse.fullAddress}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(WaybillListItem);
