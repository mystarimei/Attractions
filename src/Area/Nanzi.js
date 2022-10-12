import React from 'react';
import { StyleSheet, Dimensions, Image, View, Text,ScrollView } from 'react-native';
import NanziItem from './NanziItem';

const Nanzi = (props) => {
    const { NanziAttractions, handleToAttractionDetail,handleUnLike,handleLike,handleEdit } = props
    return (
        <ScrollView>
            <View>
                {NanziAttractions.map((NanziAttraction) => {
                    return <NanziItem key={NanziAttraction.id}
                        NanziAttraction={NanziAttraction}
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
export default Nanzi;