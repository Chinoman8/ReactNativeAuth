import React, {Component} from 'react';
import {View, Text} from 'react-native';
import firebase from 'firebase';
// import firebase from '@firebase/app';
// import '@firebase/auth';
import {Header} from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount(){
        firebase.initializeApp({
            apiKey: "AIzaSyBM0rplZ7uPKVnGc9UV5lyXAxu7Q7sOHes",
            authDomain: "udemyauthentication-e6977.firebaseapp.com",
            databaseURL: "https://udemyauthentication-e6977.firebaseio.com",
            projectId: "udemyauthentication-e6977",
            storageBucket: "udemyauthentication-e6977.appspot.com",
            messagingSenderId: "662870096546"
          });
    }
    render() {
        return (
            <View>
                <Header name="Authentication"/>
                <LoginForm/>
            </View>
        );
    }
}

export default App;