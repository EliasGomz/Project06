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
		width: resize(370),
		height: resize(300, 'h'),
		borderColor: appTheme.white,
		borderWidth: 1,
		borderRadius: 10,
		padding: resize(10),
		paddingHorizontal: resize(20),
		alignItems: 'center',
	},
	blur: {
		position: 'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
	},
	photoProfile: {
		width: resize(180),
		height: resize(180),
		borderRadius: 100,
		borderWidth: 2,
		borderColor: appTheme.white,
		marginTop: resize(20),
		marginHorizontal: resize(10),
	},
	name: {
		bottom: resize(20),
		fontSize: resize(25),
		fontWeight: '500',
	},
});
export default styles;
