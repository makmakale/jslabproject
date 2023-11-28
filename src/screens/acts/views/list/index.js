import React from 'react';
import {View, FlatList, Text, ImageBackground} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ListItem from './listItem';
import {fetchAllActs} from 'store/acts/actions';
import {GS, IMAGES} from 'constants';
import {Loader} from 'screens';

const ActsScreen = ({navigation}) => {
  const acts = useSelector((state) => state.acts);
  const isLoading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  React.useEffect(() => dispatch(fetchAllActs()), [dispatch]);

  if (isLoading) {
    return <Loader/>;
  }

  return (
    <ImageBackground
      source={IMAGES.acts}
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
      }}
    >
      {!!acts.length ? (
        <FlatList
          data={acts}
          renderItem={({item}) => (
            <ListItem navigation={navigation} item={item}/>
          )}
          contentContainerStyle={{padding: 20}}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <View style={[GS.main.flex, GS.main.flexCenter]}>
          <Text style={{textAlign: 'center'}}>Акты не найдены</Text>
        </View>
      )}
    </ImageBackground>
  );
};

export default ActsScreen;
