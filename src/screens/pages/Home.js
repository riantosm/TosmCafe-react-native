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
import ListCategoryComp from '../../components/ListCategoryComp';
import VersionComp from '../../components/VersionComp';

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

      ListCategoryOpacity: new Animated.Value(0),
      ListCategoryMt: new Animated.Value(0),

      VersionOpacity: new Animated.Value(0),

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
    this.openOval();
  }

  openOval() {
    const {BgTop, BgBottom, BgMiddle} = this.state;
    Animated.parallel([
      // open up bg oval
      Animated.timing(BgTop, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false,
      }).start(),
      Animated.timing(BgBottom, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false,
      }).start(() => {
        this.setState({
          shadowOval: true,
        }),
          // show title
          this.showTitle();
      }),
    ]);
  }

  showTitle() {
    const {TitleMt, TitleOpacity} = this.state;
    Animated.parallel([
      Animated.timing(TitleMt, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }).start(),
      Animated.timing(TitleOpacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }).start(() => {
        // show history
        this.showHistory(),
          // show menu
          setTimeout(() => {
            this.showMenu();
            // show list category
            setTimeout(() => {
              this.showListCategory();
              this.version();
            }, 500);
          }, 500);
      }),
    ]);
  }

  showHistory() {
    const {HistoryOpacity, HistoryToCenter} = this.state;
    Animated.parallel([
      Animated.timing(HistoryOpacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start(),
      Animated.timing(HistoryToCenter, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false,
      }).start(),
    ]);
  }

  showMenu() {
    const {MenuOpacity, MenuMt} = this.state;
    Animated.parallel([
      Animated.timing(MenuOpacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }).start(),
      Animated.spring(MenuMt, {
        toValue: 1,
        tension: 10,
        friction: 2,
        duration: 200,
        useNativeDriver: false,
      }).start(),
    ]);
  }

  showListCategory() {
    const {ListCategoryOpacity, ListCategoryMt} = this.state;
    Animated.parallel([
      Animated.timing(ListCategoryOpacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }).start(),
      Animated.spring(ListCategoryMt, {
        toValue: 1,
        tension: 10,
        friction: 2,
        duration: 500,
        useNativeDriver: false,
      }).start(),
    ]);
  }

  version() {
    const {VersionOpacity} = this.state;
    Animated.parallel([
      Animated.timing(VersionOpacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start(),
    ]);
  }

  render() {
    return (
      <>
        <StatusBar backgroundColor={'#fff'} barStyle="dark-content" />
        <ScrollView
          behavior="padding"
          style={[styles.bg.whiteSmoke, {flex: 1}]}>
          <View style={styles.container.center}>
            {/* top */}
            <Animated.View
              style={[
                styles.bg.blue,
                styles.shadow.none,
                styles.custom._.bgTop,
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
            <Animated.View
              style={[
                styles.custom._.bgMiddle,
                styles.shadow.md,
                {opacity: 1, top: 0},
              ]}>
              <Animated.View
                style={[
                  {
                    marginTop: 0,
                  },
                ]}>
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
                    <View
                      style={[
                        styles.width.percent[20],
                        styles.bg.blue,
                        styles.custom._.logoHomeLeft,
                      ]}
                    />
                    <View
                      style={[
                        styles.bg.white,
                        styles.width.percent[60],
                        styles.custom._.logoHome,
                      ]}>
                      <Text
                        style={[
                          styles.font.air,
                          styles.text.blue,
                          styles.text.center,
                          styles.font.size25,
                          styles.margin.top[10],
                        ]}>
                        TosmCafe
                      </Text>
                    </View>
                    <View
                      style={[
                        styles.width.percent[20],
                        styles.bg.blue,
                        styles.custom._.logoHomeRight,
                      ]}
                    />
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
                  <MenuComp />
                </Animated.View>
                {/* }Menu */}
              </Animated.View>
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

              {/* Category{ */}
              <Animated.View
                style={[
                  styles.shadow.md,
                  {
                    opacity: this.state.ListCategoryOpacity,
                    marginTop: 50,
                  },
                ]}>
                <ListCategoryComp
                  ListCategoryMt={this.state.ListCategoryMt}
                  category={this.state.listCategory}
                  product={this.state.listProduct}
                />
              </Animated.View>
              {/* }Category */}
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
