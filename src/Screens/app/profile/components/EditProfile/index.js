import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import styles from './styles';

import { firebase } from '@react-native-firebase/auth';
import Button from '../../../../../Components/common/button';
import Input from '../../../../../Components/common/input/index';

const EditProfile = () => {
	const [Photo, setPhoto] = useState(firebase.auth().currentUser.photoURL);
	const [changePass, setChangePass] = useState({});
	const [changeEmail, setChangeEmail] = useState({});
	const User = firebase.auth().currentUser;
	console.log(Photo);
	return (
		<View style={styles.contContainer}>
			<View style={styles.login}>
				<View style={styles.contHeader}>
					<Text style={styles.name}>First Name</Text>
					<Button
						width={'10%'}
						icon={'edit'}
						customButton={styles.buttonEdit}
					/>
				</View>
				<View style={styles.contHeader}>
					<Text style={styles.name}>Last Name</Text>
					<Button
						width={'10%'}
						icon={'edit'}
						customButton={styles.buttonEdit}
					/>
				</View>
				<View style={styles.contHeader}>
					<Input
						placeholder={User.email}
						secureTextEntry={false}
						autoCorrect={false}
						placeholderTextColor={'black'}
						customInput={styles.passInput}
						onChangeText={text => setChangeEmail(text)}
					/>
					<Button
						width={'10%'}
						icon={'edit'}
						customButton={styles.buttonEdit}
						onPress={() => User.updateEmail(changeEmail)}
					/>
				</View>
				<View style={styles.contHeader}>
					<Input
						placeholder={'change password'}
						secureTextEntry={true}
						autoCorrect={false}
						placeholderTextColor={'black'}
						customInput={styles.passInput}
						onChangeText={text => setChangePass(text)}
					/>
					<Button
						width={'10%'}
						icon={'edit'}
						customButton={styles.buttonEdit}
						onPress={() => User.updatePassword(changePass)}
					/>
				</View>
			</View>
		</View>
	);
};
export default EditProfile;
