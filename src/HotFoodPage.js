import React from 'react';
import {View, ScrollView} from 'react-native';
import HotFoodItem from './HotFoodItem';

const HotFoodPage = (props) => {
  const {HotFoods, handleToAttractionDetail, handleLike, handleUnLike, handleEdit} = props;
  // console.log(HotFoods);
  return (
    <ScrollView>
      <View>
        {HotFoods.map((HotFood) => {
          return (
            <HotFoodItem
              key={HotFood.id}
              HotFood={HotFood}
              handleToAttracitonDetail={handleToAttractionDetail}
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
export default HotFoodPage;
