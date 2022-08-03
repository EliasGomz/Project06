import React from 'react';
import { View, TextInput } from 'react-native';
import styles from './styles';

// libs
import AntDesign from 'react-native-vector-icons/AntDesign';
import PropTypes from 'prop-types';

const Input = ({
	placeholder,
	placeholderTextColor,
	autoCorrect,
	onChangeText,
	secureTextEntry,
	iconL,
	iconR,
	customInput,
	customiconL,
	customiconR,
	customCont,
	keyboardType,
	defaultValue,
	editable,
}) => {
	return (
		<View style={[styles.cont, customCont]}>
			<TextInput
				style={[styles.input, customInput]}
				placeholder={placeholder}
				placeholderTextColor={placeholderTextColor}
				secureTextEntry={secureTextEntry}
				autoCorrect={autoCorrect}
				onChangeText={onChangeText}
				keyboardType={keyboardType}
				defaultValue={defaultValue}
				editable={editable}
			/>
			<AntDesign name={iconL} style={[styles.iconL, customiconL]} />
			<AntDesign name={iconR} style={[styles.iconR, customiconR]} />
		</View>
	);
};

Input.defaultProps = {
	defaultValue: '',
	placeholder: '',
	autoCorrect: false,
	secureTextEntry: false,
	iconL: '',
	iconR: '',
};

Input.prototype = {
	placeholder: PropTypes.string,
	autoCorrect: PropTypes.bool,
	secureTextEntry: PropTypes.bool,
	onChangeText: PropTypes.func.isRequired,
	iconL: PropTypes.string,
	iconR: PropTypes.string,
};
export default Input;
