import React from 'react';
import { StyleSheet, Dimensions, Image, View, Text,ScrollView } from 'react-native';
import DashuItem from './DashuItem'

const Dashu = (props) => {

    const { DashuAttractions, handleToAttractionDetail,handleUnLike,handleLike,handleEdit } = props
    
    return (
        <ScrollView>
            <View>
                {DashuAttractions.map((DashuAttraction) => {
                    return <DashuItem key={DashuAttraction.id}
                        DashuAttraction={DashuAttraction}
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
export default Dashu;