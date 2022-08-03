import { StyleSheet } from 'react-native';
import { resize } from '../../Utils/styles';
import { appTheme } from '../../Themes/appTheme';

const styles = StyleSheet.create({
	cont: {
		flex: 1,
	},
	photoProfile: {
		width: resize(170),
		height: resize(170),
		borderRadius: 100,
		borderWidth: 1,
		borderColor: appTheme.white,
		marginVertical: resize(30),
	},
});
export default styles;
