import React from 'react';
import { StyleSheet, Dimensions, Image, View, Text, ScrollView } from 'react-native';
import FengshanItem from './FengshanItem'

const Fengshan = (props) => {

    const { FengshanAttractions, handleToAttractionDetail, handleLike, handleUnLike, handleEdit } = props
    return (
        <ScrollView>
            <View>
                {FengshanAttractions.map((FengshanAttraction) => {
                    return <FengshanItem key={FengshanAttraction.id}
                        FengshanAttraction={FengshanAttraction}
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
export default Fengshan;