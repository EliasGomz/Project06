import React, { useState } from 'react';
import { Text, Image, View } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

// icon
import iconCompany from '../../../../../Assets/Icons/companyIcon/Icon.png';

// component
import Input from '../../../../../Components/common/input';
import Button from '../../../../../Components/common/button';
import ButtonText from '../../../../../Components/common/butonText';
import { appTheme } from '../../../../../Themes/appTheme';

// services
import { Auth } from '../../../../../Api/firebase';
import { useTranslation } from 'react-i18next';

const Form = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const Navigation = useNavigation();
	const { t, i18n } = useTranslation();

	return (
		<View style={styles.contContainer}>
			<BlurView
				blurAmount={20}
				blurType="light"
				blurRadius={6}
				style={styles.blur}>
				<View style={styles.login}>
					<Image
						style={styles.iconCompany}
						source={iconCompany}
						resizeMode="contain"
					/>
					<Input
						placeholder={t('Email')}
						placeholderTextColor={appTheme.white}
						iconL={'user'}
						customInput={styles.inputCont}
						customiconL={styles.iconInput}
						customCont={styles.contInput}
						autoCorrect={false}
						onChangeText={text => setEmail(text)}
					/>
					<Input
						placeholder={t('Password')}
						placeholderTextColor={appTheme.white}
						iconL={'lock1'}
						iconR={'eye'}
						customInput={styles.inputCont}
						customiconL={styles.iconInput}
						customiconR={styles.iconInputR}
						customCont={styles.contInput}
						autoCorrect={false}
						secureTextEntry={true}
						onChangeText={text => setPassword(text)}
					/>
					<Button
						onPress={() => Auth.SignIn(email, password)}
						tittle={t('Login')}
						width={'90%'}
						customButton={styles.buttonLogin}
					/>
					<ButtonText
						onPress={() => Navigation.navigate('ForgotPass')}
						tittle={t('ForgotPass')}
						width={'61%'}
					/>
					<View style={styles.inputSocial}>
						<Button
							onPress={() => Auth.facebookLogin()}
							tittle={'Facebook'}
							icon={'facebook-square'}
							width={'40%'}
							customIcon={styles.icon}
							customButton={styles.buttonRedes}
							customTittle={styles.tittle}
							backgroundColor={appTheme.blackOpacity}
						/>
						<Button
							onPress={() => Auth.googleLogin()}
							tittle={'Google'}
							icon={'google'}
							width={'40%'}
							customIcon={styles.icon}
							customButton={styles.buttonRedes}
							customTittle={styles.tittle}
							backgroundColor={appTheme.blackOpacity}
						/>
					</View>
					<View style={styles.inputSignUp}>
						<Text style={styles.signUp}>{t("Don'tHaveAcc")}</Text>
						<ButtonText
							tittle={t('SignUp')}
							width={'26%'}
							onPress={() => Navigation.navigate('Register')}
						/>
					</View>
				</View>
			</BlurView>
		</View>
	);
};
export default Form;
