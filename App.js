import React, { Component } from 'react';
import Navigator from './src/screens/Routes';
import { Provider } from 'react-redux'; 
import store from './src/components/Store'
import firebase from 'firebase';

export default class App extends Component {

  componentDidMount() {
    var config = {
      apiKey: "AIzaSyA_Jke369X2NkECBpZmetMXMAO5Kwg5Z6g",
      authDomain: "myreactpro.firebaseapp.com",
      databaseURL: "https://myreactpro.firebaseio.com",
      projectId: "myreactpro",
      storageBucket: "myreactpro.appspot.com",
      messagingSenderId: "381237100331"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={store}>
          <Navigator />
      </Provider>
    );
  }
}
