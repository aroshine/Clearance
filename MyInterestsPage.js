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
    this._myInterests = this._myInterests.bind(this);
    this._createAccount = this._createAccount.bind(this);
    this._event1 = this._event1.bind(this);
    this._profilePage = this._profilePage.bind(this);
    this.db = this.props.firebaseApp.database();

  }

  componentDidMount() {
  // start listening for firebase updates
  this.listenForEvents(this.db);
}

 renderRow(events) {
  return (
       <Button onPress={this._event1}>
       <View style={styles.cardcontainer}>
          <Card>
           <CardImage>
              <Image
                style={{width: 350, height: 200, marginTop:10}}
                source={require('./img/acnes.jpg')}
              />
            </CardImage>
            <View style={{flex:1 ,flexDirection:'row', marginRight:30,padding: 15}}>
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
listenForEvents(db) {
  db.on('value', (dataSnapshot) => {
    var events = [];
    dataSnapshot.forEach((child) => {
      events.push({
        name: child.val().event_name,
        date: child.val().event_date,
        time: child.val().event_time,
        where: child.val().event_where,
        _key: child.key
      });
    });

    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(events)
    });
  });
}





  _myInterests() {
    this.props.navigator.push({
      id:'myInterests',
      passProps: {
        name:'interests'
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
          onLeftButtonPress={this._myInterests}
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