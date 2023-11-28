import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {GS, ICONS} from 'constants';
import {HR} from 'components/common/hr';
import stringToDate from 'services/date';

const WaybillFormView = ({
  waybill,
  waybillCompleted,
  waybillIsReadyForCheck,
  handleRoutePress,
  handleGoodsPress,
  handleFinishWaybill,
}) => (
  <ScrollView style={[GS.main.flex, GS.main.container, {marginTop: 15}]}>
    <View>
      <Text style={[GS.fonts.h3, {textAlign: 'center'}]}>
        П/л №{waybill.id} от {stringToDate(waybill.departedAt)}
      </Text>
      <Text style={[GS.fonts.body5, {textAlign: 'center'}]}>
        к накладной №{waybill.consignment_note.number} от {stringToDate(waybill.consignment_note.issuedDate)}
      </Text>
    </View>
    <HR/>
    <View>
      <View style={[GS.main.row, GS.main.flexCenter]}>
        <ICONS.truck size={30}/>
        <Text style={[GS.fonts.h4, {marginLeft: 10}]}>{waybill.consignment_note.vehicle}</Text>
      </View>
      <HR/>
      <View style={{marginBottom: 10}}>
        <Text style={GS.fonts.h4}>Пунк погрузки</Text>
        <Text style={GS.fonts.body5}>
          Компания: <Text
          style={GS.fonts.h5}>{waybill.consignment_note.client.companyName || waybill.consignment_note.client.shortFullName}</Text>
        </Text>
        <Text style={GS.fonts.body5}>
          Адрес: {waybill.consignment_note.client.fullAddress}
        </Text>
      </View>
      <View style={{marginBottom: 10}}>
        <Text style={GS.fonts.h4}>Пунк разгрузки</Text>
        <Text style={GS.fonts.body5}>Компания:
          <Text style={GS.fonts.h5}> {waybill.warehouse.name}</Text>
        </Text>
        <Text style={GS.fonts.body5}>
          Адрес: {waybill.warehouse.fullAddress}
        </Text>
      </View>
      <View style={!waybill.control_points.length && {display: 'none'}}>
        <HR/>
        <Text style={GS.fonts.h4}>Необходимо отметиться</Text>
        <Text style={GS.fonts.body5}>
          {waybill.control_points.map((item) => item.name).join(', ')}
        </Text>
      </View>
    </View>

    {!waybillCompleted ? (
      <>
        {!waybillCompleted && !waybillIsReadyForCheck ? (
          <View>
            <HR/>
            <TouchableOpacity
              style={[GS.buttons.button, GS.buttons.buttonInfo]}
              onPress={handleRoutePress}>
              <Text style={GS.buttons.buttonInfoText}>Маршрут</Text>
            </TouchableOpacity>
          </View>
        ) : null}

        {waybillIsReadyForCheck ? (
          <View>
            <HR/>
            <TouchableOpacity
              style={[GS.buttons.button, GS.buttons.buttonDanger]}
              onPress={handleGoodsPress}>
              <Text style={GS.buttons.buttonDangerText}>Есть потери</Text>
            </TouchableOpacity>
          </View>
        ) : null}

        {!waybillCompleted && waybillIsReadyForCheck ? (
          <View>
            <HR/>
            <TouchableOpacity
              style={[GS.buttons.button, GS.buttons.buttonSuccess]}
              onPress={handleFinishWaybill}>
              <Text style={GS.buttons.buttonSuccessText}>
                Завершить перевозку
              </Text>
            </TouchableOpacity>
          </View>
        ) : null}
      </>
    ) : null}
  </ScrollView>
);

export default WaybillFormView;
