// Library
import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Animated,
  Dimensions,StatusBar
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
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <>
      <StatusBar backgroundColor={colorBlue} barStyle="light-content" />
        <ScrollView
          behavior="padding"
          style={[styles.bg.whiteSmoke, {flex: 1}]}>
          <View style={styles.container.center}>
            {/* top */}
            <Animated.View
              style={[
                styles.bg.red,
                styles.shadow.none,
                styles.custom._.bgTop,
                {
                  height: 200,
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
                <View style={styles.flex.directionRow}>
                  <Text
                    style={[
                      styles.font.air,
                      styles.text.white,
                      // styles.text.center,
                      styles.font.size30,
                      styles.width.percent[50],
                      styles.margin.top[20],
                      styles.margin.bottom[10],
                    ]}>
                    TosmCafe
                  </Text>
                  <Text
                    style={[
                      styles.width.percent[50],
                      styles.margin.top[20],
                      styles.margin.bottom[10],
                      styles.text.right,
                      {textAlignVertical: 'center'},
                    ]}>
                    <IconMC
                      name="logout"
                      style={styles.align.selfRight}
                      size={25}
                      color="white"
                    />
                  </Text>
                </View>
                {/* <View style={{width:100,borderWidth:1,alignSelf:'center',borderColor:'#fff'}}></View> */}

                {/* History{ */}
                <HistoryComp />
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
                    // this.state.shadowOval ? styles.shadow.md : styles.shadow.n,
                    styles.shadow.md,
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
                <Text>s</Text>
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
