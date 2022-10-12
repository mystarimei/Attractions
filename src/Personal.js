import React from 'react';
import { View } from 'react-native';
import PersonalPage from './PersonalPage';
import PersonalTabView from './PersonalTabView';

const Personal = (props) => {
  const {
    FavoRite,
    FavoriteAttractions,
    MyPosts,
    handleToAttractionDetail,
    handleLike,
    handleUnLike,
    handleDelete,
    handleAddTodo,
    handleEdit,
    handleEditTodo,
    handleEditAvater,
    handleFavorite,
  } = props;

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 0.35 }}>
        <PersonalPage
          MyPosts={MyPosts}
          FavoriteAttractions={FavoriteAttractions}
          handleEdit={handleEdit}
          handleEditAvater={handleEditAvater}
        />
      </View>
      <View style={{ flex: 0.65 }}>
        <PersonalTabView
          key={FavoriteAttractions.id}
          FavoRite={FavoRite}
          FavoriteAttractions={FavoriteAttractions}
          MyPosts={MyPosts}
          handleToAttractionDetail={handleToAttractionDetail}
          handleLike={handleLike}
          handleUnLike={handleUnLike}
          handleDelete={handleDelete}
          handleAddTodo={handleAddTodo}
          handleEdit={handleEdit}
          handleEditTodo={handleEditTodo}
          handleFavorite={handleFavorite}
        />
      </View>
    </View>
  );
};

export default Personal;
