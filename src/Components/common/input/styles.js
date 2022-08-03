import { StyleSheet } from 'react-native';
import { resize } from '../../../Utils/styles';

// theme
import { appTheme } from '../../../Themes/appTheme';

const styles = StyleSheet.create({
	cont: {
		width: '100%',
		height: '100%',
	},
	input: {
		padding: resize(15),
		borderRadius: 18,
		width: '100%',
		height: '100%',
		paddingLeft: resize(40),
		backgroundColor: appTheme.lightGrayOpacity,
		borderWidth: 1,
		borderColor: appTheme.white,
	},
	iconL: {
		fontSize: 20,
		position: 'absolute',
		marginTop: resize(10),
		marginLeft: resize(10),
	},

	iconR: {
		fontSize: 20,
		position: 'absolute',
		marginTop: resize(10),
		right: resize(10),
	},
});
export default styles;
