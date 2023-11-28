import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../../../waybill/styles';
import {GS, ICONS} from 'constants';

const ListItem = (props) => {
  let {navigation, item} = props;

  React.useLayoutEffect(() => {
    !item && navigation.navigate(APP_MAP.acts.name);
  }, [item]);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.push(APP_MAP.acts.view.name, {item});
      }}>
      <View
        style={[
          styles.containerAvatar,
          {
            backgroundColor: GS.colors.default,
            ...GS.main.flexCenter,
          },
        ]}>
        <ICONS.truck size={40} color="#fff"/>
      </View>

      {item && <View style={GS.main.flex}>
        <Text style={styles.title}>
          Акт №{item.number || item.id} от {item.reportedAt}
        </Text>
        <Text style={styles.car}>
          к накладной №{item.consignment_note.number} от {item.consignment_note.issuedDate}
        </Text>
      </View>}
    </TouchableOpacity>
  );
};

export default ListItem;
