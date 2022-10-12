import React from 'react';
import {ScrollView} from 'react-native';
import MyPostItem from './MyPostItem';

export default function MyPost(props) {
  const {
    MyPost,
    handleToAttractionDetail,
    handleLike,
    handleUnLike,
    handleDelete,
    handleEdit,
  } = props;

  return (
    <ScrollView>
      {MyPost.map((MyPost) => {
        return (
          <MyPostItem
            key={MyPost.id}
            MyPost={MyPost}
            handleToAttractionDetail={handleToAttractionDetail}
            handleLike={handleLike}
            handleUnLike={handleUnLike}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        );
      })}
    </ScrollView>
  );
}
