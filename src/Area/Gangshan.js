import React from 'react';
import { StyleSheet, Dimensions, Image, View, Text, ScrollView } from 'react-native';
import GangshanItem from './GangshanItem'

const Gangshan = (props) => {

    const { GangshanAttractions, handleToAttractionDetail, handleLike, handleUnLike, handleEdit } = props
    return (
        <ScrollView>
            <View>
                {GangshanAttractions.map((GangshanAttraction) => {
                    return <GangshanItem key={GangshanAttraction.id}
                        GangshanAttraction={GangshanAttraction}
                        handleToAttractionDetail={handleToAttractionDetail}
                        handleLike={handleLike}
                        handleUnLike={handleUnLike}
                        handleEdit={handleEdit}
                    />
                })}
            </View>
        </ScrollView>
    );

};
export default Gangshan;