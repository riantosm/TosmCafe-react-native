// Library
import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  Animated,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import Logo from '../../assets/img/logo_white.png';
import {Actions} from 'react-native-router-flux';

// Styles
import styles from '../styles/Styles';

const colorBlue = '#294EA0';

export default class LoadingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      LogoOpacity: new Animated.Value(0),
      LogoMt: new Animated.Value(1),
      LogoText: new Animated.Value(0),
      Loading: new Animated.Value(0),
      loadingSpinner: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.openLoading();
    }, 1000);
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

  openLoading = () => {
    const {LogoOpacity, LogoMt, LogoText, Loading} = this.state;
    Animated.parallel([
      Animated.spring(LogoMt, this.animaS(0, 10, 2, 1000, false)).start(),
      Animated.timing(LogoOpacity, this.animaT(1, 1000, false)).start(),
      Animated.timing(Loading, this.animaT(1, 2500, false)).start(),
      Animated.timing(LogoText, this.animaT(1, 1500, false)).start(() => {
        this.setState({
          loadingSpinner: false,
        });
        setTimeout(() => this.closeLoading(), 1200);
      }),
    ]);
  };

  closeLoading = () => {
    const {LogoOpacity, LogoMt, LogoText, Loading} = this.state;
    Animated.parallel([
      Animated.spring(LogoMt, this.animaS(1, 10, 5, 1000, false)).start(),
      Animated.timing(LogoOpacity, this.animaT(0, 500, false)).start(),
      Animated.timing(Loading, this.animaT(0, 500, false)).start(),
      Animated.timing(LogoText, this.animaT(0, 500, false)).start(() => {
        setTimeout(this.switchToAuth, 500);
      }),
    ]);
  };
  // }animation

  switchToAuth = () => {
    Actions.replace(this.props.data ? this.props.data : 'home');
  };

  render() {
    return (
      <>
        <StatusBar backgroundColor={colorBlue} barStyle="light-content" />
        <View style={[styles.container.center, styles.bg.blue]}>
          <Animated.View
            style={{
              opacity: this.state.LogoOpacity,
              top: this.state.LogoMt.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 40],
              }),
            }}>
            <Image source={Logo} style={styles.custom._.logoImage} />
          </Animated.View>
          <Animated.View style={{opacity: this.state.LogoText}}>
            <Text style={[styles.custom._.logoTitle, styles.font.air]}>
              TosmCafe
            </Text>
          </Animated.View>
          <Animated.View style={{opacity: this.state.Loading}}>
            <ActivityIndicator style={[styles.margin.top[20]]} color="white" />
          </Animated.View>
        </View>
      </>
    );
  }
}
