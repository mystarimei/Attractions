import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import great from './Area/images/great.jpg';
import good from './Area/images/good.jpg';
import normal from './Area/images/normal.jpg';
import bad from './Area/images/bad.jpg';
import favoritesStar from './Area/images/favoriteStar.png';
import unFavoriteStar from './Area/images/unFavoriteStar.png';

const likeType = (likeCount, unlikeCount) => {
  if (likeCount + unlikeCount > 50) {
    return great;
  } else if (50 >= likeCount + unlikeCount && likeCount + unlikeCount > 20) {
    return good;
  } else if (20 >= likeCount + unlikeCount && likeCount + unlikeCount > 0) {
    return normal;
  } else if (likeCount + unlikeCount <= 0) {
    return bad;
  }
};

const FavoriteItem = (props) => {
  const {
    // FavoRite: { id, title, photo, likeCount, unlikeCount, posterId, favorite },
    FavoriteAttraction: { id, title, photo, likeCount, unlikeCount, posterId, favorite },
    handleToAttractionDetail,
    handleEdit,
    handleFavorite,
  } = props;
  return (
    <TouchableOpacity onLongPress={() => handleEdit(id, posterId)}>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 7,
          paddingVertical: 3,
          borderBottomWidth: 2,
          borderBottomColor: '#d3d3d3',
        }}>
        <View style={{ flex: 0.65 }}>
          <TouchableOpacity onPress={() => handleToAttractionDetail(id)}>
            <Image style={styles.image} source={{ uri: photo }} />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 0.35 }}>
          <View>
            <Text
              style={{
                borderRadius: 6,
                fontSize: 18,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              {title}
            </Text>
          </View>
          <View style={{ alignItems: 'center', paddingTop: 8 }}>
            <Image
              style={{ width: 80, height: 80, borderRadius: 100 }}
              source={likeType(likeCount, unlikeCount)}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <TouchableOpacity>
              <TouchableOpacity onPress={() => handleFavorite(id)}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignSelf: 'center',
                    alignItems: 'center',
                    padding: 10,
                    marginTop: 10,
                  }}>
                  <Image
                    source={favorite ? favoritesStar : unFavoriteStar}
                    style={{
                      height: 40,
                      width: 40,
                    }}
                  />
                </View>
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FavoriteItem;

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#DDD',
    borderBottomWidth: 2,
    paddingHorizontal: 7,
    paddingVertical: 5,
    borderRadius: 5,
  },
  image: {
    height: 180,
    flex: 0.7,
    borderRadius: 20,
  },
});
