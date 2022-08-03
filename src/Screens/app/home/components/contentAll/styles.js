import { StyleSheet } from 'react-native';
import { resize } from '../../../../../Utils/styles';
import { appTheme } from '../../../../../Themes/appTheme';

const styles = StyleSheet.create({
	contContainer: {
		width: '100%',
		height: '100%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	login: {
		width: resize(370),
		height: '100%',
		borderColor: appTheme.white,
		borderWidth: 1,
		borderRadius: 10,
		position: 'absolute',
		alignItems: 'center',
		justifyContent: 'center',
	},
	blur: {
		position: 'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
	},
	name: {
		fontSize: resize(25),
		fontWeight: '500',
	},
});
export default styles;
