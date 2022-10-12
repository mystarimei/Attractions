import React from 'react';
import { StyleSheet, Dimensions, Image, View, Text, ScrollView } from 'react-native';
import LiuguiItem from './LiuguiItem';

const Liugui = (props) => {
  const {
    LiuguiAttractions,
    handleToAttractionDetail,
    handleLike,
    handleUnLike,
    handleEdit,
  } = props;
  return (
    <ScrollView>
      <View>
        {LiuguiAttractions.map((LiuguiAttraction) => {
          return (
            <LiuguiItem
              key={LiuguiAttraction.id}
              LiuguiAttraction={LiuguiAttraction}
              handleToAttractionDetail={handleToAttractionDetail}
              handleLike={handleLike}
              handleUnLike={handleUnLike}
              handleEdit={handleEdit}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};
export default Liugui;
