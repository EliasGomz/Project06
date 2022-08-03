import React, { useState, useEffect } from 'react';
import { Text, Image, View, ScrollView } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import styles from './styles';

const BlurContainer = () => {
	return (
		<ScrollView contentContainerStyle={styles.contContainer}>
			<BlurView blurAmount={90} />
		</ScrollView>
	);
};
export default BlurContainer;
