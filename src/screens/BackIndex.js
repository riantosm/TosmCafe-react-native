import React, {Component} from 'react';
import {
  BackHandler,
  View,
  Dimensions,
  Animated,
  TouchableOpacity,
  Text,
} from 'react-native';
import {Actions} from 'react-native-router-flux';

let {width, height} = Dimensions.get('window');

export default class BackIndex extends Component {
  state = {
    backClickCount: 0,
  };

  constructor(props) {
    super(props);
    this.springValue = new Animated.Value(100);
  }

  UNSAFE_componentWillMount() {
    BackHandler.addEventListener(
      'hardwareBackPress',
      this.handleBackButton.bind(this),
    );
  }

  componentWillUnmount() {
    BackHandler.removeEventListener(
      'hardwareBackPress',
      this.handleBackButton.bind(this),
    );
  }

  _spring() {
    Actions.replace('home');
  }

  handleBackButton = () => {
    this.state.backClickCount == 1 ? BackHandler.exitApp() : this._spring();

    return true;
  };

  render() {
    return (
      <>
        <Animated.View
          style={[
            styles.exitAnimatedView,
            {transform: [{translateY: this.springValue}]},
          ]}>
          <Text style={styles.exitTitleText}>
            Press back again to exit the app.
          </Text>

          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => BackHandler.exitApp()}>
            <Text style={styles.exitText}>Exit</Text>
          </TouchableOpacity>
        </Animated.View>
      </>
    );
  }
}

const styles = {
  exitAnimatedView: {
    alignSelf: 'center',
    borderRadius: 5,
    width: 'auto',
    backgroundColor: 'rgba(51, 119, 255,.8)',
    elevation: 2,
    position: 'absolute',
    bottom: 0,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  exitTitleText: {
    textAlign: 'center',
    color: '#ffffff',
    marginRight: 10,
  },
  exitText: {
    color: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 3,
    fontWeight: '700',
  },
};
