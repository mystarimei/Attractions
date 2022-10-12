import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ImagePropTypes,
} from 'react-native';
import likeicon from './images/likeicon.jpg';
import unlikeicon from './images/unlikeicon.jpg';
import great from './images/great.jpg';
import good from './images/good.jpg';
import normal from './images/normal.jpg';
import bad from './images/bad.jpg';

const likeType = (likeCount, unlikeCount) => {
    if (likeCount + unlikeCount > 100) {
        return great
    } else if (100 >= likeCount + unlikeCount && likeCount + unlikeCount > 50) {
        return good
    } else if (50 >= likeCount + unlikeCount && likeCount + unlikeCount > 0) {
        return normal
    } else if (likeCount + unlikeCount <= 0) {
        return bad
    }
}

const MidoItem = (props) => {
  const {
    MidoAttraction: {
      id,
      title,
      photo,
      likeCount,
      unlikeCount,
      posterName,
      avatar,
      publish,
      posterId,
    },
    handleToAttractionDetail,
    handleLike,
    handleUnLike,
    handleEdit,
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
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={avatar} style={{ height: 50, width: 50, borderRadius: 30, margin: 2 }} />
            <View style={{ paddingLeft: 5 }}>
              <Text style={{ color: '#1e90ff' }}>{posterName}</Text>
              <Text style={{ color: '#708090' }}>{publish}</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => handleToAttractionDetail(id)}>
            <Image style={styles.image} source={{ uri: photo }} />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 0.35, justifyContent: 'space-around' }}>
          <View>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{title}</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Image
              style={{ width: 70, height: 70, borderRadius: 100 }}
              source={likeType(likeCount, unlikeCount)}
            />
          </View>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => handleLike(id)}>
              <Image source={likeicon} style={{ width: 40, height: 60 }} />
            </TouchableOpacity>
            <Text>{likeCount}</Text>
            <TouchableOpacity onPress={() => handleUnLike(id)}>
              <Image source={unlikeicon} style={{ width: 40, height: 60 }} />
            </TouchableOpacity>
            <Text>{unlikeCount}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default MidoItem;

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#DDD',
    borderBottomWidth: 2,
    paddingHorizontal: 7, // 區塊左右內距大小
    paddingVertical: 5, // 區塊上下內距大小
    borderRadius: 5,
    // margin:5
  },
  image: {
    width: 250,
    height: 180,
    borderRadius: 20,
  },
});
