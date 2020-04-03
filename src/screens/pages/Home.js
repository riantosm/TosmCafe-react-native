// Library
import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Animated,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView,
} from 'react-native';
import BackScreen from '../BackScreen';
import IconFA from 'react-native-vector-icons/FontAwesome';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import HistoryComp from '../../components/HistoryComp';
import MenuComp from '../../components/MenuCompo';

// Styles
import styles from '../../styles/Styles';
import ListProductComp from '../../components/ListProductComp';
import VersionComp from '../../components/VersionComp';
import HomeComp from '../../components/HomeComp';

let colorBlue = '#294EA0';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      BgTop: new Animated.Value(0),
      BgBottom: new Animated.Value(0),
      BgMiddle: new Animated.Value(0),

      TitleOpacity: new Animated.Value(0),
      TitleMt: new Animated.Value(0),

      HistoryOpacity: new Animated.Value(0),
      HistoryToCenter: new Animated.Value(0),

      MenuOpacity: new Animated.Value(0),
      MenuMt: new Animated.Value(0),

      LProductOpacity: new Animated.Value(0),
      LProductMt: new Animated.Value(0),

      HomeOpacity: new Animated.Value(0),
      HomeMt: new Animated.Value(0),

      VersionOpacity: new Animated.Value(0),

      menu: 'home',

      recentOrder: [
        {
          id: 1,
          cashier: 'Admin',
          invoice: 12356789,
          totalOrder: 15000,
          date: '20-02-2020',
        },
        {
          id: 2,
          cashier: 'Admin',
          invoice: 42523123,
          totalOrder: 55000,
          date: '20-02-2020',
        },
        {
          id: 3,
          cashier: 'Admin',
          invoice: 7462513,
          totalOrder: 4500,
          date: '20-02-2020',
        },
      ],
      listCategory: [
        {id: 1, name: 'All'},
        {id: 2, name: 'Food'},
        {id: 3, name: 'Drink'},
        {id: 4, name: 'Dessert'},
        {id: 5, name: 'Topping'},
      ],
      listProduct: [
        {
          id: 1,
          name: 'Nasi goreng',
          image: require('../../../assets/img/product1.png'),
          category: 'Food',
        },
        {
          id: 2,
          name: 'Ayam bakar',
          image: require('../../../assets/img/product2.png'),
          category: 'Drink',
        },
        {
          id: 3,
          name: 'Jus alpukat',
          image: require('../../../assets/img/product3.png'),
          category: 'Food',
        },
        {
          id: 4,
          name: 'Air putih',
          image: require('../../../assets/img/product4.png'),
          category: 'Food',
        },
        {
          id: 5,
          name: 'Tepung',
          image: require('../../../assets/img/product5.png'),
          category: 'Drink',
        },
      ],
    };
  }

  componentDidMount() {
    this.showOval(true);
  }

  // animation{
  animaT = (toValue, duration, useNativeDriver) => ({
    toValue,
    duration,
    useNativeDriver,
  });

  animaS = (toValue, tension, friction, duration, useNativeDriver) => ({
    toValue,
    tension,
    friction,
    duration,
    useNativeDriver,
  });

  showOval(status) {
    const {BgTop, BgBottom, BgMiddle} = this.state;
    Animated.parallel([
      // open up bg oval
      Animated.timing(BgTop, this.animaT(status ? 1 : 0, 1000, false)).start(),
      Animated.timing(BgBottom, this.animaT(status ? 1 : 0, 1000, false)).start(
        () => {
          this.setState({
            shadowOval: true,
          }),
            // show title
            this.showTitle(true);
        },
      ),
    ]);
  }

  showTitle(status) {
    const {TitleMt, TitleOpacity} = this.state;
    Animated.parallel([
      Animated.timing(TitleMt, this.animaT(status ? 1 : 0, 500, false)).start(),
      Animated.timing(
        TitleOpacity,
        this.animaT(status ? 1 : 0, 500, false),
      ).start(() => {
        // show history
        this.showHistory(true),
          // show menu
          setTimeout(() => {
            this.showMenu(true);
            // show list category
            setTimeout(() => {
              this.changeComponent('home');
              this.showVersion(true);
            }, 500);
          }, 500);
      }),
    ]);
  }

  showHistory(status) {
    const {HistoryOpacity, HistoryToCenter} = this.state;
    Animated.parallel([
      Animated.timing(
        HistoryOpacity,
        this.animaT(status ? 1 : 0, 1000, false),
      ).start(),
      Animated.timing(
        HistoryToCenter,
        this.animaT(status ? 1 : 0, 1000, false),
      ).start(),
    ]);
  }

  showMenu(status) {
    const {MenuOpacity, MenuMt} = this.state;
    Animated.parallel([
      Animated.timing(
        MenuOpacity,
        this.animaT(status ? 1 : 0, 500, false),
      ).start(),
      Animated.spring(
        MenuMt,
        this.animaS(status ? 1 : 0, 10, 2, 200, false),
      ).start(),
    ]);
  }

  changeComponent(component) {
    component === 'product' ? (
      (this.showListHistory(false),
      setTimeout(() => {
        this.setState({menu: 'product'}), this.showListProduct(true);
      }, 500))
    ) : component === 'home' ? (
      (this.showListProduct(false),
      setTimeout(() => {
        this.setState({menu: 'home'}), this.showListHistory(true);
      }, 500))
    ) : (
      <></>
    );
  }

  showListHistory(status) {
    const {HomeOpacity, HomeMt} = this.state;
    Animated.parallel([
      Animated.timing(
        HomeOpacity,
        this.animaT(status ? 1 : 0, 500, false),
      ).start(),
      Animated.spring(
        HomeMt,
        this.animaS(status ? 1 : 0, 10, 2, 500, false),
      ).start(),
    ]);
  }

  showListProduct(status) {
    const {LProductOpacity, LProductMt} = this.state;
    Animated.parallel([
      Animated.timing(
        LProductOpacity,
        this.animaT(status ? 1 : 0, 500, false),
      ).start(),
      Animated.spring(
        LProductMt,
        this.animaS(status ? 1 : 0, 10, 2, 500, false),
      ).start(),
    ]);
  }

  showVersion(status) {
    const {VersionOpacity} = this.state;
    Animated.parallel([
      Animated.timing(
        VersionOpacity,
        this.animaT(status ? 1 : 0, 500, false),
      ).start(),
    ]);
  }
  // }animation

  render() {
    return (
      <>
        <StatusBar backgroundColor={'#fff'} barStyle="dark-content" />
        <ScrollView behavior="padding" style={s.scrollView}>
          <View style={styles.container.center}>
            {/* top */}
            <Animated.View
              style={[
                s.bgTop,
                {
                  height: this.state.BgTop.interpolate({
                    inputRange: [0, 1],
                    outputRange: [Dimensions.get('window').height + 100, 200],
                  }),
                },
              ]}>
              <View style={styles.container.top}></View>
            </Animated.View>
            {/* top */}

            {/* middle */}
            <Animated.View style={s.bgMiddle}>
              <Animated.View
                style={[
                  styles.bg.white,
                  {
                    opacity: this.state.TitleOpacity,
                    height: 18,
                    top: this.state.TitleMt.interpolate({
                      inputRange: [0, 1],
                      outputRange: [-120, 0],
                    }),
                  },
                ]}>
                <View style={[styles.flex.directionRow]}>
                  <View style={s.logoHomeLeft} />
                  <View style={s.logoHomeCenter}>
                    <Text style={s.logoHomeText}>TosmCafe</Text>
                  </View>
                  <View style={s.logoHomeRight} />
                </View>
              </Animated.View>

              {/* History{ */}
              <Animated.View style={{opacity: this.state.HistoryOpacity}}>
                <HistoryComp toCenter={this.state.HistoryToCenter} />
              </Animated.View>
              {/* }History */}

              {/* Menu{ */}
              <Animated.View
                style={{
                  opacity: this.state.MenuOpacity,
                  top: this.state.MenuMt.interpolate({
                    inputRange: [0, 1],
                    outputRange: [20, 0],
                  }),
                }}>
                <MenuComp
                  home={() => this.changeComponent('home')}
                  product={() => this.changeComponent('product')}
                />
              </Animated.View>
              {/* }Menu */}
            </Animated.View>
            {/* middle */}

            {/* bottom */}
            <Animated.View
              style={[
                styles.custom._.bgBottom,
                {
                  // height: 300,
                  // borderWidth: 1,
                },
              ]}>
              <View style={styles.container.top}>
                {/* oval */}
                <Animated.View
                  style={[
                    this.state.shadowOval ? styles.shadow.md : styles.shadow.n,
                    {
                      position: 'absolute',
                      top: -600,
                      width: Dimensions.get('window').width + 440,
                      height: Dimensions.get('window').width + 440,
                      backgroundColor: colorBlue,
                      borderStartWidth: 0,
                      borderBottomStartRadius: 1000,
                      transform: [
                        {
                          rotate: '-45deg',
                        },
                      ],
                    },
                  ]}
                />
              </View>

              {this.state.menu === 'home' ? (
                <Animated.View
                  style={[
                    styles.shadow.md,
                    {
                      opacity: this.state.HomeOpacity,
                      marginTop: 50,
                    },
                  ]}>
                  <HomeComp
                    HomeMt={this.state.HomeMt}
                    order={this.state.recentOrder}
                  />
                </Animated.View>
              ) : this.state.menu === 'product' ? (
                <Animated.View
                  style={[
                    styles.shadow.md,
                    {
                      opacity: this.state.LProductOpacity,
                      marginTop: 50,
                    },
                  ]}>
                  <ListProductComp
                    ListCategoryMt={this.state.LProductMt}
                    category={this.state.listCategory}
                    product={this.state.listProduct}
                  />
                </Animated.View>
              ) : (
                <></>
              )}
            </Animated.View>
            {/* bottom */}
            <Animated.View
              style={[
                styles.padding.padding[20],
                styles.padding.bottom[30],
                {opacity: this.state.VersionOpacity},
              ]}>
              <VersionComp />
            </Animated.View>
          </View>
        </ScrollView>
        <BackScreen />
      </>
    );
  }
}

// styles
const s = {
  scrollView: [styles.bg.whiteSmoke, {flex: 1}],
  bgTop: [styles.bg.blue, styles.shadow.none, styles.custom._.bgTop],
  bgMiddle: [styles.custom._.bgMiddle, styles.shadow.md, {opacity: 1, top: 0}],
  logoHomeLeft: [
    styles.width.percent[20],
    styles.bg.blue,
    styles.custom._.logoHomeLeft,
  ],
  logoHomeCenter: [
    styles.bg.white,
    styles.width.percent[60],
    styles.custom._.logoHome,
  ],
  logoHomeRight: [
    styles.width.percent[20],
    styles.bg.blue,
    styles.custom._.logoHomeRight,
  ],
  logoHomeText: [
    styles.font.air,
    styles.text.blue,
    styles.text.center,
    styles.font.size25,
    styles.margin.top[10],
  ],
};
