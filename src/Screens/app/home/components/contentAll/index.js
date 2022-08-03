import React from 'react';
import { Text, View } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import styles from './styles';
import { useTranslation } from 'react-i18next';

const AllContainer = () => {
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
				<Text style={styles.name}>{t('Container')}</Text>
			</View>
		</View>
	);
};
export default AllContainer;
