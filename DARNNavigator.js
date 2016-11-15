'use strict';

import React , {Component} from 'react';
import
{
  View,
  Navigator
} from 'react-native';


const FirstPage = require('./FirstPage');
const SecondPage = require('./SecondPage');
const UpcomingEventsPage = require('./UpcomingEventsPage');
const ProfilePage = require('./ProfilePage');
const MyInterestsPage = require('./MyInterestsPage');
const EventsPage = require('./EventsPage');

import * as firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyA_NbrbJtd21aS37dGhhyaz55AOizfC4Qg",
    authDomain: "clearance-efd98.firebaseapp.com",
    databaseURL: "https://clearance-efd98.firebaseio.com",
    storageBucket: "clearance-efd98.appspot.com",
    messagingSenderId: "408069964970"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

// other code and class declaration.


class DARNNavigator extends React.Component{
  constructor(props) {
  super(props);
  this._saveUserId = this._saveUserId.bind(this);
  this._getUserId = this._getUserId.bind(this);

  this.userId = -1;

  }

  render() {
    var initialRouteID = 'first';
    return (
      <Navigator
        style={{flex:1}}
        initialRoute={{id: initialRouteID}}
        renderScene={this.navigatorRenderScene.bind(this)}/>

    );
  }

  _saveUserId(id){
    this.userId = id;

  }
  _getUserId(){
    return this.userId;
  }


  navigatorRenderScene(route, navigator) {
    switch (route.id) {
      case 'first':
        return (<FirstPage navigator={navigator} route={route} firebaseApp={firebaseApp} saveUserId={this._saveUserId} title="first"/>);
      case 'second':
        return (<SecondPage navigator={navigator} route={route} firebaseApp={firebaseApp} title="second"/>);
      case 'upcomingEvents':
        return (<UpcomingEventsPage navigator={navigator} route={route} firebaseApp={firebaseApp} getUserId={this._getUserId} title="upcomingEvents"/>);
      case 'profile':
        return (<ProfilePage navigator={navigator} route={route} firebaseApp={firebaseApp} title="profile"/>);
      case 'myInterests':
        return (<MyInterestsPage navigator={navigator} route={route} firebaseApp={firebaseApp}  title="MyInterests"/>);
      case 'eventsPage':
        return (<EventsPage navigator={navigator} route={route} firebaseApp={firebaseApp} title="EventsPage"/>);

    }
  }
}


module.exports = DARNNavigator;