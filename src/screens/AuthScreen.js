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
import VersionComp from '../components/VersionComp';

const colorBlue = '#294EA0';

export default class AuthScreen extends Component {
  state = {
    BgTop: new Animated.Value(0),
    BgBottom: new Animated.Value(0),
    BgMiddle: new Animated.Value(0),
    TextTitleO: new Animated.Value(0),
    TextTitleMt: new Animated.Value(0),
    checkO: new Animated.Value(0),
    checkMt: new Animated.Value(0),
    incorrectO: new Animated.Value(0),
    incorrectMt: new Animated.Value(0),
    nextO: new Animated.Value(0),
    nextMt: new Animated.Value(0),

    login: false,
    checking: false,
    incorrect: null,

    form: false,
    username: 'Admin',
    password: 'A',
  };

  componentDidMount() {
    this.openForm();
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

  openForm() {
    const {BgTop, BgBottom, TextTitleO, TextTitleMt} = this.state;
    Animated.parallel([
      // open up bg oval
      Animated.timing(BgTop, this.animaT(1, 1000, false)).start(),
      // open up bg bottom
      Animated.timing(BgBottom, this.animaT(1, 1000, false)).start(() => {
        this.setState({
          shadowOval: true,
        });
        // open from login
        Animated.timing(TextTitleO, this.animaT(1, 1000, false)).start(),
          Animated.spring(
            TextTitleMt,
            this.animaS(1, 5, 2, 500, false),
          ).start();
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
      TextTitleO,
      TextTitleMt,
      checkO,
      checkMt,
    } = this.state;

    this.setState({
      shadowOval: false,
    });
    Animated.parallel([
      // close form login
      Animated.timing(TextTitleO, this.animaT(0, 500, false)).start(),
      Animated.timing(TextTitleMt, this.animaT(0, 500, false)).start(() => {
        // open down bg oval
        Animated.timing(BgTop, this.animaT(0, 1000, false)).start(),
          // open down bg bottom
          Animated.timing(BgBottom, this.animaT(0, 1000, false)).start(() => {
            this.setState({
              checking: true,
            });
            // open loading 'please wait'
            Animated.timing(checkO, this.animaT(1, 500, false)).start();
            Animated.spring(checkMt, this.animaS(1, 5, 2, 500, false)).start(
              () => {
                // close loading 'please wait'
                setTimeout(() => {
                  Animated.timing(checkO, this.animaT(0, 500, false)).start(),
                    Animated.timing(checkMt, this.animaT(0, 500, false)).start(
                      () => {
                        this.checkUser();
                      },
                    );
                }, 2500);
              },
            );
          });
      }),
    ]);
  }
  // }animation

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
      incorrectO,
      incorrectMt,
      nextO,
      nextMt,
    } = this.state;
    if (username === 'Admin') {
      Animated.parallel([
        this.setState({
          incorrect: false,
        }),
        // open 'next userpass'
        Animated.spring(nextMt, this.animaS(1, 10, 2, 500, false)).start(),
        Animated.timing(nextO, this.animaT(1, 500, false)).start(() => {
          // close 'next userpass' after 2s
          setTimeout(() => {
            Animated.timing(nextMt, this.animaT(0, 500, false)).start(),
              Animated.timing(nextO, this.animaT(0, 500, false)).start(() => {
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
        Animated.spring(incorrectMt, this.animaS(1, 10, 2, 500, false)).start(),
        Animated.timing(incorrectO, this.animaT(1, 500, false)).start(() => {
          // close 'incorrect userpass' after 2s
          setTimeout(() => {
            Animated.timing(incorrectMt, this.animaT(0, 500, false)).start(),
              Animated.timing(incorrectO, this.animaT(0, 500, false)).start(
                () => {
                  this.openForm();
                },
              );
          }, 2000);
        }),
      ]);
    }
  }

  render() {
    return (
      <>
        <StatusBar
          translucent
          backgroundColor={colorBlue}
          barStyle="light-content"
        />
        <ScrollView behavior="padding" style={s.scrollView}>
          <View style={[styles.container.center]}>
            {/* top */}
            <Animated.View
              style={[
                s.bgTop,
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
                      // username password incorrect
                      <Animated.View
                        style={{
                          opacity: this.state.incorrectO,
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
                        <Text style={s.textChecking}>
                          <Text>Incorrect username & password!</Text>
                        </Text>
                      </Animated.View>
                    ) : this.state.incorrect == false ? (
                      // true and next
                      <Animated.View
                        style={{
                          opacity: this.state.nextO,
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
                        <Text style={s.textChecking}>
                          <Text>Login success!</Text>
                        </Text>
                      </Animated.View>
                    ) : (
                      // loading check user
                      <Animated.View
                        style={{
                          opacity: this.state.checkO,
                          marginTop: this.state.checkMt.interpolate({
                            inputRange: [0, 1],
                            outputRange: [20, 0],
                          }),
                        }}>
                        <ActivityIndicator
                          style={[styles.margin.top[20]]}
                          color="white"
                          size="large"
                        />
                        <Text style={s.textChecking}>
                          <Text>Please wait</Text>
                        </Text>
                      </Animated.View>
                    )}
                  </>
                ) : (
                  <></>
                )}
              </View>
            </Animated.View>
            {/* middle */}
            <Animated.View
              style={[s.bgMiddle, {opacity: this.state.TextTitleO}]}>
              <Animated.View
                style={{
                  marginTop: this.state.TextTitleMt.interpolate({
                    inputRange: [0, 1],
                    outputRange: [20, 0],
                  }),
                }}>
                <Text style={s.textTitle}>Point of Sales App</Text>
              </Animated.View>
              <View style={s.formArea}>
                <Text style={s.formTitle}>TosmCafe</Text>
                <Form style={s.form}>
                  <Item floatingLabel style={s.formBorderColor}>
                    <Label style={styles.font.air}>Username</Label>
                    <Input
                      onChangeText={this.handleChange('username')}
                      style={styles.font.air}
                      value={this.state.username}
                    />
                  </Item>
                  <Item floatingLabel style={s.formBorderColor}>
                    <Label style={styles.font.air}>Password</Label>
                    <Input
                      onChangeText={this.handleChange('password')}
                      style={styles.font.air}
                      secureTextEntry={true}
                      value={this.state.password}
                    />
                  </Item>
                </Form>
                {this.state.login ? (
                  <Text style={s.inputEmpty}>Incorrect username/password!</Text>
                ) : (
                  <Text />
                )}
                {this.state.form ? (
                  <Text style={s.inputEmpty}>
                    Please input username & password!
                  </Text>
                ) : (
                  <Text />
                )}
                <TouchableOpacity
                  onPress={() => this.handleSubmit()}
                  style={s.btn}>
                  <View>
                    <Text style={s.btnText}>Login</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <VersionComp />
            </Animated.View>
            {/* bottom */}
            <Animated.View
              style={[
                s.bgBottom,
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
                    styles.bg.blue,
                    s.oval,
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

// styles
const s = {
  form: [styles.width.percent[90], styles.align.self, {paddingRight: 17}],
  scrollView: [styles.bg.whiteSmoke, {flex: 1}],
  bgTop: [styles.bg.blue, styles.shadow.none, styles.custom._.bgTop],
  textChecking: [
    styles.text.center,
    styles.text.white,
    styles.font.size25,
    styles.font.googleSansBold,
    styles.margin.top[20],
    styles.padding.horizontal[20],
  ],
  bgMiddle: [
    styles.custom._.bgMiddle,
    styles.width.percent[90],
    styles.shadow.md,
  ],
  textTitle: [
    styles.custom._.textContainer,
    styles.text.whiteRed,
    styles.font.size30,
    styles.font.googleSansBold,
  ],
  formArea: [
    styles.custom._.formArea,
    styles.bg.white,
    styles.shadow.md,
    styles.margin.vertical[20],
    styles.padding.vertical[20],
  ],
  formTitle: [
    styles.custom._.textContainer,
    styles.text.grayBlack,
    styles.font.size25,
    styles.font.air,
  ],
  formBorderColor: [{borderColor: colorBlue}],
  inputEmpty: [
    styles.text.center,
    styles.text.blue,
    styles.font.size12,
    styles.font.googleSansBold,
    styles.margin.bottom[20],
  ],
  btn: [
    styles.bg.blue,
    styles.shadow.md,
    styles.custom._.btn,
    styles.margin.bottom[10],
  ],
  btnText: [styles.text.white, styles.font.air, styles.text.center],
  bgBottom: [styles.custom._.bgBottom],
  oval: [
    {
      position: 'absolute',
      top: -600,
      width: Dimensions.get('window').width + 440,
      height: Dimensions.get('window').width + 440,
      borderStartWidth: 0,
      borderBottomStartRadius: 1000,
      transform: [
        {
          rotate: '-45deg',
        },
      ],
    },
  ],
};
