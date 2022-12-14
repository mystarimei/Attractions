import React from 'react';
import { Text, Linking, Alert } from 'react-native';
import { Router, Drawer, Tabs, Stack, Scene } from 'react-native-router-flux';
import { Actions } from 'react-native-router-flux';
import AttractionData from './Data';
import AreaDrawer from './AreaDrawer';
import AttractionDetail from './AttractionDetail';
import HomePage from './HomePage';
import Personal from './Personal';
import Dashe from './Area/Dashe';
import Nanzi from './Area/Nanzi';
import Yanchao from './Area/Yanchao';
import Gushan from './Area/Gushan';
import Qishan from './Area/Qishan';
import Taoyuan from './Area/Taoyuan';
import Maolin from './Area/Maolin';
import Ziguan from './Area/Ziguan';
import Dashu from './Area/Dashu';
import Tianliao from './Area/Tianliao';
import Qijin from './Area/Qijin';
import Mido from './Area/Mido';
import Linyuan from './Area/Linyuan';
import Zuoying from './Area/Zuoying';
import Liugui from './Area/Liugui';
import Fengshan from './Area/Fengshan';
import Gangshan from './Area/Gangshan';
import Sanmin from './Area/Sanmin';
import Lingya from './Area/Lingya';
import TodoForm from './TodoForm';
import EditForm from './EditForm';
import HotAttractionPage from './HotAttractionPage';
import HotFoodPage from './HotFoodPage';

const TabIcon = (props) => (
  <Text style={{ color: props.focused ? 'blue' : 'black' }}>{props.title}</Text>
);

