import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Carousel from 'react-native-looped-carousel';
import { MarqueeVertical } from 'react-native-marquee-ab';
import SplashScreen from 'react-native-splash-screen';
import posterImage1 from './Area/images/poster_1.jpg';
import posterImage2 from './Area/images/poster_2.jpg';
import posterImage3 from './Area/images/poster_3.jpg';
import posterImage4 from './Area/images/poster_4.jpg';
import posterImage5 from './Area/images/poster_5.jpg';
import posterImage6 from './Area/images/poster_6.jpg';
import travel from './Area/images/travel.png';
import food from './Area/images/food.png';
export default class HomePage extends React.Component {


  componentDidMount() {
    SplashScreen.hide();
    this.props.navigation.setParams({
      rightTitle: '新增',
      onRight: () => {
        Actions.TodoForm({ handleAddTodo: this.props.handleAddTodo });
      },
    });
  }
  render() {
    const {
      HotAttraction,
      HotFood,
      HotAttractionOnPress,
      HotFoodOnPress,
      handleToAttractionDetail,
      handleLike,
      handleUnLike,
    } = this.props;
    const mWidth = Dimensions.get('window').width;
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 0.15 }}>
          <View
            style={{
              backgroundColor: 'white',
              flex: 0.5,
              alignItems: 'center',
              padding: 10,
            }}>
            <View
              style={{
                width: mWidth,
                height: 50,
                backgroundColor: '#FFFF00',
                borderRadius: 50 / 2,
                paddingHorizontal: 50 / 2,
              }}>
              <MarqueeVertical
                textList={[
                  {
                    label: '1',
                    value: ' －我叫野原新之助，今年五歲，APP好讚喔。',
                  },
                  { label: '2', value: ' －我要成為NO.1ヒーロー，快來看風景。' },
                  { label: '3', value: ' －無慘大人，請不要殺我。' },
                  { label: '4', value: ' －我要保護小愛小姐，高雄地區真低讚。' },
                  { label: '5', value: ' －我是被萊納搞死的，萊納你坐阿。' },
                  { label: '6', value: ' －うまい、うまい、，快來高雄坐火車。' },
                ]}
                width={370}
                height={50}
                headViews={[
                  <Image
                    source={posterImage1}
                    style={{ width: 46, height: 28, borderRadius: 100 }}
                  />,
                  <Image
                    source={posterImage2}
                    style={{ width: 46, height: 28, borderRadius: 100 }}
                  />,
                  <Image
                    source={posterImage3}
                    style={{ width: 46, height: 28, borderRadius: 100 }}
                  />,
                  <Image
                    source={posterImage4}
                    style={{ width: 46, height: 28, borderRadius: 100 }}
                  />,
                  <Image
                    source={posterImage5}
                    style={{ width: 46, height: 28, borderRadius: 100 }}
                  />,
                  <Image
                    source={posterImage6}
                    style={{ width: 46, height: 28, borderRadius: 100 }}
                  />,
                  <View />,
                  <View />,
                ]}
                delay={1000}
                direction={'up'}
                numberOfLines={1}
                bgContainerStyle={{ backgroundColor: '#FFFF00' }}
                textStyle={{ fontSize: 16, color: '#FF0000' }}
              />
            </View>
          </View>
        </View>
        <View style={{ flex: 0.425, flexDirection: 'row', alignItems: 'flex-start' }}>
          <Carousel
            delay={3500}
            style={{ width: Dimensions.get('window').width, height: 200 }}
            autoplay>
            {HotAttraction.map((HotAttraction) => {
              return (
                <Image
                  source={{ uri: HotAttraction.photo }}
                  style={{ width: Dimensions.get('window').width, height: 200 }}
                />
              );
            })}
          </Carousel>
        </View>
        <TouchableOpacity
          handleToAttractionDetail={handleToAttractionDetail}
          handleLike={handleLike}
          handleUnLike={handleUnLike}
          onPress={() => HotAttractionOnPress()}
          style={{
            backgroundColor: '#C0D1D8',
            flexDirection: 'row',
            alignItems: 'center',
            paddingTop: 5,
          }}>
          <Image source={travel} style={{ width: 40, height: 40 }} />
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>最佳熱門景點</Text>
        </TouchableOpacity>

        <View
          style={{
            flex: 0.425,
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}>
          <Carousel
            delay={3500}
            style={{ width: Dimensions.get('window').width, height: 200 }}
            autoplay>
            {HotFood.map((HotAttraction) => {
              return (
                <Image
                  source={{ uri: HotAttraction.photo }}
                  style={{ width: Dimensions.get('window').width, height: 200 }}
                />
              );
            })}
          </Carousel>
        </View>
        <TouchableOpacity
          onPress={() => HotFoodOnPress()}
          handleToAttractionDetail={handleToAttractionDetail}
          handleLike={handleLike}
          handleUnLike={handleUnLike}
          style={{
            backgroundColor: '#F2CFC2',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
            paddingTop: 5,
          }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>最佳熱門美食</Text>
          <Image source={food} style={{ width: 35, height: 35 }} />
        </TouchableOpacity>
        <View></View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  continer: {
    flex: 1,
  },
});
