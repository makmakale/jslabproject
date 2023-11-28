import React from 'react';
import {View, Text, FlatList, ImageBackground, StyleSheet} from 'react-native';
import {GS, IMAGES} from 'constants';
import ListItem from './item';
import {connect} from 'react-redux';
import {fetchAllWaybills} from 'store/waybill/actions';
import {Loader} from 'screens';

const WaybillListScreen = ({
  navigation,
  wayBills,
  dispatchAllWaybills,
  isLoading,
}) => {
  React.useEffect(() => dispatchAllWaybills(), []);

  if (isLoading) {
    return <Loader/>;
  }

  return (
    !!wayBills.length ? (
      <ImageBackground
        source={IMAGES.waybills}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}
      >
        <View>
          <FlatList
            data={wayBills}
            renderItem={({item}) => (
              <ListItem waybill={item} navigation={navigation}/>
            )}
            contentContainerStyle={{
              padding: 20,
            }}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </ImageBackground>
    ) : (
      <View style={[GS.main.flex, GS.main.flexCenter]}>
        <Text>Путевые листы не найдены.</Text>
      </View>
    )
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.loading,
  wayBills: state.wayBills,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchAllWaybills: () => dispatch(fetchAllWaybills()),
});
export default connect(mapStateToProps, mapDispatchToProps)(WaybillListScreen);
