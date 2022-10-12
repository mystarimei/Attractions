import React from 'react';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import { Dimensions } from 'react-native';

import FavoritePage from './FavoritePage';
import MyPost from './MyPost';

export default function PersonalTabView(props) {
  const {
    FavoRite,
    FavoriteAttractions,
    MyPosts,
    handleDelete,
    handleLike,
    handleUnLike,
    handleEdit,
    handleEditTodo,
    handleToAttractionDetail,
    handleFavorite,
  } = props;
  const { height } = Dimensions.get('window');
  return (
    <ScrollableTabView
      style={{ marginTop: 10 }}
      initialPage={0}
      renderTabBar={() => <DefaultTabBar />}
      tabBarTextStyle={{ fontSize: 18 }}
      style={{ height: height, position: 'relative' }}>
      <MyPost
        tabLabel="我的貼文"
        key={MyPosts.id}
        MyPost={MyPosts}
        handleLike={handleLike}
        handleUnLike={handleUnLike}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        handleEditTodo={handleEditTodo}
        handleToAttractionDetail={handleToAttractionDetail}
      />
      <FavoritePage
        tabLabel="我的收藏"
        key={FavoriteAttractions.id}
        FavoRite={FavoRite}
        FavoriteAttraction={FavoriteAttractions}
        handleLike={handleLike}
        handleUnLike={handleUnLike}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        handleEditTodo={handleEditTodo}
        handleToAttractionDetail={handleToAttractionDetail}
        handleFavorite={handleFavorite}
      />
    </ScrollableTabView>
  );
}
