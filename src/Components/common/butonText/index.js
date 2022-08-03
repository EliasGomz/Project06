import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { appTheme } from '../../../Themes/appTheme';
import { resize } from '../../../Utils/styles';

const ButtonText = ({ width, color, tittle, fontSize, onPress }) => {
	return (
		<TouchableOpacity
			style={[styles.buttonText, { width }]}
			activeOpacity={0.7}
			onPress={onPress}>
			<Text style={[styles.tittle, { color, fontSize: resize(fontSize) }]}>
				{tittle}
			</Text>
		</TouchableOpacity>
	);
};

ButtonText.defaultProps = {
	width: '100%',
	color: appTheme.white,
	fontSize: 16,
	onPress: () => {},
};
export default ButtonText;