class Routes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Attractions: AttractionData,
      routerKey: 'root',
      FavoRite: []
    };
  }

  HotAttractionOnPress = () => {
    const { Attractions } = this.state;
    const HotAttractions = Attractions.filter((Attraction) => Attraction.type === 'attraction');
    const HotAttraction = HotAttractions.filter(
      (Attraction) => Attraction.likeCount + Attraction.unlikeCount > 100,
    );
    Actions.push('HotAttraction', {
      HotAttractions: HotAttraction,
      handleToAttractionDetail: this.handleToAttractionDetail,
      handleLike: this.handleLike,
      handleUnLike: this.handleUnLike,
      handleEdit: this.handleEdit,
      handleFavorite: this.handleFavorite,
      handleOpenMap: this.handleOpenMap,
    });
  };
  HotFoodOnPress = () => {
    const { Attractions } = this.state;
    const HotFoods = Attractions.filter((Attraction) => Attraction.type === 'food');
    const HotFood = HotFoods.filter(
      (Attraction) => Attraction.likeCount + Attraction.unlikeCount > 100,
    );
    Actions.push('HotFood', {
      HotFoods: HotFood,
      handleToAttractionDetail: this.handleToAttractionDetail,
      handleLike: this.handleLike,
      handleUnLike: this.handleUnLike,
      handleEdit: this.handleEdit,
      handleFavorite: this.handleFavorite,
      handleOpenMap: this.handleOpenMap,
    });
  };

  handleToAttractionDetail = (id) => {
    const { Attractions } = this.state;
    const Attraction = Attractions.find((Attraction) => Attraction.id === id);
    Actions.push('AttractionDetail', {
      Attraction: Attraction,
      handleFavorite: this.handleFavorite,
      handleOpenMap: this.handleOpenMap,
    });
  };

  handleDelete = (id) => {
    const newAttractions = this.state.Attractions.map((Attraction) => {
      return Attraction.id === id ? { ...Attraction, delete: true } : { ...Attraction, delete: false };
    });
    this.setState({
      Attractions: newAttractions.filter((Attraction) => {
        return Attraction.delete === false;
      }),
    });
  };

  handleLike = (id) => {
    const newAttractions = this.state.Attractions.map((Attraction) => {
      return Attraction.id === id
        ? { ...Attraction, likeCount: Attraction.likeCount + 1 }
        : { ...Attraction };
    });
    this.setState({
      Attractions: newAttractions,
    });
  };

  handleUnLike = (id) => {
    const newAttractions = this.state.Attractions.map((Attraction) => {
      return Attraction.id === id
        ? { ...Attraction, unlikeCount: Attraction.unlikeCount - 1 }
        : { ...Attraction };
    });
    this.setState({
      Attractions: newAttractions,
    });
  };
  handleAddTodo = (AttractionData) => {
    this.setState({
      Attractions: [
        ...this.state.Attractions,
        {
          posterId: 1,
          id: this.state.Attractions.length + 1,
          publish:
            new Date().getFullYear() + '-' + new Date().getMonth() + 1 + '-' + new Date().getDate(),
          avatar: this.state.Attractions[5].avatar,
          posterName: this.state.Attractions[5].posterName,
          ...AttractionData,
          likeCount: 0,
          unlikeCount: 0,
        },
      ],
    });
  };
  handleEditTodo = (data) => {
    const Attractions = this.state.Attractions.map((Attraction) => {
      return Attraction.id === data.id
        ? {
          ...Attraction,
          area: data.area,
          photo: data.photo,
          title: data.title,
          describes: data.describes,
          maps: data.maps,
          address: data.address,
        }
        : { ...Attraction };
    });
    this.setState({
      Attractions: Attractions,
    });
  };

  handleEditAvater = (data) => {
    const Attractions = this.state.Attractions.map((Attraction) => {
      return Attraction.posterId === 1 ? { ...Attraction, avatar: data } : { ...Attraction };
    });
    this.setState({
      Attractions: Attractions,
    });
  };
  handleEdit = (id, posterId) => {
    const newAttraction = this.state.Attractions.find((Attraction) => Attraction.id === id);
    // console.log(newAttraction);
    if (posterId === 1) {
      Actions.EditForm({
        Attraction: newAttraction,
        handleEditTodo: this.handleEditTodo,
      });
    } else {
      Alert.alert('??????', '????????????????????????', [{ text: '??????' }], {
        cancelable: true,
      });
    }
  };

  handleFavorite = (id) => {
    const newAttractions = this.state.Attractions.map((Attraction) => {
      return Attraction.id === id ? { ...Attraction, favorite: !Attraction.favorite } : { ...Attraction };
    });
    this.setState({
      Attractions: newAttractions,
      routerKey: 'FavoritePage',
    });
  };

  handleOpenMap = (id) => {
    const newMaps = this.state.Attractions.find((Attraction) => Attraction.id === id);
    Linking.openURL(newMaps.maps);
  };

  handleRouterkey = (pageKey) => {
    this.setState({ routerKey: pageKey });
  };

  render() {
    const { Attractions, FavoRite } = this.state;
    const HotAttractions = Attractions.filter((Attraction) => Attraction.type === 'attraction');
    const HotAttraction = HotAttractions.filter(
      (Attraction) => Attraction.likeCount + Attraction.unlikeCount > 80,
    );

    const HotFoods = Attractions.filter((Attraction) => Attraction.type === 'food');
    const HotFood = HotFoods.filter(
      (Attraction) => Attraction.likeCount + Attraction.unlikeCount > 80,
    );

    const DasheAttractions = Attractions.filter((Attraction) => Attraction.area === '?????????');
    const NanziAttractions = Attractions.filter((Attraction) => Attraction.area === '?????????');
    const YanchaoAttractions = Attractions.filter((Attraction) => Attraction.area === '?????????');
    const GushanAttractions = Attractions.filter((Attraction) => Attraction.area === '?????????');
    const QishanAttractions = Attractions.filter((Attraction) => Attraction.area === '?????????');
    const TaoyuanAttractions = Attractions.filter((Attraction) => Attraction.area === '?????????');
    const MaolinAttractions = Attractions.filter((Attraction) => Attraction.area === '?????????');
    const ZiguanAttractions = Attractions.filter((Attraction) => Attraction.area === '?????????');
    const DashuAttractions = Attractions.filter((Attraction) => Attraction.area === '?????????');
    const TianliaoAttractions = Attractions.filter((Attraction) => Attraction.area === '?????????');
    const QijinAttractions = Attractions.filter((Attraction) => Attraction.area === '?????????');
    const MidoAttractions = Attractions.filter((Attraction) => Attraction.area === '?????????');
    const LinyuanAttractions = Attractions.filter((Attraction) => Attraction.area === '?????????');
    const ZuoyingAttractions = Attractions.filter((Attraction) => Attraction.area === '?????????');
    const LiuguiAttractions = Attractions.filter((Attraction) => Attraction.area === '?????????');
    const FengshanAttractions = Attractions.filter((Attraction) => Attraction.area === '?????????');
    const GangshanAttractions = Attractions.filter((Attraction) => Attraction.area === '?????????');
    const SanminAttractions = Attractions.filter((Attraction) => Attraction.area === '?????????');
    const LingyaAttractions = Attractions.filter((Attraction) => Attraction.area === '?????????');
    const MyPosts = Attractions.filter((Attraction) => Attraction.posterId === 1);
    const FavoriteAttractions = Attractions.filter((Attraction) => Attraction.favorite === true);
    return (
      <Router>
        <Drawer
          contentComponent={() => {
            return <AreaDrawer handleRouterkey={this.handleRouterkey} />;
          }}>
          <Tabs
            headerLayoutPreset="center"
            showLabel={false}
            tabBarOnPress={(props) => {
              // console.log(props.navigation)
              props.navigation.navigate(props.navigation.state.key);
              this.setState({ routerKey: props.navigation.state.key });
              // console.log(props.navigation.state.key)
            }}>
            <Stack key="root" title="??????" headerLayoutPreset="center" icon={TabIcon}>
              <Scene
                key="HomePage"
                title="??????"
                component={HomePage}
                initial={this.state.routerKey === 'root'}
                Attractions={Attractions}
                HotAttraction={HotAttraction}
                HotFood={HotFood}
                handleToAttractionDetail={this.handleToAttractionDetail}
                handleLike={this.handleLike}
                handleUnLike={this.handleUnLike}
                handleDelete={this.handleDelete}
                handleAddTodo={this.handleAddTodo}
                handleEdit={this.handleEdit}
                handleEditTodo={this.handleEditTodo}
                HotAttractionOnPress={this.HotAttractionOnPress}
                HotFoodOnPress={this.HotFoodOnPress}
              />
              <Scene
                key="AttractionDetail"
                title="????????????"
                component={AttractionDetail}
                initial={this.state.routerKey === 'AttractionDetail'}
              />
              <Scene key="TodoForm" component={TodoForm} title="????????????" back />
              <Scene key="EditForm" component={EditForm} title="????????????" back />
              <Scene
                key="HotAttraction"
                component={HotAttractionPage}
                title="????????????"
                initial={this.state.routerKey === 'HotAttracion'}
                HotAttractions={HotAttraction}
                handleToAttractionDetail={this.handleToAttractionDetail}
                handleLike={this.handleLike}
                handleUnLike={this.handleUnLike}
                handleEdit={this.handleEdit}
                handleFavorite={this.handleFavorite}
                handleOpenMap={this.handleOpenMap}
                back
              />
              <Scene
                key="HotFood"
                component={HotFoodPage}
                title="????????????"
                initial={this.state.routerKey === 'HotFood'}
                HotFoods={HotFood}
                handleToAttractionDetail={this.handleToAttractionDetail}
                handleLike={this.handleLike}
                handleUnLike={this.handleUnLike}
                handleEdit={this.handleEdit}
                handleFavorite={this.handleFavorite}
                handleOpenMap={this.handleOpenMap}
                back
              />
            </Stack>
            <Scene
              key="Personal"
              title="????????????"
              component={Personal}
              icon={TabIcon}
              renderLeftButton={null}
              FavoriteAttractions={FavoriteAttractions}
              FavoRite={FavoRite}
              MyPosts={MyPosts}
              handleToAttractionDetail={this.handleToAttractionDetail}
              handleLike={this.handleLike}
              handleUnLike={this.handleUnLike}
              handleDelete={this.handleDelete}
              handleAddTodo={this.handleAddTodo}
              handleEdit={this.handleEdit}
              handleEditAvater={this.handleEditAvater}
              handleEditTodo={this.handleEditTodo}
              handleFavorite={this.handleFavorite}
              initial={this.state.routerKey === 'Personal'}
            />
          </Tabs>
          <Scene
            key="Dashe"
            title="?????????"
            component={Dashe}
            DasheAttractions={DasheAttractions}
            handleToAttractionDetail={this.handleToAttractionDetail}
            handleLike={this.handleLike}
            handleUnLike={this.handleUnLike}
            handleEdit={this.handleEdit}
            initial={this.state.routerKey === 'Dashe'}
          />
          <Scene
            key="Nanzi"
            title="?????????"
            component={Nanzi}
            NanziAttractions={NanziAttractions}
            handleToAttractionDetail={this.handleToAttractionDetail}
            handleLike={this.handleLike}
            handleUnLike={this.handleUnLike}
            handleEdit={this.handleEdit}
            initial={this.state.routerKey === 'Nanzi'}
          />
          <Scene
            key="Yanchao"
            title="?????????"
            component={Yanchao}
            YanchaoAttractions={YanchaoAttractions}
            handleToAttractionDetail={this.handleToAttractionDetail}
            handleLike={this.handleLike}
            handleUnLike={this.handleUnLike}
            handleEdit={this.handleEdit}
            initial={this.state.routerKey === 'Yanchao'}
          />
          <Scene
            key="Gushan"
            title="?????????"
            component={Gushan}
            GushanAttractions={GushanAttractions}
            handleToAttractionDetail={this.handleToAttractionDetail}
            handleLike={this.handleLike}
            handleUnLike={this.handleUnLike}
            handleEdit={this.handleEdit}
            initial={this.state.routerKey === 'Gushan'}
          />
          <Scene
            key="Qishan"
            title="?????????"
            component={Qishan}
            QishanAttractions={QishanAttractions}
            handleToAttractionDetail={this.handleToAttractionDetail}
            handleLike={this.handleLike}
            handleUnLike={this.handleUnLike}
            handleEdit={this.handleEdit}
            initial={this.state.routerKey === 'Qishan'}
          />
          <Scene
            key="Taoyuan"
            title="?????????"
            component={Taoyuan}
            TaoyuanAttractions={TaoyuanAttractions}
            handleToAttractionDetail={this.handleToAttractionDetail}
            handleLike={this.handleLike}
            handleUnLike={this.handleUnLike}
            handleEdit={this.handleEdit}
            initial={this.state.routerKey === 'Taoyuan'}
          />
          <Scene
            key="Maolin"
            title="?????????"
            component={Maolin}
            MaolinAttractions={MaolinAttractions}
            handleToAttractionDetail={this.handleToAttractionDetail}
            handleLike={this.handleLike}
            handleUnLike={this.handleUnLike}
            handleEdit={this.handleEdit}
            initial={this.state.routerKey === 'Maolin'}
          />
          <Scene
            key="Ziguan"
            title="?????????"
            component={Ziguan}
            ZiguanAttractions={ZiguanAttractions}
            handleToAttractionDetail={this.handleToAttractionDetail}
            handleLike={this.handleLike}
            handleUnLike={this.handleUnLike}
            handleEdit={this.handleEdit}
            initial={this.state.routerKey === 'Ziguan'}
          />
          <Scene
            key="Dashu"
            title="?????????"
            component={Dashu}
            DashuAttractions={DashuAttractions}
            handleToAttractionDetail={this.handleToAttractionDetail}
            handleLike={this.handleLike}
            handleUnLike={this.handleUnLike}
            handleEdit={this.handleEdit}
            initial={this.state.routerKey === 'Dashu'}
          />
          <Scene
            key="Tianliao"
            title="?????????"
            component={Tianliao}
            TianliaoAttractions={TianliaoAttractions}
            handleToAttractionDetail={this.handleToAttractionDetail}
            handleLike={this.handleLike}
            handleUnLike={this.handleUnLike}
            handleEdit={this.handleEdit}
            initial={this.state.routerKey === 'Tianliao'}
          />
          <Scene
            key="Qijin"
            title="?????????"
            component={Qijin}
            QijinAttractions={QijinAttractions}
            handleToAttractionDetail={this.handleToAttractionDetail}
            handleLike={this.handleLike}
            handleUnLike={this.handleUnLike}
            handleEdit={this.handleEdit}
            initial={this.state.routerKey === 'Qijin'}
          />
          <Scene
            key="Mido"
            title="?????????"
            component={Mido}
            MidoAttractions={MidoAttractions}
            handleToAttractionDetail={this.handleToAttractionDetail}
            handleLike={this.handleLike}
            handleUnLike={this.handleUnLike}
            handleEdit={this.handleEdit}
            initial={this.state.routerKey === 'Mido'}
          />
          <Scene
            key="Linyuan"
            title="?????????"
            component={Linyuan}
            LinyuanAttractions={LinyuanAttractions}
            handleToAttractionDetail={this.handleToAttractionDetail}
            handleLike={this.handleLike}
            handleUnLike={this.handleUnLike}
            handleEdit={this.handleEdit}
            initial={this.state.routerKey === 'Linyuan'}
          />
          <Scene
            key="Zuoying"
            title="?????????"
            component={Zuoying}
            ZuoyingAttractions={ZuoyingAttractions}
            handleToAttractionDetail={this.handleToAttractionDetail}
            handleLike={this.handleLike}
            handleUnLike={this.handleUnLike}
            handleEdit={this.handleEdit}
            initial={this.state.routerKey === 'Zuoying'}
          />
          <Scene
            key="Liugui"
            title="?????????"
            component={Liugui}
            LiuguiAttractions={LiuguiAttractions}
            handleToAttractionDetail={this.handleToAttractionDetail}
            handleLike={this.handleLike}
            handleUnLike={this.handleUnLike}
            handleEdit={this.handleEdit}
            initial={this.state.routerKey === 'Liugui'}
          />
          <Scene
            key="Fengshan"
            title="?????????"
            component={Fengshan}
            FengshanAttractions={FengshanAttractions}
            handleToAttractionDetail={this.handleToAttractionDetail}
            handleLike={this.handleLike}
            handleUnLike={this.handleUnLike}
            handleEdit={this.handleEdit}
            initial={this.state.routerKey === 'Fengshan'}
          />
          <Scene
            key="Gangshan"
            title="?????????"
            component={Gangshan}
            GangshanAttractions={GangshanAttractions}
            handleToAttractionDetail={this.handleToAttractionDetail}
            handleLike={this.handleLike}
            handleUnLike={this.handleUnLike}
            handleEdit={this.handleEdit}
            initial={this.state.routerKey === 'Gangshan'}
          />
          <Scene
            key="Sanmin"
            title="?????????"
            component={Sanmin}
            SanminAttractions={SanminAttractions}
            handleToAttractionDetail={this.handleToAttractionDetail}
            handleLike={this.handleLike}
            handleUnLike={this.handleUnLike}
            handleEdit={this.handleEdit}
            initial={this.state.routerKey === 'Sanmin'}
          />
          <Scene
            key="Lingya"
            title="?????????"
            component={Lingya}
            LingyaAttractions={LingyaAttractions}
            handleToAttractionDetail={this.handleToAttractionDetail}
            handleLike={this.handleLike}
            handleUnLike={this.handleUnLike}
            handleEdit={this.handleEdit}
            initial={this.state.routerKey === 'Lingya'}
          />
        </Drawer>
      </Router>
    );
  }
}

export default Routes;
