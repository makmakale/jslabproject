import React from 'react';
import {FlatList, View, TouchableOpacity, Text} from 'react-native';
import {Badge} from 'react-native-paper';
import {connect} from 'react-redux';
import ListItem from './listItem';
import {ICONS} from 'constants';
import styles from '../styles';
import stringToDate from 'services/date';

const CargoView = (props) => {
  const {navigation, waybill, cargo, goodsList} = props;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>Проверка товаров</Text>
          <Text style={styles.headerSubTitle}>
            по ТТН №{waybill.consignment_note.number} от {stringToDate(waybill.consignment_note.issuedDate)}
          </Text>
        </View>

        {!goodsList.length ? (
          <ICONS.actsEmpty size={40}/>
        ) : (
          <TouchableOpacity
            style={styles.stolenBadgeContainer}
            onPress={() =>
              navigation.navigate(APP_MAP.acts.name, {screen: APP_MAP.acts.add.name, params: {waybill}})
            }>
            <ICONS.actsAdded size={40}/>
            <Badge style={styles.stolenBadge}>{goodsList.length}</Badge>
            <Text style={styles.small}>Создать акт</Text>
          </TouchableOpacity>
        )}
      </View>
      <FlatList
        data={cargo}
        renderItem={({item}) => <ListItem item={item}/>}
        keyExtractor={(item) => item.id.toString()}
        style={{width: '100%'}}
      />
    </View>
  );
};

const mapStateToProps = (state) => ({
  goodsList: state.goods,
  actsList: state.acts.data,
});

export default connect(mapStateToProps)(CargoView);
