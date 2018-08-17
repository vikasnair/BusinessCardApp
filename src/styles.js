import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'black'
    },

    content: {
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        color: 'white'
    },

    hero: {
        fontSize: 28,
        // flex: 2
    },

    continue: {
        // flex: 1
    },

    formInput: {
        height: 50,
        width: '90%',
        backgroundColor: 'white',
        color: 'black'
    }
});

export default styles;