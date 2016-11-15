'use strict';

import React , {Component} from 'react';
import styles from './styles.js';

import
{
  View,
  Navigator,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableHighlight
} from 'react-native';

class FirstPage extends Component {

  constructor(props) {
    super(props);
    this.state={
      id:'first',
      email: "",
      name: "",
      password: ""
    }
    this._createAccount = this._createAccount.bind(this);
    this._logIn = this._logIn.bind(this);
  }

  saveUserId(id){
    this.props.saveUserId(id);
  }

  _createAccount() {
    this.props.navigator.push({
      id:'second',
      passProps: {
        name:'darkarmy'
      }
    });
  }
 

  render() {
    return (
      <Image source={require('./img/cloting.jpg')} style={styles.container} >
        <Image style={styles.starticon}
            source={require('./img/compass.png')}
        />
        <Text style={styles.welcome}>
            Clearance STHLM
          </Text>
           <TouchableHighlight onPress={this._createAccount}>
               <Text style={styles.newaccount}>CREATE ACCOUNT</Text>
            </TouchableHighlight>
          
            <View style={{flexDirection:'row', flexWrap:'wrap', marginRight:30}}>
              <Image source={require('./img/user.png')}  style={styles.loginicon}></Image>
              <TextInput
                onChangeText={(text)=> this.setState({email: text})}
                style={styles.input}
                value={this.state.email}
                placeholder="Email">
              </TextInput>
            </View>
            
            <View style={{flexDirection:'row', flexWrap:'wrap', marginRight:28}}>
              <Image source={require('./img/lock.png')} style={styles.lockericon}></Image>
              <TextInput
                onChangeText={(text)=> this.setState({password: text})}
                style={styles.input}
                value={this.state.password}
                placeholder="Password"
                secureTextEntry={true}>
              </TextInput>
            </View>
            <TouchableHighlight onPress={this._logIn} style={{padding: 15}}>
              <Text style={styles.login}>LOG IN</Text>
            </TouchableHighlight>
            
      </Image>

    );
  }
   _logIn(){
    this.setState({
      loading: true
    });
    // Log in and display an alert to tell the user what happened.
    this.props.firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password
    ).then((userData) =>
      {
        this.saveUserId(userData.uid);
        this.setState({
                loading: false
              });
        /*alert("Login successful" );*/
      this.props.navigator.push({
      id:'upcomingEvents',
        passProps: {
        name:'upcoming'
      }
    });
      }
       
    ).catch((error) =>
        {
              this.setState({
                loading: false
              });
        alert('Login Failed. Please try again');
    });
  }
}



module.exports = FirstPage;