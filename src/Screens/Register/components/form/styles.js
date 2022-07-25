import { Dimensions, StyleSheet } from 'react-native';
 
const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        width: '100%',
        height: (height / 1.5),
        borderTopRightRadius: 70,
        borderTopLeftRadius: 70,
        zIndex: 4,
        marginTop: 250
    },
    contentContainer:{
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 40,
    },
    TxtSignUp:{
        fontSize: 20,
        marginTop: 30,
        paddingBottom: 20,
        alignSelf: 'flex-start',
        marginLeft: 20,
        fontWeight: 'bold',
    },
    inputsCont:{
        height: "60%",
        width: '100%',
    },
    input:{
        padding: 15,
        borderRadius: 18,
        marginTop: 10,
        width: '100%',
        height: '16%' ,
        paddingLeft: 30,
        paddingTop: 15,
    },
    line1:{
        height: 1,
        width: '100%',
        backgroundColor: 'black',
        marginTop: '15%',
        position: 'absolute'
    },
    line2:{
        height: 1,
        width: '100%',
        backgroundColor: 'black',
        marginTop: '34%',
        position: 'absolute'
    },
    line3:{
        height: 1,
        width: '100%',
        backgroundColor: 'black',
        marginTop: '52%',
        position: 'absolute'
    },
    line4:{
        height: 1,
        width: '100%',
        backgroundColor: 'black',
        marginTop: '71%',
        position: 'absolute'
    },
    line5:{
        height: 1,
        width: '100%',
        backgroundColor: 'black',
        marginTop: '89%',
        position: 'absolute'
    },
    BtnRegister:{
        backgroundColor: 'cyan',
        padding: 20,
        borderRadius: 40,
        width: '100%',
        height: '9%',
        marginTop: 10,
    },
    TxtRegister:{
        position: 'absolute',
        alignSelf: 'center',
        marginTop: 10,
        fontSize: 17,
        fontWeight: 'bold',
    },
    contHaveAcc:{
        flexDirection: 'row',
        marginTop: 15
    },
    TxtAccount:{
        paddingRight: 5,
        fontWeight: 'bold',
    },
    BtnSignIn:{

    },
    TxtSignIn:{
        fontWeight: 'bold',
    },
});
export default styles;