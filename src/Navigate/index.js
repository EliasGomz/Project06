import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

// Navigators
import AppNavigation from './appNavigate';
import AuthNavigation from './authNavigation';
// import AppNavigationTab from './appNavigationTab';

// firebase auth
import auth from '@react-native-firebase/auth';

const AppContainer = () => {
	const [initializing, setInitializing] = useState(true);
	const [user, setUser] = useState();

	function onAuthStateChanged(user) {
		setUser(user);
		if (initializing) setInitializing(false);
	}

	useEffect(() => {
		GoogleSignin.configure({
			webClientId:
				'633599013534-6p6gfucf95rdti6lhmdc4e6pp2655oln.apps.googleusercontent.com',
		});
		const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
		return subscriber;
	}, []);

	if (initializing) return null;

	return (
		<>
			<NavigationContainer>
				{user ? <AppNavigation /> : <AuthNavigation />}
			</NavigationContainer>
		</>
	);
};
export default AppContainer;
