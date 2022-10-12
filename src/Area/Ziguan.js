import React from 'react';
import { StyleSheet, Dimensions, Image, View, Text,ScrollView } from 'react-native';
import ZiguanItem from './ZiguanItem'

const Ziguan = (props) => {

    const { ZiguanAttractions, handleToAttractionDetail,handleUnLike,handleLike,handleEdit } = props
    return (
        <ScrollView>
            <View>
                {ZiguanAttractions.map((ZiguanAttraction) => {
                    return <ZiguanItem key={ZiguanAttraction.id}
                        ZiguanAttraction={ZiguanAttraction}
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
export default Ziguan;