import { createStackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';

const App = createStackNavigator({
    Home: { screen: HomeScreen },
    Login: { screen: LoginScreen },
    Signup: { screen: SignupScreen }
});

export default App;