import React from 'react';
import { Text, View } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import styles from './styles';

import Auth from '../../../../../Api/firebase/services';
import Button from '../../../../../Components/common/button';
import { useTranslation } from 'react-i18next';

const SignOut = () => {
	const { t, i18n } = useTranslation();
	return (
		<View style={styles.contContainer}>
			<View style={styles.login}>
				<Button
					tittle={t('SignOut')}
					width={'50%'}
					color={'black'}
					customButton={styles.button}
					customTittle={styles.name}
					onPress={() => Auth.SignOut()}
				/>
			</View>
		</View>
	);
};
export default SignOut;
