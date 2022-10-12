import React from 'react';
import { StyleSheet, Dimensions, Image, View, Text ,ScrollView} from 'react-native';
import MaolinItem from './MaolinItem'

const Maolin = (props) => {

    const { MaolinAttractions, handleToAttractionDetail,handleLike,handleUnLike,handleEdit } = props
    return (
        <ScrollView>
            <View>
                {MaolinAttractions.map((MaolinAttraction) => {
                    return <MaolinItem key={MaolinAttraction.id}
                        MaolinAttraction={MaolinAttraction}
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
export default Maolin;