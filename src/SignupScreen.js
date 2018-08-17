import React from 'react';
import { Button, TextInput, View } from 'react-native';
import firebase from './firebase.js';
import styles from './styles.js';

export default class SignupScreen extends React.Component {
    createAccount() {
        if (!this.isValid()) { return; }
        const createAccount = firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);
        createAccount.then(this.continue).catch(this.showError);
    }

    continue() {
        // console.log('success');
    }

    showError() {
        // console.log(error);
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
                <TextInput
                    style={[styles.content, styles.formInput]}
                    placeholder='Password'
                    onChangeText={(text) => this.setState({ verifyPassword: text })}
                />
                <Button
                    onPress={this.createAccount.bind(this)}
                    title='Sign up'
                    style={styles.content}
                />
            </View>
        );
    }
}