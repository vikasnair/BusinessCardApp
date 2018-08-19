import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import firebase from './util/firebase.js';
import styles from './util/styles.js';

class Auth extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            errorMessage : ''
        };
    }

    createAccount() {
        if (!this.isValid()) { return; }
        const createAccount = firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);
        createAccount.then(this.continue).catch(this.showError);
    }

    login() {
        const login = firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password);
        login.then(this.continue).catch(this.showError);
    }

    continue() {
        // console.log('success');
    }

    showError(error) {
        // console.log(error);
        this.setState({ errorMessage : error.message });
    }

    isValid() {
        return this.state.password === this.state.verifyPassword;
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={[styles.content, styles.formInput]}
                    placeholder='Email'
                    onChangeText={(text) => this.setState({ email: text })}
                />
                <TextInput
                    style={[styles.content, styles.formInput]}
                    placeholder='Password'
                    onChangeText={(text) => this.setState({ password: text })}
                />
                {this.props.isSignup ? <TextInput
                    style={[styles.content, styles.formInput]}
                    placeholder='Verify password'
                    onChangeText={(text) => this.setState({ verifyPassword: text })}
                /> : null}
                <Button
                    onPress={this.props.isSignup ? this.createAccount.bind(this) : this.login.bind(this)}
                    title={this.props.isSignup ? 'Create account' : 'Login'}
                    style={styles.content}
                />
                <Text style={[styles.content, styles.error]}>
                    {this.state.errorMessage}
                </Text>
            </View>
        );
    }
}

export class LoginScreen extends React.Component {
    render() {
        return (
            <Auth isSignup={false} />
        );
    }
}

export class SignupScreen extends React.Component {
    render() {
        return (
            <Auth isSignup={true} />
        );
    }
}