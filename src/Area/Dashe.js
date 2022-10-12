import React from 'react';
import {StyleSheet, Dimensions, Image, View, Text, ScrollView} from 'react-native';
import DasheItem from './DasheItem';

const Dashe = (props) => {
  const {DasheAttractions, handleToAttractionDetail, handleLike, handleUnLike, handleEdit} = props;
  return (
    <ScrollView>
      <View>
        {DasheAttractions.map((DasheAttraction) => {
          return (
            <DasheItem
              key={DasheAttraction.id}
              DasheAttraction={DasheAttraction}
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
export default Dashe;
