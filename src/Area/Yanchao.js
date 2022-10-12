import React from 'react';
import { StyleSheet, Dimensions, Image, View, Text,ScrollView } from 'react-native';
import YanchaoItem from './YanchaoItem';

const Yanchao = (props) => {
    const { YanchaoAttractions, handleToAttractionDetail,handleUnLike,handleLike,handleEdit } = props
    return (
        <ScrollView>
            <View>
                {YanchaoAttractions.map((YanchaoAttraction) => {
                    return <YanchaoItem key={YanchaoAttraction.id}
                        YanchaoAttraction={YanchaoAttraction}
                        handleToAttractionDetail={handleToAttractionDetail}
                        handleUnLike={handleUnLike}
                        handleLike={handleLike}
                        handleEdit={handleEdit}
                    />
                })}
            </View>
        </ScrollView>
    );
};
export default Yanchao;