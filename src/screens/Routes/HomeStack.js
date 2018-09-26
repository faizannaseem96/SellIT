import Home from '../Home';
import React, { Component } from 'react';
import { View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { DrawerActions } from 'react-navigation';
import ArticleDetail from '../Home/ArticleDetail';

export default HomeStack = createStackNavigator({
    Home: {
            screen: Home,
            navigationOptions: ({navigation}) => ({
            navigation,
            title: 'Home',
            headerStyle: {
                backgroundColor: '#00ADA9',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold',
            },
            headerLeft: (
                <View style={{marginLeft: 10}}>
                  <Icon
                    name="menu"
                    size={25}
                    color="white"
                    onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                  />
                </View>
            ),
        }),
    },
    ArticleDetail: {
            screen: ArticleDetail,
            navigationOptions: ({navigation}) => ({
            navigation,
            title: 'Home',
            headerStyle: {
                backgroundColor: '#00ADA9',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold',
            },
        }),
    },
});