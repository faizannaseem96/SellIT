import React, { Component } from 'react';
import { View, ScrollView, Alert } from 'react-native';
import Logo from './Logo';
import LoginForm from './LoginForm';

export default class Login extends Component {

  showLogin = () => {
      this.setState({ logoAnimation: true })
  }

  state = {
    logoAnimation: false,
  }
  
  render() {
    return (
      <ScrollView style={{flex:1, backgroundColor: 'white',}}>
          <View style={styles.container}>
            <Logo showLogin={this.showLogin}/>
            <LoginForm show={this.state.logoAnimation} navigation={this.props.navigation} />
          </View>
      </ScrollView>
    );
  }
}


const styles = {
  container : {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  }
}