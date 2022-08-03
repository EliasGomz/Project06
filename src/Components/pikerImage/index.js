import React from 'react';
import { Alert, Image, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

// pikers
import { selectImage, takeImage } from '../../Utils/piker';
import login from '../../Assets/Images/pleasholderImage/default.png';

const PikerImage = ({ photo, onPress }) => {
	const selectPiker = () => {
		Alert.alert('Upload new picture', 'Would you like to', [
			{
				text: 'Take a photo',
				onPress: () => handleResponse(false),
			},
			{
				text: 'Open gallery',
				onPress: () => handleResponse(true),
			},
		]);
	};

	const handleResponse = async (isGallery = false) => {
		const response = isGallery ? await selectImage() : await takeImage();
		onPress(response.uri);
	};

	return (
		<View style={styles.cont}>
			<TouchableOpacity onPress={selectPiker}>
				<Image
					style={styles.photoProfile}
					resizeMode="contain"
					source={{ uri: photo }}
				/>
			</TouchableOpacity>
		</View>
	);
};

PikerImage.defaultProps = {
	photo: null,
	onPress: () => {},
};

PikerImage.propTypes = {
	photo: PropTypes.string,
	onPress: PropTypes.func,
};
export default PikerImage;
