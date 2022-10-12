import React from 'react';
import { StyleSheet, Dimensions, Image, View, Text, ScrollView } from 'react-native';
import LingyaItem from './LingyaItem'

const Lingya = (props) => {

    const { LingyaAttractions, handleToAttractionDetail, handleLike, handleUnLike, handleEdit } = props
    return (
        <ScrollView>
            <View>
                {LingyaAttractions.map((LingyaAttraction) => {
                    return <LingyaItem key={LingyaAttraction.id}
                        LingyaAttraction={LingyaAttraction}
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
export default Lingya;