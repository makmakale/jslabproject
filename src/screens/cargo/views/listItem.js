import React from 'react';
import {Text, TextInput, TouchableOpacity, View, Alert} from 'react-native';
import {GS, ICONS} from 'constants';
import styles from '../styles';
import {useDispatch, useSelector} from 'react-redux';
import {
  dispatchAddProduct,
  dispatchUpdateProduct,
  dispatchRemoveProduct,
} from 'store/goods/actions';
import {getWeight} from 'services/helpers';

const ListItem = (props) => {
  let {item} = props;
  const stolenList = useSelector((state) => state.goods);
  const founded = stolenList.find((prod) => prod.id === item.id);
  const dispatch = useDispatch();
  const [damaged, setDamaged] = React.useState(0);

  React.useEffect(() => {
    setDamaged(founded ? parseInt(founded.stolen) : 0);
  }, [stolenList.length]);

  const handleChangeText = (text) => {
    let newCount = parseInt(text);
    if (isNaN(newCount)) {
      newCount = 0;
    }

    setDamaged(newCount);
  };

  const checkCount = (count) => {
    if (count > item.quantity) {
      Alert.alert(
        'Ошибка',
        'Количество утраченных/испорченных товаров не может превышать их количество в накладной!',
      );
      return false;
    } else if (count < 0) {
      Alert.alert(
        'Ошибка',
        'Количество утраченных/испорченных товаров не может быть меньше 0!',
      );
      return false;
    }
    return true;
  };

  const decrementCount = () => {
    setDamaged(damaged - 1 >= 0 ? damaged - 1 : 0);
  };

  const incrementCount = () => {
    setDamaged(
      damaged + 1 < item.quantity ? damaged + 1 : parseInt(item.quantity),
    );
  };

  return (
    <View style={styles.listItem}>
      <View
        style={[
          GS.main.row,
          {borderBottomWidth: 0.5, borderBottomColor: '#ccc'},
        ]}>
        <View style={styles.listItemCol}>
          <Text style={GS.fonts.h5}>{item.name}</Text>
          <Text style={{fontSize: 12}}>
            Кол-во в накладной: {item.quantity}
          </Text>
          <Text style={{fontSize: 12}}>Ед.изм.: {item.unit}</Text>
          <Text style={{fontSize: 12}}>Вес: {getWeight(item.quantity, item.weight)}</Text>
        </View>
        <View style={styles.actions}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: 'bold',
              marginBottom: 10,
              textAlign: 'center',
            }}>
            Кол-во утер./поврежд.
          </Text>

          <View style={GS.main.row}>
            <TouchableOpacity
              style={[styles.countButtons, styles.countLeftButton]}
              onPress={() => decrementCount()}>
              <ICONS.minus color={GS.colors.white} size={14}/>
            </TouchableOpacity>

            <TextInput
              value={damaged.toString()}
              keyboardType="number-pad"
              onChangeText={(val) => handleChangeText(val)}
              style={styles.countInput}
            />

            <TouchableOpacity
              style={[styles.countButtons, styles.countRightButton]}
              onPress={() => incrementCount()}>
              <ICONS.plus color={GS.colors.white} size={14}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => {
          let foundedProduct = stolenList.find((prod) => prod.id === item.id);

          if (!foundedProduct) {
            if (checkCount(damaged)) {
              dispatch(dispatchAddProduct({...item, stolen: damaged}));
            }
          } else {
            if (checkCount(damaged)) {
              dispatch(dispatchUpdateProduct(item.id, {stolen: damaged}));
            } else {
              dispatch(dispatchRemoveProduct(item.id));
            }
          }
        }}
        style={styles.stolenBtn}>
        <Text style={GS.buttons.buttonDangerText}>
          <ICONS.addToAct size={16}/> Добавить в акт
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ListItem;
