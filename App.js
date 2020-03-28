// Library
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Router, Scene } from 'react-native-router-flux'

import AuthScreen from './src/screens/AuthScreen'
import LoadingScreen from './src/screens/LoadingScreen'
import BackScreen from './src/screens/BackScreen'
import Home from './src/screens/pages/Home'
import History from './src/screens/pages/History';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="home"
            component={Home}
            hideNavBar={true}
          />
          <Scene key="history"
            component={History}
            hideNavBar={true}
          />

          <Scene key="loading"
            component={LoadingScreen}
            initial={true}
            hideNavBar={true}
          />
          <Scene
            key="auth"
            component={AuthScreen}
            hideNavBar={true}
          />
          <Scene
            key="backS"
            component={BackScreen}
            hideNavBar={true}
          />
        </Scene>
      </Router>
    )
  }
}