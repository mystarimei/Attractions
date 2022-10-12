import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
export default class PersonalPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: this.props.MyPosts[0].avatar,
    };
  }
  handleOpenCamera = () => {
    launchCamera({}, this.handleSelectAttractionImage);
  };

  handleOpenImageLibrary = () => {
    launchImageLibrary({}, this.handleSelectAttractionImage);
  };
  handleSelectAttractionImage = (result) => {
    if (!result.didCancel) {
      this.setState({avatar: result.uri});
    }
    this.props.handleEditAvater(result);
  };

  render() {
    const {MyPosts, FavoriteAttractions} = this.props;
    return (
      <View>
        <View style={{flexDirection: 'row'}}>
          <View style={{alignItems: 'center', flex: 0.3}}>
            <TouchableOpacity onPress={() => this.handleOpenImageLibrary()}>
              <Image
                source={MyPosts[0].avatar}
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 75,
                  borderColor: '#dcdcdc',
                  borderWidth: 4,
                  padding: 5,
                  margin: 5,
                }}
              />
            </TouchableOpacity>
            <Text
              style={{
                paddingTop: 5,
                fontSize: 16,
                fontWeight: 'bold',
                color: '#1e90ff',
              }}>
              野原新之助
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              flex: 0.7,
              justifyContent: 'space-around',
            }}>
            <View style={{paddingTop: 15, alignItems: 'center'}}>
              <Text style={{fontSize: 20}}>貼文</Text>
              <Text style={{fontSize: 22}}>{MyPosts.length}</Text>
            </View>
            <View style={{paddingTop: 15, alignItems: 'center'}}>
              <Text style={{fontSize: 20}}>收藏文章</Text>
              <Text style={{fontSize: 22}}>{FavoriteAttractions.length}</Text>
            </View>
          </View>
        </View>
        <View style={{margin: 5, fontSize: 15}}>
          <Text style={{fontSize: 14}}>我叫野原新之助，今年五歲。</Text>
          <Text style={{fontSize: 14}}>最喜歡APP老師。</Text>
          <Text style={{fontSize: 14}}>謝謝老師這學期得指導。</Text>
        </View>
      </View>
    );
  }
}
