import React from 'react';
import { StyleSheet, Dimensions, Image, View, Text, ScrollView } from 'react-native';
import MidoItem from './MidoItem';

const Mido = (props) => {
  const { MidoAttractions, handleToAttractionDetail, handleLike, handleUnLike, handleEdit } = props;
  return (
    <ScrollView>
      <View>
        {MidoAttractions.map((MidoAttraction) => {
          return (
            <MidoItem
              key={MidoAttraction.id}
              MidoAttraction={MidoAttraction}
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
export default Mido;
