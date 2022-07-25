import  * as React from "react";
import  *  as RN from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Form from "./components/form/index";


const Register = () => {
    return (
        <KeyboardAwareScrollView>
            <Form />
        </KeyboardAwareScrollView>
    )
};
export default Register;