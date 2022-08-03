import React from 'react';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';

export const selectImage = async () => {
	return new Promise(resolve => {
		launchImageLibrary(
			{
				mediaType: 'photo',
				includeBase64: false,
				maxHeight: 200,
				maxWidth: 200,
			},
			response => {
				resolve(response);
			},
		);
	});
};

export const takeImage = async () => {
	return new Promise(resolve => {
		launchCamera({ mediaType: 'photo' }, response => {
			resolve(response);
		});
	});
};
