import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

export default Input = (props) => {
    let template = null;
    switch(props.type) {
        case "text":
            template = 
            <TextInput 
                underlineColorAndroid="transparent"
                {...props}
                style={[styles.input, props.overrideStyle]}
            />
        break;
        default:
            return template
    }
    return template 
}

const styles = {
    input: {
        width: "100%",
        borderBottomWidth: 2,
        borderBottomColor: "#eaeaea",
        padding: 5,
        marginTop: 10,
        fontFamily: 'RobotoCondensed-Regular',
        color: '#555'
    }
}