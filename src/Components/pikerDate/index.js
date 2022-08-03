import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-date-picker';
import styles from './styles';
import Button from '../common/button';

const DatePiker = ({ onConfirm, onCancel, onPress, customDateP, openD }) => {
	const [date, setDate] = useState(new Date());
	const [open, setOpen] = useState(false);

	console.log(date);

	return (
		<>
			<Button onPress={onPress} style={[styles.dateP, customDateP]} />
			<DatePicker
				modal
				open={open}
				date={date}
				onConfirm={onConfirm}
				onCancel={onCancel}
			/>
		</>
	);
};
export default DatePiker;

DatePicker.defaultProps = {
	onPress: () => {},
	onCancel: () => {},
	onConfirm: () => {},
};
