import React from 'react';
import { View } from 'react-native';
import styles from './styles';

// components
import Background from '../components/appBackgruound';
import HeaderHome from './components/header';
import Categories from './components/categories';
import AllContainer from './components/contentAll';

const Home = () => {
	return (
		<View style={styles.cont}>
			<Background />
			<View style={styles.contSearch}>{/* <HeaderHome /> */}</View>
			<View style={styles.contHeader}>
				<HeaderHome />
			</View>
			<View style={styles.contCategories}>
				<Categories />
			</View>
			<View style={styles.contAll}>
				<AllContainer />
			</View>
		</View>
	);
};
export default Home;
