import React from 'react';
import { StyleSheet, Dimensions, Image, View, Text,ScrollView } from 'react-native';
import TianliaoItem from './TianliaoItem'

const Tianliao = (props) => {

    const { TianliaoAttractions, handleToAttractionDetail,handleUnLike,handleLike,handleEdit} = props
    return (
        <ScrollView>
            <View>
                {TianliaoAttractions.map((TianliaoAttraction) => {
                    return <TianliaoItem key={TianliaoAttraction.id}
                        TianliaoAttraction={TianliaoAttraction}
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
export default Tianliao;