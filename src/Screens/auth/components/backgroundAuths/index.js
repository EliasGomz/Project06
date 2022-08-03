import React from 'react';
import { Image } from 'react-native';
import styles from './styles';

// background
import background from '../../../../Assets/Images/authBackground/background.jpg';

const Background = () => {
	return (
		<Image style={styles.Background} source={background} resizeMode="cover" />
	);
};
export default Background;
