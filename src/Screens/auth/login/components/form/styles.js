import { StyleSheet } from 'react-native';
import { resize } from '../../../../../Utils/styles';
import { appTheme } from '../../../../../Themes/appTheme';

const styles = StyleSheet.create({
	contContainer: {
		flex: 1,
		width: '100%',
		height: '100%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	login: {
		width: resize(350),
		height: resize(500, 'h'),
		borderColor: appTheme.white,
		borderWidth: 1,
		borderRadius: 10,
		padding: resize(10),
		paddingHorizontal: resize(20),
		alignItems: 'center',
	},
	iconCompany: {
		width: resize(100),
		height: resize(100),
		borderRadius: 50,
		borderWidth: 1,
		borderColor: appTheme.white,
		marginVertical: resize(20),
	},
	contInput: {
		height: '10%',
		marginTop: 10,
	},
	iconInput: {
		marginTop: resize(10),
		color: appTheme.white,
	},
	iconInputR: {
		marginTop: resize(12),
		color: appTheme.white,
	},
	inputSocial: {
		height: '10%',
		width: '100%',
		marginTop: resize(10),
		flexDirection: 'row',
	},
	icon: {
		fontSize: resize(25),
		left: resize(2),
		bottom: resize(6),
		color: appTheme.white,
	},
	tittle: {
		marginLeft: resize(20),
	},
	buttonLogin: {
		marginTop: resize(15),
	},
	buttonRedes: {
		marginLeft: resize(20),
	},
	inputSignUp: {
		flexDirection: 'row',
		marginTop: resize(23),
	},
	signUp: {
		marginTop: resize(5),
		fontSize: resize(16),
		fontWeight: '500',
		color: appTheme.white,
	},
});
export default styles;
