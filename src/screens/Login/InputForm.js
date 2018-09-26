import React, { Component } from 'react';
import { View, Text, Alert, TouchableOpacity } from 'react-native';
import Input from './Input';
import ValidationRules from './validations/validationRules';
import { connect } from 'react-redux';
import { signUpUser, signInUser } from '../../components/Store/actions/user_action';
import _ from 'lodash';

class InputForm extends Component {

    state = {
        hasErrors: false,
        type: 'Login',
        action: 'Login',
        actionMode: 'Not a user, Register?',
        form: {
            email: {
                value: "",
                valid: false,
                type: "text",
                rule: {
                    isRequired: true,
                    isEmail : true
                }
            },
            password: {
                value: "",
                valid: false,
                type: "text",
                rule: {
                    isRequired: true,
                    minLength : 6
                }
            },
            confirmPassword: {
                value: "",
                valid: false,
                type: "text",
                rule: {
                    confirmPass: "password"
                }
            }
        }
    }

    updateInput = (name,value) => {
        this.setState({
            hasErrors: false,
        })
        let formCopy = this.state.form;
        formCopy[name].value = value;
        
        let rules = formCopy[name].rule
        let valid = ValidationRules(value, rules, formCopy);
        formCopy[name].valid = valid

        this.setState({
            form: formCopy
        })
    }

    changeFormType = () => {
        const type = this.state.type;
        this.setState({
            type: type === 'Login' ? 'Register' : 'Login',
            action: type === 'Login' ? 'Register' : 'Login',
            actionMode : type === 'Login' ? 'Not registered, Login?' : 'Not a user, Register?',
        })
    }

    confirmPassword = () => {
        if (this.state.type != 'Login') {
            return (
                <Input 
                    placeholder="Confirm Your Password"
                    type={this.state.form.confirmPassword.type} 
                    value={this.state.form.confirmPassword.value}
                    onChangeText={ value => this.updateInput("confirmPassword",value)}
                    secureTextEntry 
                />
            );
        } else {
            return null
        }
    }

    logInUser = () => {
        let isFormvalid = true;
        let formToSubmit = {};
        const formCopy = this.state.form;
        
        for (let key in formCopy) {
            if (this.state.type === 'Login') {
                if(key !== 'confirmPassword') {
                    isFormvalid  = isFormvalid && formCopy[key].valid
                    formToSubmit[key] = formCopy[key].value
                }
            } else {
                isFormvalid  = isFormvalid && formCopy[key].valid
                formToSubmit[key] = formCopy[key].value
            }
        }

        if (isFormvalid) {
            if(this.state.type === 'Login') {
                this.props.signInUser(formToSubmit)
            } else{
                this.props.signUpUser(formToSubmit)
            }
        } else {
            this.setState({
                hasErrors: true,
            })
        }
    }

    formHasErrors = () => {
        if (this.state.hasErrors) {
            return (
                <Text style={styles.errorTextStyle}>
                    Oops, Check your info
                </Text>
            );
        }
    }

    componentWillReceiveProps(nextProps) {
        if(!_.isEmpty(nextProps.user)) {
            console.log(nextProps.user);
            this.props.navigation.replace('MainDrawer');
        } 
    }


  render() {
    return (
        <View>
            <Input placeholder="Enter your email"
                type={this.state.form.email.type} 
                value={this.state.form.email.value}
                onChangeText={ value => this.updateInput("email",value)}
                autoCapitalize = {"none"}
                keyboardType={"email-address"}
            />
            <Input placeholder="Enter your password"
                type={this.state.form.password.type} 
                value={this.state.form.password.value}
                onChangeText={ value => this.updateInput("password",value)}
                secureTextEntry
            />

            {this.confirmPassword()}
            {this.formHasErrors()}

            <TouchableOpacity style={styles.loginButtonStyle} onPress={this.logInUser} >
                <Text style={styles.loginButtonTextStyle}>
                    {this.state.action}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle} onPress={this.changeFormType}>
                <Text style={styles.textStyle}>
                    {this.state.actionMode}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle} onPress={() => this.props.navigation.replace('MainDrawer') }>
                <Text style={styles.textStyle}>
                    skip the login
                </Text>
            </TouchableOpacity>
        </View>
    );
  }
}

function mapStateToProps({ user }) {
    return { user: user };
}

export default connect(mapStateToProps, {signUpUser, signInUser })(InputForm);

const styles = {
    loginButtonStyle: {
        alignSelf: 'center',
        marginTop: 15,
        marginBottom: 15,
        backgroundColor: "#00ADA9",
        width: "100%",
        height: 40,
        borderRadius: 5,
        justifyContent: 'center',
    },
    loginButtonTextStyle: {
        textAlign: 'center',
        fontFamily: 'RobotoCondensed-Regular',
        color: 'white',
        fontSize: 17
    },
    buttonStyle: {
        alignSelf: 'center',
        marginTop: 5,
        marginBottom: 5,
        height: 30,
    }, 
    textStyle : {
        textAlign: 'center',
        fontFamily: 'RobotoCondensed-Regular',
        color: '#555',
        fontSize: 16
    },
    errorTextStyle : {
        fontFamily: 'RobotoCondensed-Regular',
        marginTop: 15,
        color: 'red',
        marginBottom: 0,
    }
}