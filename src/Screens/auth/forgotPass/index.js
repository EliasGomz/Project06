import React, { useState } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { BlurView } from '@react-native-community/blur';

// components
import Background from '../components/backgroundAuths';
import Button from '../../../Components/common/button';
import Input from '../../../Components/common/input';
import ButtonText from '../../../Components/common/butonText';
import { appTheme } from '../../../Themes/appTheme';

// services
import { Auth } from '../../../Api/firebase';
import { useTranslation } from 'react-i18next';

const ForgotPass = () => {
	const [email, setEmail] = useState('');
	const Navigation = useNavigation();
	const { t, i18n } = useTranslation();

	return (
		<>
			<Background />
			<View style={styles.contContainer}>
				<BlurView blurAmount={20} blurType="light" style={styles.blur}>
					<View style={styles.login}>
						<Text style={styles.Forget}>{t('EnterEmail')}</Text>
						<Input
							placeholder={t('Email')}
							placeholderTextColor={appTheme.white}
							customInput={styles.inputCont}
							customCont={styles.contInput}
							onChangeText={text => setEmail(text)}
						/>
						<Button
							tittle={t('SendEmail')}
							width={'90%'}
							customButton={styles.buttonSend}
							onPress={() => Auth.ForgetPassword(email)}
						/>
						<View style={styles.inputSignIn}>
							<Text style={styles.signIn}>{t('BackTo')}</Text>
							<ButtonText
								tittle={t('SignIn')}
								width={'21%'}
								onPress={() => Navigation.goBack()}
							/>
						</View>
					</View>
				</BlurView>
			</View>
		</>
	);
};
export default ForgotPass;
