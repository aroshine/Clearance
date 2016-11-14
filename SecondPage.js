'use strict';

import React , {Component} from 'react';
import styles from './styles.js';

import
{
  View,
  Navigator,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  Image,
} from 'react-native';

class SecondPage extends Component {

  constructor(props) {
    super(props);
    this.state={
      id:'second',
      email: "",
      name: "",
      password: "",
    }
    this._toProfile = this._toProfile.bind(this);
    this._logIn = this._logIn.bind(this);
    this._upcomingEvents = this._upcomingEvents.bind(this);

  }
   _logIn() {
    this.props.navigator.push({
      id:'first',
    });
  }
   _toProfile() {
    this.props.navigator.push({
      id:'fourth',
      passProps: {
        name:'fourth'
      }
    });
  }

// A method to passs the username and password to firebase and make a new user account
  _upcomingEvents() {
    this.setState({
      // When waiting for the firebase server show the loading indicator.
      loading: true
    });

    // Make a call to firebase to create a new user.
    this.props.firebaseApp.auth().createUserWithEmailAndPassword(
      this.state.email,
      this.state.password).then(() => {
        // then and catch are methods that we call on the Promise returned from
        // createUserWithEmailAndPassword
        alert('Your account was created!');
        this.setState({
          // Clear out the fields when the user logs in and hide the progress indicator.
          email: '',
          password: '',
          loading: false
        });
        this.props.navigator.push({
          id:'upcomingEvents',
          passProps: {
            name:'upcoming'
          }
        });
   }).catch((error) => {
      // Leave the fields filled when an error occurs and hide the progress indicator.
      this.setState({
        loading: false
      });
      alert("Account creation failed: " + error.message );
    });
  }




  render() {
    var dataFromLastPage = this.props.route.passProps.name;
    return (
      <View style={styles.viewStyle}>
      <Image style={styles.starticon}
            source={require('./img/compass.png')}
        />
        <Text style={styles.welcome}>
            Clearance STHLM
          </Text>
        <View>
         <TextInput
          onChangeText={(text)=> this.setState({email: text})}
          style={styles.input}
          value={this.state.email} 
          placeholder="Email">
        </TextInput>
        <TextInput
          onChangeText={(text)=> this.setState({password: text})}
          style={styles.input}
          value={this.state.password}
          placeholder="Password"
          secureTextEntry={true}>
        </TextInput>
        </View>
        <TouchableHighlight onPress={this._upcomingEvents} style={{padding: 6}} >
          <Text style={styles.newaccount}> Signup </Text>
        </TouchableHighlight>
         <TouchableHighlight onPress={this._logIn} >
          <Text> Go to Login </Text>
        </TouchableHighlight>


      </View>
    );
  }
}


module.exports = SecondPage;