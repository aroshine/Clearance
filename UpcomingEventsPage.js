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
  ScrollView,
  Text,
  TextInput,
  Image,
  TouchableOpacity
} from 'react-native';

import {
  Card,
  CardTitle,
  CardImage,
  CardContent,
  CardAction
} from 'react-native-card-view';

class UpcomingEventsPage extends Component {

  constructor(props) {
    super(props);

    this.state={
      id:'upcomingEvents',
   
    }
    this._myInterests = this._myInterests.bind(this);
    this._createAccount = this._createAccount.bind(this);
    this._event1 = this._event1.bind(this);
    this._profilePage = this._profilePage.bind(this);

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
          title={'Kommande event'}
          titleColor={'#fff'}
          leftButtonIcon= {require('./img/shopping_bag.png')}
          rightButtonIcon={require('./img/setting.png')}
          style= {styles.navBar}
          onLeftButtonPress={this._myInterests}
          onRightButtonPress={this._profilePage} />
    </View>
    <ScrollView style={{backgroundColor: '#FFCF79'}}>
        <View style={styles.cardcontainer}>
          <Button onPress={this._event1}>
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
              NOV
              </Text> 
              <Text style={styles.date}>
              11
              </Text> 
            </CardContent>
            <View>
              <CardContent>
                <Text style={styles.title}>ACNE ARCHIVE Sample Sale</Text>
                <Text>11-12 November</Text>
                <Text>Birger Jarlsgatan 36</Text>
              </CardContent>
            </View>
            </View> 
            <Button> Interested </Button> 
          </Card>
          </Button>

          <Button onPress={this._createAccount}>
          <Card>
           <CardImage>
              <Image
                style={{width: 350, height: 200, marginTop:10}}
                source={require('./img/3.png')}
              />
            </CardImage>
            <View style={{flex:1 ,flexDirection:'row', marginRight:30,padding: 15}}>
            <CardContent>
              <Text style={styles.month}>
              NOV
              </Text> 
              <Text style={styles.date}>
              11
              </Text> 
            </CardContent>
            <View>
              <CardContent>
                <Text style={styles.title}>Baron Utförsäljning</Text>
                <Text>11-12 November</Text>
                <Text>Birger Jarlsgatan 36</Text>
              </CardContent>
            </View>
            </View>  
          </Card>
          </Button>


          <Button onPress={this._createAccount}>
          <Card>
           <CardImage>
              <Image
                style={{width: 350, height: 200, marginTop:10}}
                source={require('./img/1.png')}
              />
            </CardImage>
            <View style={{flex:1 ,flexDirection:'row', marginRight:30,padding: 15}}>
            <CardContent>
              <Text style={styles.month}>
              NOV
              </Text> 
              <Text style={styles.date}>
              11
              </Text> 
            </CardContent>
            <View>
              <CardContent>
                <Text style={styles.title}>Sandqvist Utförsäljning</Text>
                <Text>11-12 November</Text>
                <Text>Birger Jarlsgatan 36</Text>
              </CardContent>
            </View>
            </View>  
          </Card>
          </Button>

           <Button onPress={this._createAccount}>
          <Card>
           <CardImage>
              <Image
                style={{width: 350, height: 200, marginTop:10}}
                source={require('./img/5.png')}
              />
            </CardImage>
            <View style={{flex:1 ,flexDirection:'row', marginRight:30,padding: 15}}>
            <CardContent>
              <Text style={styles.month}>
              NOV
              </Text> 
              <Text style={styles.date}>
              11
              </Text> 
            </CardContent>
            <View>
              <CardContent>
                <Text style={styles.title}>House of Dagmar Sample Sale</Text>
                <Text>11-12 November </Text>
                <Text>Birger Jarlsgatan 36</Text>
              </CardContent>
            </View>
            </View>  
          </Card>
          </Button>

           <Button onPress={this._createAccount}>
          <Card>
           <CardImage>
              <Image
                style={{width: 350, height: 200, marginTop:10}}
                source={require('./img/4.png')}
              />
            </CardImage>
            <View style={{flex:1 ,flexDirection:'row', marginRight:30,padding: 15}}>
            <CardContent>
              <Text style={styles.month}>
              NOV
              </Text> 
              <Text style={styles.date}>
              11
              </Text> 
            </CardContent>
            <View>
              <CardContent>
                <Text style={styles.title}>Hunkydory Sample Sale</Text>
                <Text>11-12 November</Text>
                <Text>Birger Jarlsgatan 36</Text>
              </CardContent>
            </View>
            </View>  
          </Card>
          </Button>

        </View>
      

    </ScrollView>


    </View>

    );
  }
    
}


module.exports = UpcomingEventsPage;