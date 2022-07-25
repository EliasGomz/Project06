import { Dimensions, StyleSheet } from 'react-native';
 
const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        width: '100%',
        height: (height / 1.8) ,
        marginTop: 335,
        borderTopRightRadius: 70,
        borderTopLeftRadius: 70,
        zIndex: 4,
    },
    contentContainer:{
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 40,
    },
    TxtSignIn:{
        fontSize: 20,
        marginTop: 30,
        paddingBottom: 20,
        alignSelf: 'flex-start',
        marginLeft: 20,
        fontWeight: 'bold',
    },
    inputsCont:{
        height: "30%",
        width: '100%',
        marginTop: 10,
    },
    input:{
        padding: 20,
        borderRadius: 18,
        marginTop: 10,
        width: '100%',
        height: '40%' ,
        paddingLeft: 30,
        paddingTop: 15,
    },
    iconL:{
        fontSize: 20,
        position: 'absolute',
        marginTop: 20, 
    },
    iconP:{
        fontSize: 20,
        position: 'absolute',
        marginTop: 80,
    },
    iconE:{
        fontSize: 20,
        position: 'absolute',
        marginTop: 80,
        marginLeft: '90%',
        zIndex: 10
    },
    line1:{
        height: 1,
        width: '100%',
        backgroundColor: 'black',
        top: '38%',
        position: 'absolute'
    },
    line2:{
        height: 1,
        width: '100%',
        backgroundColor: 'black',
        bottom: '13%',
        position: 'absolute'
    },
    BtnLogin:{
        backgroundColor: 'cyan',
        padding: 20,
        borderRadius: 40,
        marginTop: 20,
        width: '100%',
        height: '10%'
    },
    TxtLogin:{
        position: 'absolute',
        alignSelf: 'center',
        marginTop: 10,
        fontSize: 17,
        fontWeight: 'bold',
    },
    BtnForgot:{
        marginTop: 5,
    },
    TxtForgot:{
        fontSize: 14,
        fontWeight: 'bold',
    },
    contBtn:{
        flexDirection: 'row',
        marginTop: 20,
        width: '100%',
        height: '11%',
        marginLeft: 5
    },
    BtnRedes:{
        width: '40%',
        borderRadius: 10,
        marginLeft: 20,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
        borderWidth: 2,
        borderColor: 'cyan'
    },
    icon:{
        fontSize: 30,
    },
    TxtFacebook:{
        fontSize: 20,
        fontWeight: 'bold',
        paddingLeft: 3
    },
    TxtGoogle:{
        fontSize: 20,
        fontWeight: 'bold',
        paddingLeft: 10,
    },
    contForgot:{
        flexDirection: 'row',
        marginTop: 20
    },
    TxtNoAccount:{
        paddingRight: 5,
        fontWeight: 'bold',
    },
    TxtSignUp:{
        fontWeight: 'bold',
    },
    BtnSignUp:{

    },
});
export default styles;