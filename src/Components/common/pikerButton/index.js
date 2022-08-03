import React, { useState, useRef, useEffect } from 'react';
import styles from './style';
import { Picker } from '@react-native-picker/picker';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';

const PikerButton = ({ customPiker }) => {
	const [selectLanguage, setSelectLanguage] = useState('');
	const { t, i18n } = useTranslation();
	console.log(selectLanguage);

	useEffect(() => {
		i18n.changeLanguage(selectLanguage);
	}, [selectLanguage]);

	const pikerRef = useRef();

	const open = () => {
		pikerRef.current.focus();
	};

	const close = () => {
		pikerRef.current.focus();
	};

	return (
		<View style={[styles.contPiker, customPiker]}>
			<Picker
				style={styles.piker}
				ref={pikerRef}
				selectedValue={selectLanguage}
				dropdownIconColor={'white'}
				dropdownIconRippleColor={'white'}
				onValueChange={(itemValue, itemIndex) => setSelectLanguage(itemValue)}>
				<Picker.Item style={styles.itemsPiker} label="English" value="en" />
				<Picker.Item style={styles.itemsPiker} label="Spanish" value="es" />
			</Picker>
		</View>
	);
};
export default PikerButton;
