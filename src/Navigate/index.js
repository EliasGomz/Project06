import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


//SCREENS STACK
import Login from "../Screens/Login";
import Register from "../Screens/Register";

const Stack = createNativeStackNavigator();

const MyStack = () =>{
    return(
        <Stack.Navigator
            initialRouteName="Login"
        >
            <Stack.Screen 
                name="Login"
                component={Login}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen 
                name="Register"
                component={Register}
                options={{
                    headerShown: false,
                    presentation: 'transparentModal'
                }}
            />
        </Stack.Navigator>
    )
};

const Navigation = () => {
    return(
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    )
}
export default Navigation;