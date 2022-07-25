import { Dimensions, StyleSheet } from 'react-native';

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
    backgroundImg:{
        position: 'absolute',
        zIndex: 1,
        width: '100%',
        height: '100%',
    },
    logo:{
        width: '25%',
        height: (height / 5) * 2.1,
        position: 'absolute',
        zIndex: 2,
        alignSelf: 'center',
    }
});
export default styles;