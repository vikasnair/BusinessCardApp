import { createStackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import { SignupScreen, LoginScreen } from './AuthScreen';

const App = createStackNavigator({
    Home: { screen: HomeScreen },
    Login: { screen: LoginScreen },
    Signup: { screen: SignupScreen }
});

export default App;