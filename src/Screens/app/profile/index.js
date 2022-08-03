import React from 'react';
import { View } from 'react-native';
import styles from './styles';

// components
import Background from '../components/appBackgruound';
import HeaderProfile from './components/headerProfile';
import EditProfile from './components/EditProfile';

const Profile = () => {
	return (
		<View style={styles.cont}>
			<Background />
			<View style={styles.contHeader}>
				<HeaderProfile />
			</View>
			<View style={styles.contEdit}>
				<EditProfile />
			</View>
		</View>
	);
};
export default Profile;
