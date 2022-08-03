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
		height: resize(400, 'h'),
		borderColor: appTheme.white,
		borderWidth: 1,
		borderRadius: 10,
		padding: resize(10),
		paddingHorizontal: resize(20),
		alignItems: 'center',
		backgroundColor: appTheme.lightGrayOpacity,
	},
	blur: {
		position: 'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
	},
	name: {
		fontSize: resize(20),
		fontWeight: '500',
		marginVertical: resize(20),
		color: 'black',
	},
	contHeader: {
		width: '100%',
		height: '20%',
		// backgroundColor: 'red',
	},
	buttonEdit: {
		position: 'absolute',
		right: resize(10),
		justifyContent: 'center',
		marginTop: resize(15),
	},
	passInput: {
		width: '80%',
		height: '80%',
		marginTop: resize(5),
	},
});
export default styles;
