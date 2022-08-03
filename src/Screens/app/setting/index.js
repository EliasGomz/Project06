import React from 'react';
import { View } from 'react-native';
import styles from './styles';

// components
import Background from '../components/appBackgruound';
import SignOut from './components/signOut';
import ChangeLanguage from './components/changeLanguage';

const Setting = () => {
	return (
		<View style={styles.cont}>
			<Background />
			<View style={styles.contHeader}>
				<SignOut />
			</View>
			<View style={styles.contHeader}>
				<ChangeLanguage />
			</View>
		</View>
	);
};
export default Setting;
