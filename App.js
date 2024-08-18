import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './components/WelcomeScreen';
const Stack = createNativeStackNavigator();
export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen component={WelcomeScreen} name="WelcomeScreen" options={{ title: 'Welcome to Traveller App' }} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
