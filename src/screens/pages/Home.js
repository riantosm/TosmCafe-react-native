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
} from 'react-native';
import Menu from './Menu';
import BackScreen from '../BackScreen';
import IconFA from 'react-native-vector-icons/FontAwesome';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';

// Styles
import styles from '../../styles/Styles';
import HistoryComp from '../../components/HistoryComp';

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
    };
  }

  componentDidMount() {
    this.openOval();
  }

  openOval() {
    const {
      BgTop,
      BgBottom,
      BgMiddle,
      TitleOpacity,
      TitleMt,
      HistoryOpacity,
      HistoryToCenter,
    } = this.state;
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
        });
        // show
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
            Animated.timing(HistoryOpacity, {
              toValue: 1,
              duration: 1000,
              useNativeDriver: true,
            }).start(),
              Animated.timing(HistoryToCenter, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: false,
              }).start();
          });
      }),
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
                {/* <View style={{width:100,borderWidth:1,alignSelf:'center',borderColor:'#fff'}}></View> */}

                {/* History{ */}
                <Animated.View style={{opacity: this.state.HistoryOpacity}}>
                  <HistoryComp toCenter toCenter={this.state.HistoryToCenter} />
                </Animated.View>
                {/* }History */}

                <View
                  style={[
                    styles.bg.white,
                    styles.shadow.md,
                    styles.custom._.menuBox,
                    styles.flex.directionRow,
                    styles.flex.justify,
                  ]}>
                  <View style={[styles.custom._.itemMenu]}>
                    <IconMC
                      name="silverware"
                      style={styles.align.self}
                      size={30}
                      style={[styles.text.blue, styles.text.center]}
                    />
                    <Text
                      style={[
                        styles.text.center,
                        styles.font.air,
                        styles.text.blue,
                      ]}>
                      Product
                    </Text>
                  </View>
                  <View style={[styles.custom._.itemMenu]}>
                    <IconMC
                      name="plus-circle-outline"
                      style={styles.align.self}
                      size={30}
                      style={[styles.text.blue, styles.text.center]}
                    />
                    <Text
                      style={[
                        styles.text.center,
                        styles.font.air,
                        styles.text.blue,
                      ]}>
                      Cart
                    </Text>
                  </View>
                  <View style={[styles.custom._.itemMenu]}>
                    <IconMC
                      name="history"
                      style={styles.align.self}
                      size={30}
                      style={[styles.text.blue, styles.text.center]}
                    />
                    <Text
                      style={[
                        styles.text.center,
                        styles.font.air,
                        styles.text.blue,
                      ]}>
                      History
                    </Text>
                  </View>
                </View>
              </Animated.View>
            </Animated.View>
            {/* middle */}

            {/* bottom */}
            <Animated.View
              style={[
                styles.custom._.bgBottom,
                {
                  height: 200,
                },
              ]}>
              <View style={styles.container.center}>
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
                <Text>Text here</Text>
              </View>
            </Animated.View>
            {/* bottom */}

            {/* bottom */}
            {/* <Animated.View
              style={[
                styles.custom._.bgBottom,
                {
                  // height: 300,
                },
              ]}>
              <View style={styles.container.top}>
                <Text>sasd</Text>
              </View>
            </Animated.View> */}
            {/* <Menu /> */}
          </View>
        </ScrollView>
        <BackScreen />
      </>
    );
  }
}
