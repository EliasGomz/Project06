import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// SCREENS STACK
import Login from '../../Screens/auth/login';
import Register from '../../Screens/auth/register';
import ForgotPass from '../../Screens/auth/forgotPass';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
	return (
		<Stack.Navigator initialRouteName="Login">
			<Stack.Screen
				name="Login"
				component={Login}
				options={{
					headerShown: false,
					animation: 'none',
				}}
			/>
			<Stack.Screen
				name="Register"
				component={Register}
				options={{
					headerShown: false,
					presentation: 'modal',
					animation: 'none',
				}}
			/>
			<Stack.Screen
				name="ForgotPass"
				component={ForgotPass}
				options={{
					headerShown: false,
					presentation: 'modal',
					animation: 'none',
				}}
			/>
		</Stack.Navigator>
	);
};

export default AuthNavigation;
