import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class SideBar extends Component {

  render() {
    return (
      <ScrollView>
        <View style={styles.menuContainer}>
          <View style={styles.menuItems}>
            <Icon.Button 
                name='envelope-o' 
                color='#00ADA9' 
                backgroundColor='#ffffff' 
                onPress={() => this.props.navigation.navigate('DummyScreen') } >
                    <Text style={{ fontSize: 18 }} > Home </Text>
              </Icon.Button>
          </View>
          <View style={styles.menuItems}>
            <Icon.Button 
                name='envelope-o' 
                color='#00ADA9' 
                backgroundColor='#ffffff' 
                onPress={() => this.props.navigation.navigate('MainTab') }>
                    <Text style={{ fontSize: 18 }} > Home </Text>
              </Icon.Button>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  menuContainer: {
    marginTop: 15,
    marginLeft: 10,
  },
  menuItems: {
    flex: 1, 
    flexDirection: 'row',
    marginTop: 5,
    marginLeft: 10,
  }
}