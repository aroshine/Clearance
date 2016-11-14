'use strict';

import React , {Component} from 'react';
import styles from './styles.js';
import NavigationBar from 'react-native-navigation-bar';



import
{
  View,
  Navigator,
  StyleSheet,
  Text,
  TextInput,
  Image,
} from 'react-native';

class MyInterestsPage extends Component {

  constructor(props) {
    super(props);
    this.state={
      id:'myInterests',
      
    }
    this._upcomingEvents = this._upcomingEvents.bind(this);

  }
    _upcomingEvents() {
    this.props.navigator.push({
      id:'upcomingEvents',
      passProps: {
        name:'upcoming'
      }
    });
  }




  render() {
    var dataFromLastPage = this.props.route.passProps.name;
    return (

    <View>
    <NavigationBar
          title={'Your Pinned Events'}
          titleColor={'#fff'}
          leftButtonIcon= {require('./img/calendar.png')}
          style= {styles.navBar}
          onLeftButtonPress={this._upcomingEvents} />

    
     </View>
 
        
    );
  }
}


module.exports = MyInterestsPage;