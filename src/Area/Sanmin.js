import React from 'react';
import { StyleSheet, Dimensions, Image, View, Text, ScrollView } from 'react-native';
import SanminItem from './SanminItem'

const Sanmin = (props) => {

    const { SanminAttractions, handleToAttractionDetail, handleLike, handleUnLike, handleEdit } = props
    return (
        <ScrollView>
            <View>
                {SanminAttractions.map((SanminAttraction) => {
                    return <SanminItem key={SanminAttraction.id}
                        SanminAttraction={SanminAttraction}
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
export default Sanmin;