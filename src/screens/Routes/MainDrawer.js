import React from 'react'
import {
    createDrawerNavigator,
  } from 'react-navigation';
import SideBar from '../SideBar';
import MainTab from './MainTab';
import DummyScreen from '../DummyScreen';

  const DrawerContent = ({props}) => {
    const navigation = props.navigation;
    return (
      <SideBar
        navigation={navigation}
        //drawerProps={{...props}}
      />
    );
  };

  const MainDrawer = createDrawerNavigator(
    {
      MainTab: { screen : MainTab },
      DummyScreen: { screen: DummyScreen}
    },
    {
      drawerWidth: 300,
      drawerPosition: 'left',
      drawerOpenRoute: 'DrawerOpen',
      drawerCloseRoute: 'DrawerClose',
      drawerToggleRoute: 'DrawerToggle',
      contentComponent: props => DrawerContent({props})
    },
  );

  export default MainDrawer;