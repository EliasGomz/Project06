import React from 'react';
import { Text, View } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import styles from './styles';

import Auth from '../../../../../Api/firebase/services';
import PikerButton from '../../../../../Components/common/pikerButton';
import { useTranslation } from 'react-i18next';

const ChangeLanguage = () => {
	const { t, i18n } = useTranslation();
	return (
		<View style={styles.contContainer}>
			<View style={styles.login}>
				<BlurView
					blurAmount={20}
					blurType="light"
					blurRadius={6}
					style={styles.blur}
				/>
				<Text style={styles.selectText}>{t('SelectLanguage')}</Text>
				<PikerButton />
			</View>
		</View>
	);
};
export default ChangeLanguage;
