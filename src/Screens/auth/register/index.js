import React from 'react';
import { View } from 'react-native';
import styles from './styles';

// screens
import Form from './components/form';
import Background from '../components/backgroundAuths';

const Register = () => {
	return (
		<View style={styles.container}>
			<Background />
			<Form />
		</View>
	);
};
export default Register;
