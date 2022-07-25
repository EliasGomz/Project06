import  * as React from 'react';
import  *  as RN from 'react-native';
import styles from './styles';
import { btnOpacity } from '../../../../Constans/btnOpacity';
import { useNavigation } from '@react-navigation/native';
 
const Form = () => {
    const Navigation = useNavigation();
 return (
    <RN.SafeAreaView
        style={styles.container}>
        <RN.View
            style={styles.contentContainer}>
            <RN.Text
                style={styles.TxtSignUp}
            >
                Sign Up
            </RN.Text>
            <RN.View 
                style={styles.inputsCont}>
                <RN.TextInput 
                    style={styles.input}
                    placeholder='first name'
                    autoCorrect={false}
                />
                <RN.View 
                    style={styles.line1}/>
                <RN.TextInput 
                    style={styles.input}
                    placeholder='Last name'
                    autoCorrect={false}
                />
                <RN.View 
                    style={styles.line2}/>
                <RN.TextInput 
                    style={styles.input}
                    placeholder='email'
                    autoCorrect={false}
                />
                <RN.View 
                    style={styles.line3}/>
                <RN.TextInput 
                    style={styles.input}
                    placeholder='password'
                    autoCorrect={false}
                    secureTextEntry={true}
                />
                <RN.View 
                    style={styles.line4}/>
                <RN.TextInput 
                    style={styles.input}
                    placeholder='verify password'
                    autoCorrect={false}
                    secureTextEntry={true}
                />
                <RN.View 
                    style={styles.line5}/>
            </RN.View>
            <RN.TouchableOpacity 
                style={styles.BtnRegister} 
                activeOpacity={btnOpacity()}>
                <RN.Text 
                    style={styles.TxtRegister}
                >
                    REGISTER
                </RN.Text>
            </RN.TouchableOpacity>
            <RN.View 
                style={styles.contHaveAcc}>
                <RN.Text 
                    style={styles.TxtAccount}
                >
                    Allrady has an account?
                </RN.Text>
                <RN.TouchableOpacity 
                    style={styles.BtnSignIn}
                    activeOpacity={btnOpacity()}
                    onPress={() => Navigation.goBack()}>
                    <RN.Text   
                        style={styles.TxtSignIn}
                    >
                        Sign In
                    </RN.Text>
                </RN.TouchableOpacity>
            </RN.View>
        </RN.View>
    </RN.SafeAreaView>
)
};
export default Form;