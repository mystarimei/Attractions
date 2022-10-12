import React from 'react';
import { StyleSheet, Dimensions, Image, View, Text, ScrollView } from 'react-native';
import QijinItem from './QijinItem'

const Qijin = (props) => {

    const {  QijinAttractions, handleToAttractionDetail, handleLike, handleUnLike, handleEdit } = props
    return (
        <ScrollView>
            <View>
                {QijinAttractions.map((QijinAttraction) => {
                    return <QijinItem key={QijinAttraction.id}
                        QijinAttraction={QijinAttraction}
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
export default Qijin;