import React from 'react';
import { Text, View } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import styles from './styles';
import { useTranslation } from 'react-i18next';

const Categories = () => {
	const { t, i18n } = useTranslation();
	return (
		<View style={styles.contContainer}>
			<View style={styles.login}>
				<BlurView
					blurAmount={20}
					blurRadius={6}
					blurType="light"
					style={styles.blur}
				/>
				<Text style={styles.name}>{t('Categories')}</Text>
			</View>
		</View>
	);
};
export default Categories;
