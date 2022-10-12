import React from 'react';
import {View, ScrollView} from 'react-native';
import HotAttractionItem from './HotAttractionItem';

const HotAttractionPage = (props) => {
  const {HotAttractions, handleToAttractionDetail, handleLike, handleUnLike, handleEdit} = props;
  // console.log(HotAttractions);
  return (
    <ScrollView>
      <View>
        {HotAttractions.map((HotAttraction) => {
          return (
            <HotAttractionItem
              key={HotAttraction.id}
              HotAttraction={HotAttraction}
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
export default HotAttractionPage;
