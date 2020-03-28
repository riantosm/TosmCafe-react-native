// Library
import React, {Component} from 'react';
import {
  Text,
  View,
  StatusBar,
  Animated,
  Dimensions,
  BackHandler,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import BackScreen from './BackScreen';
import {Form, Item, Input, Label, Button} from 'native-base';
import IconFA from 'react-native-vector-icons/FontAwesome';
import {Actions} from 'react-native-router-flux';

// Styles
import styles from '../styles/Styles';

let colorBlue = '#4d88ff';

export default class AuthScreen extends Component {
  state = {
    BgTop: new Animated.Value(0),
    BgBottom: new Animated.Value(0),
    BgMiddle: new Animated.Value(0),
    TextTitleOpacity: new Animated.Value(0),
    TextTitleMt: new Animated.Value(0),
    checkingOpacity: new Animated.Value(0),
    checkingMt: new Animated.Value(0),
    incorrectOpacity: new Animated.Value(0),
    incorrectMt: new Animated.Value(0),
    nextOpacity: new Animated.Value(0),
    nextMt: new Animated.Value(0),

    login: false,
    checking: false,
    incorrect: null,

    form: false,
    username: '',
    password: '',
  };

  componentDidMount() {
    this.openForm();
  }

  openForm() {
    const {BgTop, BgBottom, TextTitleOpacity, TextTitleMt} = this.state;
    Animated.parallel([
      // open up bg oval
      Animated.timing(BgTop, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false,
      }).start(),
      // open up bg bottom
      Animated.timing(BgBottom, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false,
      }).start(() => {
        this.setState({
          shadowOval: true,
        });
        // open from login
        Animated.timing(TextTitleOpacity, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }).start(),
          Animated.spring(TextTitleMt, {
            toValue: 1,
            tension: 5,
            friction: 2,
            duration: 500,
            useNativeDriver: false,
          }).start();
      }),
    ]);
    this.setState({
      checking: false,
      incorrect: null,
    });
  }

  closeForm() {
    const {
      BgTop,
      BgBottom,
      TextTitleOpacity,
      TextTitleMt,
      checkingOpacity,
      checkingMt,
    } = this.state;

    this.setState({
      shadowOval: false,
    });

    Animated.parallel([
      // close form login
      Animated.timing(TextTitleOpacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(),
      Animated.timing(TextTitleMt, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start(() => {
        // open down bg oval
        Animated.timing(BgTop, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: false,
        }).start(),
          // open down bg bottom
          Animated.timing(BgBottom, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: false,
          }).start(() => {
            this.setState({
              checking: true,
            });
            // open loading 'please wait'
            Animated.timing(checkingOpacity, {
              toValue: 1,
              duration: 500,
              useNativeDriver: false,
            }).start();
            Animated.spring(checkingMt, {
              toValue: 1,
              tension: 5,
              friction: 2,
              duration: 500,
              useNativeDriver: false,
            }).start(() => {
              // close loading 'please wait'
              setTimeout(() => {
                Animated.timing(checkingOpacity, {
                  toValue: 0,
                  duration: 500,
                  useNativeDriver: false,
                }).start(),
                  Animated.timing(checkingMt, {
                    toValue: 0,
                    duration: 500,
                    useNativeDriver: false,
                  }).start(() => {
                    this.checkUser();
                  });
              }, 2500);
            });
          });
      }),
    ]);
  }

  handleChange = key => val => {
    this.setState({[key]: val});
  };

  handleSubmit = () => {
    const {username, password} = this.state;
    if (username !== '' && password !== '') {
      this.setState({
        form: false,
      });
      this.closeForm();
    } else {
      this.setState({
        form: true,
      });
    }
  };

  checkUser() {
    const {
      username,
      password,
      incorrectOpacity,
      incorrectMt,
      nextOpacity,
      nextMt,
    } = this.state;
    if (username === 'Admin') {
      Animated.parallel([
        this.setState({
          incorrect: false,
        }),
        // open 'next userpass'
        Animated.spring(nextMt, {
          toValue: 1,
          tension: 10,
          friction: 2,
          duration: 500,
          useNativeDriver: false,
        }).start(),
        Animated.timing(nextOpacity, {
          toValue: 1,
          duration: 500,
          useNativeDriver: false,
        }).start(() => {
          // close 'next userpass' after 2s
          setTimeout(() => {
            Animated.timing(nextMt, {
              toValue: 0,
              duration: 500,
              useNativeDriver: false,
            }).start(),
              Animated.timing(nextOpacity, {
                toValue: 0,
                duration: 500,
                useNativeDriver: false,
              }).start(() => {
                Actions.replace('loading', 'home');
              });
          }, 2500);
        }),
      ]);
    } else {
      Animated.parallel([
        this.setState({
          incorrect: true,
        }),
        // open 'incorrect userpass'
        Animated.spring(incorrectMt, {
          toValue: 1,
          tension: 10,
          friction: 2,
          duration: 500,
          useNativeDriver: false,
        }).start(),
        Animated.timing(incorrectOpacity, {
          toValue: 1,
          duration: 500,
          useNativeDriver: false,
        }).start(() => {
          // close 'incorrect userpass' after 2s
          setTimeout(() => {
            Animated.timing(incorrectMt, {
              toValue: 0,
              duration: 500,
              useNativeDriver: false,
            }).start(),
              Animated.timing(incorrectOpacity, {
                toValue: 0,
                duration: 500,
                useNativeDriver: false,
              }).start(() => {
                this.openForm();
              });
          }, 2000);
        }),
      ]);
    }
  }

  render() {
    return (
      <>
        <StatusBar translucent backgroundColor={colorBlue} barStyle="light-content" />
        <ScrollView
          behavior="padding"
          style={[styles.bg.whiteSmoke, {flex: 1}]}>
          <View style={[styles.container.center]}>
            {/* top */}
            <Animated.View
              style={[
                styles.bg.blue,
                styles.shadow.none,
                styles.custom._.bgTop,
                {
                  height: this.state.BgTop.interpolate({
                    inputRange: [0, 1],
                    outputRange: [Dimensions.get('window').height + 100, 250],
                  }),
                },
              ]}>
              <View style={styles.container.center}>
                {this.state.checking ? (
                  <>
                    {this.state.incorrect == true ? (
                      <>
                        {/* username password incorrect */}
                        <Animated.View
                          style={{
                            opacity: this.state.incorrectOpacity,
                            marginTop: this.state.incorrectMt.interpolate({
                              inputRange: [0, 1],
                              outputRange: [20, 0],
                            }),
                          }}>
                          <IconFA
                            name="close"
                            style={styles.align.self}
                            size={40}
                            color="white"
                          />
                          <Text
                            style={[
                              styles.text.center,
                              styles.text.white,
                              styles.font.size25,
                              styles.font.googleSansBold,
                              styles.margin.top[20],
                              styles.padding.horizontal[20],
                            ]}>
                            <Text>Incorrect username & password!</Text>
                          </Text>
                        </Animated.View>
                      </>
                    ) : this.state.incorrect == false ? (
                      <>
                        <Animated.View
                          style={{
                            opacity: this.state.nextOpacity,
                            marginTop: this.state.nextMt.interpolate({
                              inputRange: [0, 1],
                              outputRange: [20, 0],
                            }),
                          }}>
                          <IconFA
                            name="check"
                            style={styles.align.self}
                            size={40}
                            color="white"
                          />
                          <Text
                            style={[
                              styles.text.center,
                              styles.text.white,
                              styles.font.size25,
                              styles.font.googleSansBold,
                              styles.margin.top[20],
                              styles.padding.horizontal[20],
                            ]}>
                            <Text>Login success!</Text>
                          </Text>
                        </Animated.View>
                      </>
                    ) : (
                      <>
                        {/* loading check user */}
                        <Animated.View
                          style={[
                            {
                              opacity: this.state.checkingOpacity,
                              marginTop: this.state.checkingMt.interpolate({
                                inputRange: [0, 1],
                                outputRange: [20, 0],
                              }),
                            },
                          ]}>
                          <ActivityIndicator
                            style={[styles.margin.top[20]]}
                            color="white"
                            size="large"
                          />
                          <Text
                            style={[
                              styles.text.center,
                              styles.text.white,
                              styles.font.size25,
                              styles.font.googleSansBold,
                              styles.margin.top[20],
                              styles.padding.horizontal[20],
                            ]}>
                            <Text>Please wait</Text>
                          </Text>
                        </Animated.View>
                      </>
                    )}
                  </>
                ) : (
                  <></>
                )}
              </View>
            </Animated.View>
            {/* middle */}
            <Animated.View
              style={[
                styles.custom._.bgMiddle,
                styles.shadow.md,
                {opacity: this.state.TextTitleOpacity},
              ]}>
              <Animated.View
                style={[
                  {
                    marginTop: this.state.TextTitleMt.interpolate({
                      inputRange: [0, 1],
                      outputRange: [20, 0],
                    }),
                  },
                ]}>
                <Text
                  style={[
                    styles.custom._.textContainer,
                    styles.text.white,
                    styles.font.size30,
                    styles.font.googleSansBold,
                  ]}>
                  Point of Sales App
                </Text>
              </Animated.View>
              <View
                style={[
                  styles.custom._.formArea,
                  styles.bg.white,
                  styles.shadow.md,
                  styles.margin.vertical[20],
                  styles.padding.vertical[20],
                ]}>
                <Text
                  style={[
                    styles.custom._.textContainer,
                    styles.text.grayBlack,
                    styles.font.size25,
                    styles.font.air,
                  ]}>
                  TosmCafe
                </Text>
                <Form
                  style={[
                    styles.width.percent[90],
                    styles.align.self,
                    {paddingRight: 17},
                  ]}>
                  <Item floatingLabel style={{borderColor: colorBlue}}>
                    <Label style={styles.font.air}>Username</Label>
                    <Input
                      onChangeText={this.handleChange('username')}
                      style={styles.font.air}
                    />
                  </Item>
                  <Item floatingLabel style={{borderColor: colorBlue}}>
                    <Label style={styles.font.air}>Password</Label>
                    <Input
                      onChangeText={this.handleChange('password')}
                      style={styles.font.air}
                      secureTextEntry={true}
                    />
                  </Item>
                </Form>
                {this.state.login ? (
                  <Text
                    style={[
                      styles.text.center,
                      styles.text.blue,
                      styles.font.size12,
                      styles.font.googleSansBold,
                      styles.margin.bottom[20],
                    ]}>
                    Incorrect username/password!
                  </Text>
                ) : (
                  <Text />
                )}
                {this.state.form ? (
                  <Text
                    style={[
                      styles.text.center,
                      styles.text.blue,
                      styles.font.size12,
                      styles.font.googleSansBold,
                      styles.margin.bottom[20],
                    ]}>
                    Please input username & password!
                  </Text>
                ) : (
                  <Text />
                )}
                <TouchableOpacity
                  onPress={() => this.handleSubmit()}
                  style={[
                    styles.bg.blue,
                    styles.shadow.md,
                    styles.custom._.btn,
                    styles.margin.bottom[10],
                  ]}>
                  <View>
                    <Text style={[styles.text.white, styles.text.center]}>
                      Login
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <Text
                style={[
                  styles.text.center,
                  styles.text.blue,
                  styles.font.size12,
                  styles.font.googleSansBold,
                ]}>
                TosmCafe v1.0.0
              </Text>
            </Animated.View>
            {/* bottom */}
            <Animated.View
              style={[
                styles.custom._.bgBottom,
                {
                  height: this.state.BgBottom.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 300],
                  }),
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
              </View>
            </Animated.View>
          </View>
        </ScrollView>
        <BackScreen />
      </>
    );
  }
}
