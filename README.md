# React-Chat-App
A Chat-App made with React Native (work in progress)

You can have a look at the App so far on - https://snack.expo.io/@amrit623/chat-app

1. Home - I imported the following from react-native
- View
- Text
- StyleSheet
- TextInput
- TouchableOpacity

I also imported Actions from react native router-flux - which navigates from the home page to the Chat page using the root key 'chat' in App.js and passes is it the name entered on home.
I set a state called 'username' to store the name, React has a feature where it takes input when you type a character and makes it accessible and to do that you need to set a state. So the text input will update the name and to do that i used onChangeText and passed a function that changes the state from name to a 'text' value.


2. Chat - I imported the following from react-native
- View
- Text
- StyleSheet
- Animated
- App Registry

'{this.props.username}' - This is where the chat page receives the name. 
I used the interpolate function from an Animated.Value to transition the background color of an Animated.View as well as simultaneously translate the position with the same Animated.Value for the animated Box.

Things i still need to do -

Implement the Gifted Chat UI for react native - https://github.com/FaridSafi/react-native-gifted-chat

Add backend using Firebase for the messages.
