import React from 'react';
import {StyleSheet, TouchableOpacity, View, Image, Text, ScrollView} from 'react-native';

import {Actions} from 'react-native-router-flux';
class AreaDrawer extends React.Component {
  constructor(props) {
    super(props);
  }
  handleToDashe = () => {
    this.props.handleRouterkey('Dashe');
    Actions.Dashe();
    Actions.drawerClose();
  };

  handleToNanzi = () => {
    this.props.handleRouterkey('Nanzi');
    Actions.Nanzi();
    Actions.drawerClose();
  };

  handleToYanchao = () => {
    this.props.handleRouterkey('Yanchao');
    Actions.Yanchao();
    Actions.drawerClose();
  };
  handleToGushan = () => {
    this.props.handleRouterkey('Gushan');
    Actions.Gushan();
    Actions.drawerClose();
  };
  handleToQishan = () => {
    this.props.handleRouterkey('Qishan');
    Actions.Qishan();
    Actions.drawerClose();
  };
  handleToTaoyuan = () => {
    this.props.handleRouterkey('Taoyuan');
    Actions.Taoyuan();
    Actions.drawerClose();
  };
  handleToMaolin = () => {
    this.props.handleRouterkey('Maolin');
    Actions.Maolin();
    Actions.drawerClose();
  };
  handleToZiguan = () => {
    this.props.handleRouterkey('Ziguan');
    Actions.Ziguan();
    Actions.drawerClose();
  };
  handleToDashu = () => {
    this.props.handleRouterkey('Dashu');
    Actions.Dashu();
    Actions.drawerClose();
  };
  handleToTianliao = () => {
    this.props.handleRouterkey('Tianliao');
    Actions.Tianliao();
    Actions.drawerClose();
  };
  handleToQijin = () => {
    this.props.handleRouterkey('Qijin');
    Actions.Qijin();
    Actions.drawerClose();
  };
  handleToMido = () => {
    this.props.handleRouterkey('Mido');
    Actions.Mido();
    Actions.drawerClose();
  };
  handleToLinyuan = () => {
    this.props.handleRouterkey('Linyuan');
    Actions.Linyuan();
    Actions.drawerClose();
  };
  handleToZuoying = () => {
    this.props.handleRouterkey('Zuoying');
    Actions.Zuoying();
    Actions.drawerClose();
  };
  handleToLiugui = () => {
    this.props.handleRouterkey('Liugui');
    Actions.Liugui();
    Actions.drawerClose();
  };
  handleToFengshan = () => {
    this.props.handleRouterkey('Fengshan');
    Actions.Fengshan();
    Actions.drawerClose();
  };
  handleToGangshan = () => {
    this.props.handleRouterkey('Gangshan');
    Actions.Gangshan();
    Actions.drawerClose();
  };
  handleToSanmin = () => {
    this.props.handleRouterkey('Sanmin');
    Actions.Sanmin();
    Actions.drawerClose();
  };
  handleToLingya = () => {
    this.props.handleRouterkey('Lingya');
    Actions.Lingya();
    Actions.drawerClose();
  };
  handleToHomePage = () => {
    this.props.handleRouterkey('HomePage');
    Actions.HomePage();
    Actions.drawerClose();
  };
  render() {
    const {
      handleToDashe,
      handleToNanzi,
      handleToYanchao,
      handleToGushan,
      handleToQishan,
      handleToTaoyuan,
      handleToMaolin,
      handleToZiguan,
      handleToDashu,
      handleToTianliao,
      handleToHomePage,
      handleToQijin,
      handleToMido,
      handleToLinyuan,
      handleToZuoying,
      handleToLiugui,
      handleToFengshan,
      handleToGangshan,
      handleToSanmin,
      handleToLingya,
    } = this;
    return (
      <ScrollView>
        <View style={styles.drawer}>
          <View style={styles.drawTitleView}>
            <Text style={styles.drawTitleText}>地區分類</Text>
            <TouchableOpacity onPress={() => Actions.drawerClose()}>
              <Image source={{uri: 'https://i.imgur.com/7TQkIts.png'}} style={styles.cancelImage} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={[styles.drawerItemView, {paddingBottom: 5}]}
            onPress={handleToHomePage}>
            <Text style={[styles.drawerItemText, {fontWeight: 'bold'}]}>首頁</Text>
          </TouchableOpacity>
          <View style={{borderWidth: 1, borderColor: '#48d1cc'}} />

          <TouchableOpacity style={styles.drawerItemView} onPress={handleToDashe}>
            <Text style={styles.drawerItemText}>大社區</Text>
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity style={styles.drawerItemView} onPress={handleToNanzi}>
            <Text style={styles.drawerItemText}>楠梓區</Text>
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity style={styles.drawerItemView} onPress={handleToYanchao}>
            <Text style={styles.drawerItemText}>燕巢區</Text>
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity style={styles.drawerItemView} onPress={handleToGushan}>
            <Text style={styles.drawerItemText}>鼓山區</Text>
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity style={styles.drawerItemView} onPress={handleToQishan}>
            <Text style={styles.drawerItemText}>旗山區</Text>
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity style={styles.drawerItemView} onPress={handleToTaoyuan}>
            <Text style={styles.drawerItemText}>桃源區</Text>
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity style={styles.drawerItemView} onPress={handleToMaolin}>
            <Text style={styles.drawerItemText}>茂林區</Text>
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity style={styles.drawerItemView} onPress={handleToZiguan}>
            <Text style={styles.drawerItemText}>梓官區</Text>
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity style={styles.drawerItemView} onPress={handleToDashu}>
            <Text style={styles.drawerItemText}>大樹區</Text>
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity style={styles.drawerItemView} onPress={handleToTianliao}>
            <Text style={styles.drawerItemText}>田寮區</Text>
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity style={styles.drawerItemView} onPress={handleToQijin}>
            <Text style={styles.drawerItemText}>旗津區</Text>
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity style={styles.drawerItemView} onPress={handleToMido}>
            <Text style={styles.drawerItemText}>彌陀區</Text>
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity style={styles.drawerItemView} onPress={handleToLinyuan}>
            <Text style={styles.drawerItemText}>林園區</Text>
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity style={styles.drawerItemView} onPress={handleToZuoying}>
            <Text style={styles.drawerItemText}>左營區</Text>
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity style={styles.drawerItemView} onPress={handleToLiugui}>
            <Text style={styles.drawerItemText}>六龜區</Text>
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity style={styles.drawerItemView} onPress={handleToFengshan}>
            <Text style={styles.drawerItemText}>鳳山區</Text>
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity style={styles.drawerItemView} onPress={handleToGangshan}>
            <Text style={styles.drawerItemText}>岡山區</Text>
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity style={styles.drawerItemView} onPress={handleToSanmin}>
            <Text style={styles.drawerItemText}>三民區</Text>
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity style={styles.drawerItemView} onPress={handleToLingya}>
            <Text style={styles.drawerItemText}>苓雅區</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  drawer: {
    margin: 10,
  },
  drawTitleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  drawTitleText: {
    fontWeight: 'bold',
    fontSize: 26,
  },
  cancelImage: {
    width: 20,
    height: 20,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
  },
  drawerItemView: {
    marginVertical: 10,
  },
  drawerItemText: {
    fontSize: 19,
  },
});
export default AreaDrawer;
