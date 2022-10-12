import React from 'react';
import { StyleSheet, Dimensions, Image, View, Text, ScrollView } from 'react-native';
import LinyuanItem from './LinyuanItem';

const Linyuan = (props) => {
  const {
    LinyuanAttractions,
    handleToAttractionDetail,
    handleLike,
    handleUnLike,
    handleEdit,
  } = props;
  return (
    <ScrollView>
      <View>
        {LinyuanAttractions.map((LinyuanAttraction) => {
          return (
            <LinyuanItem
              key={LinyuanAttraction.id}
              LinyuanAttraction={LinyuanAttraction}
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
export default Linyuan;
