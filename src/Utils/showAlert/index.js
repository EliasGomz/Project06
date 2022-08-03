import { ToastAndroid } from 'react-native';

export const showMessage = ({ message }) => {
	ToastAndroid.showWithGravityAndOffset(
		`${message}`,
		ToastAndroid.LONG,
		ToastAndroid.BOTTOM,
		25,
		50,
	);
};
