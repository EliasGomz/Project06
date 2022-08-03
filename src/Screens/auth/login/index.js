import React from 'react';
import { View } from 'react-native';
import styles from './styles';

// screens
import Background from '../components/backgroundAuths';
import Form from './components/form';

const Login = () => {
	return (
		<View style={styles.container}>
			<Background />
			<Form />
		</View>
	);
};
export default Login;
