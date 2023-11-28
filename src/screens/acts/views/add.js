import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styles from '../styles';
import {GS} from 'constants';
import {dispatchAddAct} from 'store/acts/actions';
import {dispatchResetProduct} from 'store/goods/actions';
import stringToDate from 'services/date';
import {useDropDown} from 'contexts/DropDownContext';

const AddActView = ({navigation, route}) => {
  const waybill = route?.params?.waybill;
  const user = useSelector((state) => state.user);
  const actsList = useSelector((state) => state.acts);
  const goodsList = useSelector((state) => state.goods);
  const dispatch = useDispatch();
  const toast = useDropDown();

  const dispatchNewAct = (act, onSuccess, onError) => dispatch(dispatchAddAct(act, onSuccess, onError));

  React.useLayoutEffect(() => {
    !goodsList.length && navigation.navigate(APP_MAP.acts.name, {screen: APP_MAP.acts.name});
  }, [goodsList.length]);

  return (
    <View style={{flex: 1, padding: 15}}>
      <View style={{flex: 3}}>
        <Text style={styles.tableHeading}>
          Перечень испорченных и/или украденных товаров
        </Text>
        <View style={styles.bordered}>
          <View style={styles.tableHeader}>
            <Text style={[styles.tableHeaderText, GS.main.flex]}>
              Наименование товара
            </Text>
            <Text
              style={[styles.tableHeaderText, styles.bordered, GS.width.w100]}>
              Ед. изм
            </Text>
            <Text style={[styles.tableHeaderText, GS.width.w100]}>Кол-во</Text>
          </View>

          {goodsList.length ? (
            goodsList.map((item) => (
              <View key={item.id} style={styles.tableRow}>
                <Text style={[styles.tableRowCell, GS.main.flex]}>
                  {item.name}
                </Text>
                <Text
                  style={[
                    styles.tableRowCell,
                    styles.bordered,
                    GS.width.w100,
                    {textAlign: 'center'},
                  ]}>
                  {item.unit}
                </Text>
                <Text
                  style={[
                    styles.tableRowCell,
                    GS.width.w100,
                    {textAlign: 'center'},
                  ]}>
                  {item.stolen}
                </Text>
              </View>
            ))
          ) : (
            <Text>Товаров не найдено</Text>
          )}
        </View>
        <View style={styles.footer}>
          <Text style={{color: '#aaa'}}>Исполнитель: Я ({user.fullName})</Text>
        </View>
      </View>

      <View style={GS.main.row}>
        <TouchableOpacity
          style={[GS.main.flex, GS.buttons.button, GS.buttons.buttonPrimary]}
          onPress={() => {
            let newAct = {
              number: `${actsList.length + 1}/${user.userId}`,
              goods: goodsList.map((item) => ({
                name: item.name,
                quantity: item.stolen,
                unit: item.unit,
                cost: item.cost,
                weight: item.weight,
              })),
              userId: user.userId,
              consignmentNoteId: waybill.consignment_note.id,
              ttn: {
                number: waybill.consignment_note.number,
                date: stringToDate(waybill.consignment_note.issuedDate),
              },
            };

            dispatchNewAct(
              newAct,
              () => toast('success', 'Акт успешно создан!'),
              (message) => toast('error', 'Ошибка', message),
            );
            navigation.navigate(APP_MAP.acts.name);
          }}>
          <Text style={GS.buttons.buttonPrimaryText}>Создать</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            GS.main.flex,
            GS.buttons.button,
            GS.buttons.buttonSecondary,
            {marginLeft: 15},
          ]}
          onPress={() => {
            dispatch(dispatchResetProduct());
            navigation.navigate(APP_MAP.cargo.name);
          }}>
          <Text style={GS.buttons.buttonPrimaryText}>Отменить</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddActView;
