import React from 'react';
import { StyleSheet, Dimensions, Image, View, Text, ScrollView } from 'react-native';
import GushanItem from './GushanItem'

const Gushan = (props) => {

    const { GushanAttractions, handleToAttractionDetail,handleUnLike,handleLike,handleEdit } = props
    return (
        <ScrollView>
            <View>
                {GushanAttractions.map((GushanAttraction) => {
                    return <GushanItem key={GushanAttraction.id}
                        GushanAttraction={GushanAttraction}
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
export default Gushan;