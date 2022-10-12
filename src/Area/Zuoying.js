import React from 'react';
import { StyleSheet, Dimensions, Image, View, Text, ScrollView } from 'react-native';
import ZuoyingItem from './ZuoyingItem';

const Zuoying = (props) => {
  const {
    ZuoyingAttractions,
    handleToAttractionDetail,
    handleLike,
    handleUnLike,
    handleEdit,
  } = props;
  return (
    <ScrollView>
      <View>
        {ZuoyingAttractions.map((ZuoyingAttraction) => {
          return (
            <ZuoyingItem
              key={ZuoyingAttraction.id}
              ZuoyingAttraction={ZuoyingAttraction}
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
export default Zuoying;
