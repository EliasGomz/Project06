import  * as React from "react";
import  *  as RN from "react-native";
import styles from "./Styles";
import Background from "./components/background";
import Form from "./components/form";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Login = () => {
    return (
        <KeyboardAwareScrollView>
            <Background />
            <Form />
        </KeyboardAwareScrollView>
    )
};
export default Login;