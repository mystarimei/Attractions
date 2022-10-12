import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import likeicon from './Area/images/likeicon.jpg';
import unlikeicon from './Area/images/unlikeicon.jpg';
import great from './Area/images/great.jpg';
import good from './Area/images/good.jpg';
import normal from './Area/images/normal.jpg';
import bad from './Area/images/bad.jpg';

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

const HomePageItem = (props) => {
  const {
    Attraction: {id, title, photo, likeCount, unlikeCount},
    handleToAttractionDetail,
    handleLike,
    handleUnLike,
    handleDelete,
    handleEdit,
  } = props;
  return (
    <TouchableOpacity onLongPress={() => handleEdit(id)}>
      <View>
        <TouchableOpacity onPress={() => handleDelete(id)}>
          <Image
            source={{uri: 'https://i.imgur.com/7TQkIts.png'}}
            style={{
              right: -2,
              bottom: -5,
              width: 20,
              height: 20,
            }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 7,
          paddingVertical: 3,
          borderBottomWidth: 2,
          borderBottomColor: '#d3d3d3',
        }}>
        <View style={{flex: 0.65}}>
          <TouchableOpacity onPress={() => handleToAttractionDetail(id)}>
            <Image style={styles.image} source={{uri: photo}} />
          </TouchableOpacity>
        </View>
        <View style={{flex: 0.35}}>
          <View>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>{title}</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Image
              style={{width: 80, height: 80, borderRadius: 100}}
              source={likeType(likeCount, unlikeCount)}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <TouchableOpacity onPress={() => handleLike(id)}>
              <Image source={likeicon} style={{width: 40, height: 60}} />
            </TouchableOpacity>
            <Text>{likeCount}</Text>
            <TouchableOpacity onPress={() => handleUnLike(id)}>
              <Image source={unlikeicon} style={{width: 40, height: 60}} />
            </TouchableOpacity>
            <Text>{unlikeCount}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default HomePageItem;

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
    width: 250,
    height: 180,
    flex: 0.7,
    borderRadius: 20,
  },
});
