import React, { Component } from 'react';
import { View, Text, Animated, Easing, Image } from 'react-native';
import backImage from '../../assets/images/loginPanel.jpg'
import InputForm from './InputForm';

export default class LoginForm extends Component {

    state = {
        animFinished: false,
        backImage : new Animated.Value(0),
        inputForm : new Animated.Value(0),
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.show && !this.state.animFinished ) {
            Animated.parallel([
                Animated.timing(this.state.backImage, {
                    toValue: 1,
                    duration: 1000
                }),
                Animated.timing(this.state.inputForm, {
                    toValue: 1,
                    duration: 1000
                }),
            ]).start(() => {
                this.setState({ animFinished: true })
            })
        }
    }

  render() {
    return (
      <View>
        <Animated.View style={{opacity: this.state.backImage}} >
            <Image 
                style= {styles.imageStyle}
                source={backImage}
                resizeMode={'contain'}
            />
        </Animated.View>
        <Animated.View 
            style={{
                opacity: this.state.inputForm, 
                top: this.state.inputForm.interpolate({
                    inputRange:[0,1],
                    outputRange: [100,30]
                })    
            }}>
            <InputForm navigation={this.props.navigation} />
        </Animated.View>
      </View>
    );
  }
}

const styles = {
    imageStyle: {
        width: 270,
        height: 150,
        marginTop: -30,
    }
}