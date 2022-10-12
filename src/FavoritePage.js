import React from 'react';
import {ScrollView} from 'react-native';
import FavoriteItem from './FavoriteITem';

const FavoritePage = (props) => {
  const {
    FavoRite,
    FavoriteAttraction,
    handleToAttractionDetail,
    handleLike,
    handleUnLike,
    handleDelete,
    handleEdit,
    handleFavorite,
  } = props;
  console.log('handle' + handleDelete);
  return (
    <ScrollView>
      {FavoriteAttraction.map((FavoriteAttraction) => {
        return (
          <FavoriteItem
            key={FavoriteAttraction.id}
            FavoRite={FavoRite}
            FavoriteAttraction={FavoriteAttraction}
            handleToAttractionDetail={handleToAttractionDetail}
            handleLike={handleLike}
            handleUnLike={handleUnLike}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            handleFavorite={handleFavorite}
          />
        );
      })}
    </ScrollView>
  );
};

export default FavoritePage;
