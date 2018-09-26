import HomeStack from './HomeStack';
import AddPost from '../Admin/AddPost';
import { Image } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';

const TabIcon = ({focused, normalSrc, activeSrc, width, height}) => {
    let iconSrc = normalSrc;
    if (focused) {
      iconSrc = activeSrc;
    }
    return (
      <Image
        source={iconSrc}
        style={{width, height}}
      />
    );
};

export default MainTab = createBottomTabNavigator({
    Home: {
        screen: HomeStack,
        //path: '/home',
        navigationOptions: {
          tabBarIcon: ({focused}) => TabIcon({
            focused,
            activeSrc: require('../../../img/icons/ic_home_active.png'),
            normalSrc: require('../../../img/icons/ic_home.png'),
            width: 22,
            height: 19.25,
          })
        },
    },
    AddPost: {
        screen: AddPost,
        navigationOptions: {
            tabBarIcon: ({focused}) => TabIcon({
              focused,
              activeSrc: require('../../../img/icons/ic_category_active.png'),
              normalSrc: require('../../../img/icons/ic_category.png'),
              width: 22,
              height: 19.25,
            })
        },
    }
    },{
    tabBarOptions: {
        activeTintColor: "black",     
        labelStyle: {
            fontSize: 10,
        },
        style: {
            backgroundColor: 'white',
        },
    }
})
