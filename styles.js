'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;

module.exports = StyleSheet.create({
	container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: null,
    height: null,
    backgroundColor: 'rgba(0,0,0,0)',
    resizeMode: 'stretch',
  },
  starticon:{
    width: 40,
    height: 40,
  },
  loginicon:{
    width: 30,
    height: 30,
    marginTop: 25
  },
  lockericon:{
     width: 25,
     height: 25,
     marginTop: 28

  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    color: '#FFFFFF',
    fontFamily: 'Copperplate-Bold',
    margin: 10,
  },
  newaccount:{
    padding:10, 
    height:45, 
    overflow:'hidden', 
    borderRadius:4, 
    backgroundColor: '#6699FF',
    fontSize: 16, 
    color: 'white',
    fontFamily: 'KohinoorTelugu-Medium',

  },
  login:{
    padding:10, 
    height:45,
    width: 170, 
    overflow:'hidden', 
    borderRadius:4, 
    backgroundColor: '#097054',
    fontSize: 16, 
    color: 'white',
    fontFamily: 'KohinoorTelugu-Medium',
    textAlign: 'center'

  },
  instructions: {
    textAlign: 'center',
    color: '#FFFFFF',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#FFF',
    height: 40,
    width: 170,
    marginTop: 15,
    padding: 4,
    fontSize: 18,
    color: '#191919',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 4
    
  },
  viewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#731553',
    paddingLeft: 0,

  },
  profile: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ADD8E6'

  },
  cardcontainer: {
    flex: 1,
    marginTop: 65,


  },
  title: {
    fontSize: 14,
    backgroundColor: 'transparent',
    fontFamily: 'KohinoorTelugu-Medium',

  },
  month:{
    fontSize: 12,
    lineHeight: 12,
    color:'#FA3E3E'

  },
  date:{
    fontSize: 32,
    lineHeight: 38,
  },
  button: {
    marginRight: 10
  },
  card: {
    width: 300
  },
  backgroundImage: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    resizeMode: 'stretch',
   
  },
  profilepic: {
    height: 100,
    borderRadius: 50,
    width: 100,
    margin:90,
    borderWidth: 3,
    borderColor: 'white',

  },
  userInfoContainer: {
    position: 'absolute',
    justifyContent: 'center',
    left: 50,
    width: 300,
  }
});