import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';

// screens
import Home from '../../Screens/app/home';
import Profile from '../../Screens/app/profile';
import Cart from '../../Screens/app/cart';
import Setting from '../../Screens/app/setting';
import { View } from 'react-native';
import styles, { options } from './styles';

const AppNavigationTab = () => {
	const Tab = createBottomTabNavigator();

	return (
		<Tab.Navigator
			initialRouteName="Home"
			screenOptions={{
				headerShown: false,
				tabBarShowLabel: false,
				tabBarStyle: options,
			}}>
			<Tab.Screen
				name="Home"
				component={Home}
				options={{
					tabBarIcon: ({ focused }) => (
						<View style={styles.viewStyle}>
							<AntDesign
								name="home"
								color={focused ? 'red' : 'black'}
								style={styles.Icons}
							/>
						</View>
					),
				}}
			/>
			<Tab.Screen
				name="Cart"
				component={Cart}
				options={{
					tabBarIcon: ({ focused }) => (
						<View style={styles.viewStyle}>
							<AntDesign
								name="shoppingcart"
								color={focused ? 'red' : 'black'}
								style={styles.Icons}
							/>
						</View>
					),
				}}
			/>
			<Tab.Screen
				name="Profile"
				component={Profile}
				options={{
					tabBarIcon: ({ focused }) => (
						<View style={styles.viewStyle}>
							<AntDesign
								name="user"
								color={focused ? 'red' : 'black'}
								style={styles.Icons}
							/>
						</View>
					),
				}}
			/>
			<Tab.Screen
				name="setting"
				component={Setting}
				options={{
					tabBarIcon: ({ focused }) => (
						<View style={styles.viewStyle}>
							<AntDesign
								name="setting"
								color={focused ? 'red' : 'black'}
								style={styles.Icons}
							/>
						</View>
					),
				}}
			/>
		</Tab.Navigator>
	);
};
export default AppNavigationTab;
