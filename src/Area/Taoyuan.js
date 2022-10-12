import React from 'react';
import { StyleSheet, Dimensions, Image, View, Text,ScrollView } from 'react-native';
import TaoyuanItem from './TaoyuanItem'

const Taoyuan = (props) => {

    const { TaoyuanAttractions, handleToAttractionDetail,handleLike,handleUnLike,handleEdit } = props
    return (
        <ScrollView>
            <View>
                {TaoyuanAttractions.map((TaoyuanAttraction) => {
                    return <TaoyuanItem key={TaoyuanAttraction.id}
                        TaoyuanAttraction={TaoyuanAttraction}
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
export default Taoyuan;