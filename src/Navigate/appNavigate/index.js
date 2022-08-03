import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppNavigationTab from '../appNavigationTab';

// SCREENS STACK
// import Home from '../../Screens/app/home';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
	return (
		<Stack.Navigator initialRouteName="Home">
			<Stack.Screen
				name="appNavTab"
				component={AppNavigationTab}
				options={{
					headerShown: false,
				}}
			/>
		</Stack.Navigator>
	);
};

export default AppNavigation;
