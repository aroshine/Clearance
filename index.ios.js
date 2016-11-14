/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import styles from './styles.js';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';



var Navigation = require('./DARNNavigator');

class Clearance extends Component {
  //it will automatically load once the project is called

  render() {
    return (
      <Navigation></Navigation>
    );
  }
}



AppRegistry.registerComponent('Clearance', () => Clearance);