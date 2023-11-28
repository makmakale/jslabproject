import React from 'react';
import {View, Text} from 'react-native';
import styles from '../styles';
import {GS} from 'constants';

const ViewActView = (props) => {
  const ACT = props.route?.params?.item;

  return (
    <View style={{flex: 1, padding: 15}}>
      <View style={styles.header}>
        <Text style={GS.fonts.h3}>
          Акт №{ACT.number || ACT.id} от {ACT.reportedAt}
        </Text>
        <Text style={GS.fonts.body5}>
          к накладной №{ACT.consignment_note.number} от {ACT.consignment_note.issuedDate}
        </Text>
      </View>
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

        {ACT.goods.length ? (
          ACT.goods.map((prod) => (
            <View key={prod.id} style={styles.tableRow}>
              <Text style={[styles.tableRowCell, GS.main.flex]}>
                {prod.name}
              </Text>
              <Text
                style={[
                  styles.tableRowCell,
                  styles.bordered,
                  GS.width.w100,
                  {textAlign: 'center'},
                ]}>
                {prod.unit}
              </Text>
              <Text
                style={[
                  styles.tableRowCell,
                  GS.width.w100,
                  {textAlign: 'center'},
                ]}>
                {prod.quantity}
              </Text>
            </View>
          ))
        ) : (
          <Text>Товаров не найдено</Text>
        )}
      </View>
    </View>
  );
};

export default ViewActView;
