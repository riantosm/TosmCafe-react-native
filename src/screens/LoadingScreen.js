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

let colorBlue = '#4d88ff';

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

  openLoading = () => {
    const {LogoOpacity, LogoMt, LogoText, Loading} = this.state;
    Animated.parallel([
      Animated.spring(LogoMt, {
        toValue: 0,
        tension: 10,
        friction: 2,
        duration: 1000,
        useNativeDriver: false,
      }).start(),
      Animated.timing(LogoOpacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false,
      }).start(),
      Animated.timing(Loading, {
        toValue: 1,
        duration: 2500,
        useNativeDriver: true,
      }).start(),
      Animated.timing(LogoText, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }).start(() => {
        this.setState({
          loadingSpinner: true,
        });
        setTimeout(() => this.closeLoading(), 1200);
      }),
    ]);
  };

  closeLoading = () => {
    const {LogoOpacity, LogoMt, LogoText, Loading} = this.state;
    Animated.parallel([
      Animated.spring(LogoMt, {
        toValue: 1,
        tension: 10,
        friction: 5,
        duration: 1000,
        useNativeDriver: false,
      }).start(),
      Animated.timing(LogoOpacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start(),
      Animated.timing(Loading, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(),
      Animated.timing(LogoText, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        setTimeout(this.switchToAuth, 500);
      }),
    ]);
  };

  switchToAuth = () => {
    Actions.replace(this.props.data ? this.props.data : 'auth');
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
            <Text
              style={[styles.custom._.logoTitle, styles.font.air]}>
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
