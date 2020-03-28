// Library
import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';

// Styles
import styles from '../../styles/Styles';

export default class Menu extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <>
        <TouchableOpacity onPress={() => Actions.replace('home')}>
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Actions.replace('profile')}>
          <Text>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Actions.replace('gallery')}>
          <Text>Gallery</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Actions.replace('logout')}>
          <Text>Logout</Text>
        </TouchableOpacity>

        <View style={[styles.custom.navigation.nav, styles.bg.blue]}>
          <Text>Btom</Text>
        </View>
      </>
    );
  }
}
