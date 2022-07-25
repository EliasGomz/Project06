import  * as React from 'react';
import  *  as RN from 'react-native';
import styles from './styles';
import backgroundImg from '../../../../Assets/Images/LoginBackground/Login.jpg'
import companyLogo from '../../../../Assets/Icons/companyIcon/Icon.png'
 
const Background = () => {
 return (
    <>
        <RN.Image 
        style={styles.backgroundImg}
        resizeMode={'cover'}
        source={backgroundImg}
        />
        <RN.Image 
        style={styles.logo}
        resizeMode={'contain'}
        source={companyLogo}
        />
    </>
)
};
export default Background;