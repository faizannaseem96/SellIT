import { createStackNavigator } from 'react-navigation'; 
import Login from '../Login';
import MainDrawer from './MainDrawer';

export default createStackNavigator({
    Login: { 
      screen : Login,
      navigationOptions: ({ navigation }) => ({
        header: null,
      }),
    },
    MainDrawer: {
      screen: MainDrawer,
      navigationOptions: ({navigation}) => ({
        navigation,
        header: null,
      }),
    },
});