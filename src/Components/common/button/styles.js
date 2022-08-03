import { StyleSheet } from 'react-native';
import { resize } from '../../../Utils/styles';
import { appTheme } from '../../../Themes/appTheme';

const styles = StyleSheet.create({
	button: {
		marginTop: resize(0),
		height: resize(40),
		alignItems: 'center',
		borderWidth: 1,
		borderRadius: 10,
		borderColor: appTheme.white,
	},
	tittle: {
		fontWeight: '500',
		marginTop: resize(8),
	},
	icon: {
		fontSize: resize(10),
		position: 'absolute',
		marginTop: resize(10),
		marginLeft: resize(10),
	},
});
export default styles;
