// Library
import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Menu from './Menu';
import BackScreen from '../BackScreen';

// Styles
import styles from '../../styles/Styles';

export default class History extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {}
  
  render() {
    return (
      <>
        <View style={styles.container.center}>
          <Text>History</Text>
          <Menu />
        </View>
        <BackScreen />
      </>
    );
  }
}
