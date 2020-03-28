// Library
import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Animated,
  Dimensions,
} from 'react-native';
import Menu from './Menu';
import BackScreen from '../BackScreen';
import IconFA from 'react-native-vector-icons/FontAwesome';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';

// Styles
import styles from '../../styles/Styles';

let colorBlue = '#4d88ff';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <>
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
                  height: 250,
                },
              ]}>
              <View style={styles.container.top}></View>
            </Animated.View>
            <Animated.View
              style={[
                styles.custom._.bgBottom,
                {
                  height: 300,
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
              </View>
            </Animated.View>
            
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
                <Text
                  style={[
                    styles.font.air,
                    styles.text.white,
                    styles.font.size30,
                    styles.width.percent[100],
                    styles.margin.vertical[20],
                  ]}>
                  TosmCafe
                </Text>

                {/* Carousell space{ */}
                <View
                  style={[
                    styles.bg.white,
                    styles.custom.carousell.box,
                    styles.shadow.md,
                  ]}>
                  <Text
                    style={[
                      styles.custom.carousell.title,
                      styles.font.googleSansBold,
                      styles.text.center,
                      styles.text.red,
                    ]}>
                    Today's incomes
                  </Text>
                  <Text
                    style={[
                      styles.custom.carousell.body,
                      styles.font.googleSansReg,
                      styles.text.center,
                      styles.text.red,
                    ]}>
                    Rp 550.000
                  </Text>
                </View>
                {/* }Carousell space */}

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
                      color="gray"
                    />
                    <Text style={styles.text.center}>Product</Text>
                  </View>
                  <View style={[styles.custom._.itemMenu]}>
                    <IconMC
                      name="tag-multiple"
                      style={styles.align.self}
                      size={30}
                      color="gray"
                    />
                    <Text style={styles.text.center}>Category</Text>
                  </View>
                  <View style={[styles.custom._.itemMenu]}>
                    <IconMC
                      name="plus-circle-outline"
                      style={styles.align.self}
                      size={30}
                      color="gray"
                    />
                    <Text style={styles.text.center}>Cart</Text>
                  </View>
                </View>
              </Animated.View>
            </Animated.View>

            {/* bottom */}
            <Animated.View
              style={[
                styles.custom._.bgBottom,
                {
                  // height: 300,
                },
              ]}>
              <View style={styles.container.top}>
                <Text>sasd</Text>
              </View>
            </Animated.View>
            {/* <Menu /> */}
          </View>
        </ScrollView>
        <BackScreen />
      </>
    );
  }
}
