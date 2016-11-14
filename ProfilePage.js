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
  ScrollView,
  Image,
} from 'react-native';

class ProfilePage extends Component {

  constructor(props) {
    super(props);
    this.state={
      id:'profile',

    }
    this._upcomingEvents= this._upcomingEvents.bind(this);
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
    <View style={{zIndex:1}}>
     <NavigationBar
          title={'Settings'}
          titleColor={'#fff'}
          leftButtonIcon= {require('./img/shopping_bag.png')}
          style= {styles.navBar}
          onLeftButtonPress={this._upcomingEvents}/>
    </View>

   <Image source={require('./img/back.png')}  style={styles.backgroundImage}>
   <View style={styles.userInfoContainer}>
   <Image source={ require('./img/5.png')} style={styles.profilepic}>
   </Image>
   </View>

   </Image>
      </View>
    );
  }
}


module.exports = ProfilePage;