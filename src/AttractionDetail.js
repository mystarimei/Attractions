import React from 'react';
import {
  StyleSheet,
  Dimensions,
  Image,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import favoritesStar from './Area/images/favoriteStar.png';
import unFavoriteStar from './Area/images/unFavoriteStar.png';

const AttractionDetail = (props) => {
  const {
    Attraction: {
      id,
      title,
      photo,
      avatar,
      posterName,
      area,
      describes,
      publish,
      maps,
      favorite,
      address,
    },
    handleFavorite,
    handleOpenMap,
  } = props;
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ flex: 0.48 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={avatar} style={{ height: 50, width: 50, borderRadius: 30, margin: 2 }} />
          <View style={{ paddingLeft: 5 }}>
            <Text style={{ color: '#1e90ff' }}>{posterName}</Text>
            <Text style={{ color: '#708090' }}>{publish}</Text>
          </View>
        </View>
        <View>
          <Image style={styles.image} source={{ uri: photo }} />
        </View>
      </View>
      <View style={{ flex: 0.3 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
          <Text style={{ backgroundColor: '#97CECC', borderRadius: 10, fontSize: 24 }}>
            {title}－
          </Text>
          <Text
            style={{
              backgroundColor: '#97CECC',
              borderRadius: 6,
              fontSize: 18,
              alignSelf: 'center',
            }}>
            {area}
          </Text>
        </View>
        <View style={{ borderWidth: 1, borderColor: '#48d1cc' }} />
        <Text style={{ padding: 8, fontSize: 15 }}>{describes}</Text>
      </View>
      <View style={{ padding: 4, flex: 0.22 }}>
        <View style={{ flexDirection: 'row', paddingTop: 20, paddingLeft: 5 }}>
          <Text style={{ fontSize: 15 }}>地址:</Text>
          <TouchableOpacity onPress={() => handleOpenMap(id)}>
            <Text style={{ fontSize: 15, color: 'blue' }}>{address}</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => handleFavorite(id)}>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                alignItems: 'center',
                borderWidth: 1,
                borderColor: 'red',
                padding: 10,
                marginTop: 18,
              }}>
              <Image
                source={favorite ? favoritesStar : unFavoriteStar}
                style={{
                  height: 40,
                  width: 40,
                }}
              />
              <Text style={{ fontSize: 20, paddingLeft: 5 }}>
                {favorite ? '已加入收藏' : '加入收藏'}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
export default AttractionDetail;

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width / 2,
  },
});
