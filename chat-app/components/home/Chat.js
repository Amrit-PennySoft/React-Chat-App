import React from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
  Animated,
  AppRegistry
  }from 'react-native';
  
import {GiftedChat} from 'react-native-gifted-chat';


 
class Chat extends React.Component {
  
  componentWillMount() {
    this.animatedValue = new Animated.Value(0);
  }
  componentDidMount() {
    Animated.timing(this.animatedValue, {
      toValue: 150,
      duration: 1500
      }).start();
  }
 
 render(){
   const interpolateColor = this.animatedValue.interpolate({
     inputRange: [0, 150],
     outputRange: ['rgb(0,0,0)', 'rgb(51, 250, 170)']
   })
   const animatedStyle = {
     backgroundColor: interpolateColor,
     transform: [
       { translateY: this.animatedValue}
       ]
   }
   
  
    return(
      <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyle]}/>
      <Text style={styles.welcomeMessage}>
      Hello {this.props.username}
      </Text>
      </View>
 );
}
}

var styles = StyleSheet.create ({
  welcomeMessage:{
    marginTop: 0,
    marginLeft: 11,
    fontSize: 25,
    color: '',
    fontFamily: '',
  },

    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
  }
  

});

export default Chat;
AppRegistry.registerComponent('animatedbasic', () => animatedbasic);