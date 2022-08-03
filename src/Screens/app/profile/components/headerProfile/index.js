import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import styles from './styles';

import { firebase } from '@react-native-firebase/auth';
import PikerImage from '../../../../../Components/pikerImage';

const HeaderProfile = () => {
	const [Photo, setPhoto] = useState(firebase.auth().currentUser.photoURL);
	const User = firebase.auth().currentUser;
	console.log(Photo);
	return (
		<View style={styles.contContainer}>
			<View style={styles.login}>
				<BlurView
					blurAmount={20}
					blurType="light"
					blurRadius={6}
					style={styles.blur}
				/>
				<PikerImage onPress={setPhoto} photo={Photo} />
				<Text style={styles.name}>{User.displayName}</Text>
			</View>
		</View>
	);
};
export default HeaderProfile;
