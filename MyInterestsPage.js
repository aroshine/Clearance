'use strict';

import React , {Component} from 'react';
import styles from './styles.js';
import NavigationBar from 'react-native-navigation-bar';
import Button from 'react-native-button';



import
{
  View,
  Navigator,
  StyleSheet,
  ListView,
  Text,
  TextInput,
  Image,
  TouchableHighlight
} from 'react-native';

import {
  Card,
  CardTitle,
  CardImage,
  CardContent,
  CardAction
} from 'react-native-card-view';

class MyInterestsPage extends Component {

  constructor(props) {
    super(props);    
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });
    this.state={
      id:'upcomingEvents',
      dataSource: dataSource,
    }
    this._upcomingEvents = this._upcomingEvents.bind(this);
    this._createAccount = this._createAccount.bind(this);
    this._event1 = this._event1.bind(this);
    this._profilePage = this._profilePage.bind(this);
    this.db = this.props.firebaseApp.database();

  }

  componentDidMount() {
  // start listening for firebase updates
  this.listenForEvents(this.db, "zoDh8hg9guZwID9uZ6S5rmpyJrD3");
}



displayEvents(events){
  var eventList = [];
  for(var key in events){
    eventList.push({
        name: events[key].event_name,
        date: events[key].event_date,
        time: events[key].event_time,
        where: events[key].event_where,
        _key: key
      });
  }
  this.setState({
    dataSource: this.state.dataSource.cloneWithRows(eventList)
  });
}
listenForEvents(db, userId) {
  var pinRef = db.ref("pins");
  var events = {};
  pinRef.orderByChild("user_id").equalTo(userId).on('value', (snapShot) =>{
    var pins = snapShot.val();
    var expectedCount = Object.keys(pins).length;
    var foundCount = 0;
    for(var key in pins){
      var eventId = pins[key].event_id;
      var eventRef = db.ref("events/" + eventId);
      eventRef.once('value', (snap) =>{
        events[snap.key] = snap.val();
        if(++foundCount === expectedCount){
          this.displayEvents(events);
        }
      });
    } 
  });
}

 renderRow(events) {
  return (
       <Button onPress={this._event1}>
       <View style={styles.cardcontainer}>
          <Card>
            <View style={{flex:1 ,flexDirection:'row'}}>
              <CardImage>
              <Image
                style={{width: 100, height: 156}}
                source={require('./img/acnes.jpg')}
              />
            </CardImage>
            <CardContent>
              <Text style={styles.month}>
              {}
              </Text> 
              <Text style={styles.date}>
              {}
              </Text> 
            </CardContent>
            <View>
              <CardContent>
                <Text style={styles.title}>{events.name}</Text>
                <Text>{events.where}</Text>
                <Text>{events.time}</Text>
              </CardContent>
            </View>
            </View> 
            <Button> Interested </Button> 
          </Card>
          </View>
          </Button>
     
  );
}


  _upcomingEvents() {
    this.props.navigator.push({
      id:'upcomingEvents',
      passProps: {
        name:'upcoming'
      }
    });
  }
  _createAccount() {
    this.props.navigator.push({
      id:'second',
      passProps: {
        name:'darkarmy'
      }
    });
  }

_event1() {
    this.props.navigator.push({
      id:'eventsPage',
      passProps: {
        name:'acne'
      }
    });
  }

_profilePage(){
    this.props.navigator.push({
      id: 'profile',
      passProps:{
        name: 'profile'
      }
    });
}

  

  render() {
    var dataFromLastPage = this.props.route.passProps.name;

    return (
    <View>
    <View style={{zIndex:1}}>
     <NavigationBar
          title={'Pinned Events'}
          titleColor={'#fff'}
          leftButtonIcon= {require('./img/calendar.png')}
          rightButtonIcon={require('./img/setting.png')}
          style= {styles.navBar}
          onLeftButtonPress={this._upcomingEvents}
          onRightButtonPress={this._profilePage} />
    </View>
   <ListView
          style={{backgroundColor: '#FFCF79'}}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
          enableEmptySections={true}
          />

    </View>

    );
  }
    
}


module.exports = MyInterestsPage;