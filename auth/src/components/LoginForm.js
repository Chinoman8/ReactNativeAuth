import React, {Component} from 'react';
import firebase from 'firebase'; // version 4.9.1
// latest version of firebase
// import firebase from '@firebase/app';
// import '@firebase/auth';
import {StyleSheet, Text} from 'react-native';
import {Button, Card, CardSection, Input, Spinner} from './common';

class LoginForm extends Component{
    state = { 
        email: '',
        password: '',
        error: '',
        loading: false,
    }

    onButtonPress(){
        const {email, password} = this.state;

        // This will clear out the error message as soon as you press button
        this.setState({error: '', loading: true});

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => this.onLoginSuccess.bind(this))
            .catch(() => { // The user failed to login
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(() => this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFail.bind(this));
        });
    }

    onLoginFail(){
        this.setState({eorr: 'Authentication Failed', loading: false})
    }

    onLoginSuccess(){
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: ''
        });
    }

    renderButton(){
        if (this.state.loading){
            return <Spinner/>;
        }

        return <Button whenPressed={this.onButtonPress.bind(this)} name="Log in"/>
    }

    render(){
        return(
            <Card>
                <CardSection>
                    <Input
                        placeholder="user@gmail.com"
                        value={this.state.email}
                        onChangeText={email => this.setState({email})}
                        label="Email"
                    />
                </CardSection>

                <CardSection>
                    <Input 
                        secureTextEntry={true}
                        placeholder="password"
                        value={this.state.text}
                        onChangeText={password => this.setState({password})}
                        label="Password"
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red',
    }
});

export default LoginForm;