import React from 'react';
import { Text, View, Button } from 'react-native';
import styles from './util/styles.js';

export default class HomeScreen extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
      
        return (
            <View style={styles.container}>
                <Text style={[styles.content, styles.hero]}>Welcome to _.</Text>
                <View style={styles.continue}>
                    <Button
                        onPress={() => navigate('Signup')}
                        title='Create an account'
                        style={styles.content}
                    />
                    <Button
                        onPress={() => navigate('Login')}
                        title='Login'
                        style={styles.content}
                    />
                </View>
            </View>
        );
    }
}