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
		height: '95%',
		borderColor: appTheme.white,
		borderWidth: 1,
		borderRadius: 10,
		padding: resize(10),
		paddingHorizontal: resize(20),
		alignItems: 'center',
	},
	SignUp: {
		fontWeight: '500',
		fontSize: resize(25),
		paddingVertical: resize(15),
		color: appTheme.white,
	},
	contInput: {
		height: '7%',
		marginTop: resize(10),
	},
	date: {
		height: '7%',
		width: '100%',
		marginTop: resize(10),
		// backgroundColor: 'red',
	},
	dateButton: {
		position: 'absolute',
		right: resize(10),
		justifyContent: 'center',
		marginTop: resize(7),
	},
	dateIcon: {
		position: 'absolute',
		fontSize: 30,
	},
	contInputD: {
		height: '100%',
		width: '82%',
		alignSelf: 'flex-start',
		justifyContent: 'center',
	},
	inputContD: {
		// alignSelf: 'center',
		color: 'black',
		fontSize: resize(20),
		paddingLeft: resize(76),
	},
	buttonLogin: {
		marginVertical: resize(10),
	},
	inputSignIn: {
		flexDirection: 'row',
		marginVertical: resize(10),
	},
	signIn: {
		marginTop: resize(5),
		fontSize: resize(16),
		fontWeight: '500',
		color: appTheme.white,
	},
	cont: {
		alignSelf: 'center',
		marginVertical: resize(5, 'h'),
		width: resize(300),
		height: resize(150),
		justifyContent: 'center',
		flexDirection: 'row',
	},
	takePhoto: {
		marginTop: resize(50),
		marginLeft: resize(0),
		borderTopRightRadius: resize(0),
		borderBottomRightRadius: resize(0),
		borderEndWidth: resize(0),
	},
	selectPhoto: {
		marginTop: resize(50),
		marginLeft: resize(0),
		borderTopLeftRadius: resize(0),
		borderBottomLeftRadius: resize(0),
		borderStartWidth: resize(0),
	},
	photoProfile: {
		width: resize(100),
		height: resize(100),
		borderRadius: 50,
		borderWidth: 2,
		borderColor: appTheme.white,
		marginTop: resize(20),
		marginHorizontal: resize(10),
	},
});
export default styles;
