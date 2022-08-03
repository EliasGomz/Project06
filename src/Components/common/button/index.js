import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

// component
import { appTheme } from '../../../Themes/appTheme';
import { resize } from '../../../Utils/styles';

// libs
import AntDesign from 'react-native-vector-icons/AntDesign';

const Button = ({
	width,
	color,
	tittle,
	backgroundColor,
	fontSize,
	onPress,
	icon,
	customIcon,
	customTittle,
	customButton,
}) => {
	return (
		<TouchableOpacity
			style={[styles.button, { width, backgroundColor }, customButton]}
			activeOpacity={0.6}
			onPress={onPress}>
			<AntDesign name={icon} style={[styles.icon, customIcon]} />
			<Text
				style={[
					styles.tittle,
					{ color, fontSize: resize(fontSize) },
					customTittle,
				]}>
				{tittle}
			</Text>
		</TouchableOpacity>
	);
};

Button.defaultProps = {
	width: '100%',
	backgroundColor: appTheme.principalOpacity,
	color: appTheme.white,
	iconL: '',
	fontSize: 16,
	onPress: () => {},
};

export default Button;
