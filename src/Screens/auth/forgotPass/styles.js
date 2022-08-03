import { StyleSheet } from 'react-native';
import { resize } from '../../../Utils/styles';
import { appTheme } from '../../../Themes/appTheme';

const styles = StyleSheet.create({
	contContainer: {
		flex: 1,
		width: '100%',
		height: '100%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	login: {
		width: resize(320),
		height: resize(230, 'h'),
		borderColor: appTheme.white,
		borderWidth: 2,
		borderRadius: 10,
		padding: resize(10),
		paddingHorizontal: resize(20),
		alignItems: 'center',
	},
	Forget: {
		fontWeight: '500',
		fontSize: resize(25),
		paddingVertical: resize(10),
		color: appTheme.white,
	},
	contInput: {
		height: '23%',
		marginTop: 10,
	},
	buttonSend: {
		marginTop: resize(15),
	},
	inputSignIn: {
		flexDirection: 'row',
		marginTop: resize(15),
	},
	signIn: {
		marginTop: resize(5),
		fontSize: resize(16),
		fontWeight: '500',
		color: appTheme.white,
	},
});
export default styles;
