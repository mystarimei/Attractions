import React from 'react';
import { StyleSheet, Dimensions, Image, View, Text,ScrollView } from 'react-native';
import QishanItem from './QishanItem'

const Qishan = (props) => {

    const { QishanAttractions, handleToAttractionDetail,handleUnLike,handleLike,handleEdit } = props
    return (
        <ScrollView>
            <View>
                {QishanAttractions.map((QishanAttraction) => {
                    return <QishanItem key={QishanAttraction.id}
                        QishanAttraction={QishanAttraction}
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
export default Qishan;