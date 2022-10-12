import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Picker,
  Button,
  Text,
  Image,
  Alert,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.Attraction.id,
      area: this.props.Attraction.area,
      title: this.props.Attraction.title,
      describes: this.props.Attraction.describes,
      photo: this.props.Attraction.photo,
      maps: this.props.Attraction.maps,
      address: this.props.Attraction.address,
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
      this.setState({photo: result.uri});
    }
  };

  handleChangeType = (value) => {
    this.setState({
      area: value,
    });
  };
  handleChangeType = (value) => {
    this.setState({
      area: value,
    });
  };
  handleChangeTitle = (text) => {
    this.setState({
      title: text,
    });
  };

  handleChangeSubTitle = (text) => {
    this.setState({
      describes: text,
    });
  };

  handleChangeCompleted = (value) => {
    this.setState({
      completed: value,
    });
  };
  handleChangeMap = (text) => {
    this.setState({
      maps: text,
    });
  };
  handleChangeAddress = (text) => {
    this.setState({
      address: text,
    });
  };
  handleAddPress = () => {
    const {handleEditTodo} = this.props;
    Actions.pop();
    handleEditTodo(this.state);
  };
  handleAlert = () =>
    Alert.alert(
      '確認修改',
      '你真的要修改嗎????????',
      [
        {
          text: '取消',
        },
        {text: '確定', onPress: () => this.handleAddPress()},
      ],
      {
        cancelable: true,
      },
    );

  render() {
    const {title, describes, area, photo, maps, address} = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.imageItem}>
          <View style={styles.imageHeader}>
            <Text style={styles.label}>景點/美食圖片</Text>
            <Image
              source={{uri: !photo ? 'https://i.imgur.com/5l6dHWc.png' : photo}}
              style={styles.image}
            />
          </View>
          <View>
            <Button title="從相機拍照" onPress={this.handleOpenCamera} />
            <Button title="從相簿選擇" onPress={this.handleOpenImageLibrary} />
          </View>
        </View>

        <View>
          <View style={styles.item}>
            <Text style={styles.label}>區域</Text>
            <Picker
              selectedValue={area}
              onValueChange={this.handleChangeType}
              style={styles.picker}>
              <Picker.Item label="大社區" value="大社區" />
              <Picker.Item label="楠梓區" value="楠梓區" />
              <Picker.Item label="燕巢區" value="燕巢區" />
              <Picker.Item label="鼓山區" value="鼓山區" />
              <Picker.Item label="旗山區" value="旗山區" />
              <Picker.Item label="桃源區" value="桃源區" />
              <Picker.Item label="茂林區" value="茂林區" />
              <Picker.Item label="梓官區" value="梓官區" />
              <Picker.Item label="大樹區" value="大樹區" />
              <Picker.Item label="田寮區" value="田寮區" />
            </Picker>
          </View>
          <View style={styles.item}>
            <Text style={styles.label}>景點/美食名稱</Text>
            <TextInput
              value={title}
              onChangeText={this.handleChangeTitle}
              style={styles.textInput}
            />
          </View>
          <View style={styles.item}>
            <Text style={styles.label}>地址:</Text>
            <TextInput
              value={address}
              onChangeText={this.handleChangeAddress}
              style={styles.textInput}
            />
          </View>
          <View style={styles.item}>
            <Text style={styles.label}>Google Map網址:</Text>
            <TextInput
              value={maps}
              onChangeText={this.handleChangeMap}
              style={styles.textInput}
            />
          </View>
          <View style={styles.item}>
            <Text style={styles.label}>文章內容:</Text>
          </View>
          <TextInput
            value={describes}
            onChangeText={this.handleChangeSubTitle}
            keyboardType="default"
            placeholder="請輸入文字"
            multiline
            numberOfLines={10}
            style={{borderColor: '#C0C0C0', borderWidth: 1, height: 100}}
          />
        </View>
        <Button
          title="修改內容"
          disabled={!title || !describes || !photo || !maps}
          onPress={this.handleAlert}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#EEE',
  },
  item: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    paddingHorizontal: 10,
  },
  imageItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
    paddingHorizontal: 10,
  },
  imageHeader: {flexDirection: 'row', alignItems: 'center'},
  image: {width: 100, height: 100, marginLeft: 15},
  item: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    paddingHorizontal: 10,
  },
  label: {
    fontWeight: 'bold',
  },
  picker: {
    width: 150,
    marginLeft: 10,
  },
  textInput: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#C0C0C0',
    marginLeft: 15,
  },
  switch: {
    marginLeft: 10,
  },
});
