import  * as React from 'react';
import  *  as RN from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
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
                style={styles.TxtSignIn}
                >
                    Sign In
                </RN.Text>
                <RN.View 
                    style={styles.inputsCont}>
                    <RN.TextInput 
                        style={styles.input}
                        placeholder='Email'
                        autoCorrect={false}
                    />
                    <AntDesign 
                        name='user' 
                        style={styles.iconL}/>
                    <RN.View 
                        style={styles.line1}/>
                    <RN.TextInput 
                        style={styles.input}
                        placeholder='Password'
                        autoCorrect={false}
                        secureTextEntry={true}
                    />
                    <AntDesign 
                        name='lock1' 
                        style={styles.iconP}/>
                    <AntDesign 
                        name='eye' 
                        style={styles.iconE}/>
                    <RN.View 
                        style={styles.line2}/>
                </RN.View>
                <RN.TouchableOpacity 
                    style={styles.BtnLogin} 
                    activeOpacity={btnOpacity()}>
                    <RN.Text 
                        style={styles.TxtLogin}
                    >
                        LOGIN
                    </RN.Text>
                </RN.TouchableOpacity>
                <RN.TouchableOpacity 
                style={styles.BtnForgot}
                activeOpacity={btnOpacity()}>
                    <RN.Text 
                        style={styles.TxtForgot}
                    >
                        ForgotPassword?
                    </RN.Text>
                </RN.TouchableOpacity>
                <RN.View 
                    style={styles.contBtn}>
                    <RN.TouchableOpacity 
                        style={styles.BtnRedes}
                        activeOpacity={btnOpacity()}>
                    <AntDesign 
                        name='facebook-square' 
                        style={styles.icon}/>
                        <RN.Text 
                            style={styles.TxtFacebook}
                        >
                            Facebook
                        </RN.Text>
                    </RN.TouchableOpacity>
                    <RN.TouchableOpacity 
                        style={styles.BtnRedes}
                        activeOpacity={btnOpacity()}>
                        <AntDesign 
                            name='google' 
                            style={styles.icon}/>
                        <RN.Text 
                            style={styles.TxtGoogle}
                        >
                            Google
                        </RN.Text>
                    </RN.TouchableOpacity>
                </RN.View>
                <RN.View 
                    style={styles.contForgot}>
                    <RN.Text 
                        style={styles.TxtNoAccount}
                    >
                        Don't have an account?
                    </RN.Text>
                    <RN.TouchableOpacity 
                        style={styles.BtnSignUp}
                        activeOpacity={btnOpacity()}
                        onPress={() => Navigation.navigate("Register")}>
                        <RN.Text   
                            style={styles.TxtSignUp}
                        >
                            Sign Up
                        </RN.Text>
                    </RN.TouchableOpacity>
                </RN.View>
            </RN.View>
        </RN.SafeAreaView>
    )
};
export default Form;