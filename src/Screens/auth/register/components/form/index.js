import React, { useState } from 'react';
import { Text, View, Image } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import DatePicker from 'react-native-date-picker';

// components
import Button from '../../../../../Components/common/button';
import ButtonText from '../../../../../Components/common/butonText';
import Input from '../../../../../Components/common/input';
import { appTheme } from '../../../../../Themes/appTheme';
import login from '../../../../../Assets/Images/pleasholderImage/default.png';
import DatePiker from '../../../../../Components/pikerDate';

// service
import { Auth } from '../../../../../Api/firebase';
import { useTranslation } from 'react-i18next';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import { Colors } from 'react-native-paper';

const Form = () => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [date, setDate] = useState(new Date());
	const [open, setOpen] = useState(false);
	const [numberPhone, setNumberPhone] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [photo, setPhoto] = useState(null);
	const Navigation = useNavigation();
	const { t, i18n } = useTranslation();

	const dates = date.toISOString().substring(0, 10);

	const selectImage = () => {
		const options = {
			tittle: 'select image',
			storageOptions: {
				skipBackup: false,
				path: 'images',
			},
			includeBase64: true,
		};

		launchImageLibrary(options, response => {
			if (response.errorCode) {
				console.log(response.errorMessage);
			} else if (response.didCancel) {
				console.log('cancel upload');
			} else {
				const path = response.assets[0].uri;
				setPhoto(path);
			}
		});
	};

	const takeImage = () => {
		const options = {
			tittle: 'select image',
			storageOptions: {
				skipBackup: false,
				path: 'images',
			},
			includeBase64: true,
		};

		launchCamera(options, response => {
			if (response.errorCode) {
				console.log(response.errorMessage);
			} else if (response.didCancel) {
				console.log('cancel upload');
			} else {
				const path = response.assets[0].uri;
				setPhoto(path);
			}
		});
	};

	return (
		<View style={styles.contContainer}>
			<BlurView blurAmount={20} blurType="light" style={styles.blur}>
				<View style={styles.login}>
					<Text style={styles.SignUp}>{t('SignUp')}</Text>
					<Input
						placeholder={t('FirstName')}
						placeholderTextColor={appTheme.white}
						customInput={styles.inputCont}
						customCont={styles.contInput}
						onChangeText={text => setFirstName(text)}
					/>
					<Input
						placeholder={t('LastName')}
						placeholderTextColor={appTheme.white}
						customInput={styles.inputCont}
						customCont={styles.contInput}
						onChangeText={text => setLastName(text)}
					/>
					<View style={styles.date}>
						<Input
							placeholderTextColor={appTheme.white}
							customInput={styles.inputContD}
							customCont={styles.contInputD}
							defaultValue={dates}
							editable={false}
							onChangeText={text => setDate(text)}
						/>
						<Button
							icon={'calendar'}
							width={'14%'}
							customButton={styles.dateButton}
							customIcon={styles.dateIcon}
							onPress={() => setOpen(true)}
						/>
						<DatePicker
							modal
							maximumDate={new Date()}
							open={open}
							mode={'date'}
							date={date}
							onConfirm={date => {
								setOpen(false);
								setDate(date);
							}}
							onCancel={() => {
								setOpen(false);
							}}
						/>
					</View>

					<Input
						placeholder={t('NumberPhone')}
						placeholderTextColor={appTheme.white}
						customInput={styles.inputCont}
						customCont={styles.contInput}
						keyboardType={'number-pad'}
						onChangeText={text => setNumberPhone(text)}
					/>
					<Input
						placeholder={t('Email')}
						placeholderTextColor={appTheme.white}
						customInput={styles.inputCont}
						customCont={styles.contInput}
						onChangeText={text => setEmail(text)}
					/>
					<Input
						placeholder={t('Password')}
						placeholderTextColor={appTheme.white}
						customInput={styles.inputCont}
						customCont={styles.contInput}
						autoCorrect={false}
						secureTextEntry={true}
						onChangeText={text => setPassword(text)}
					/>
					<Input
						placeholder={t('VerifyPass')}
						placeholderTextColor={appTheme.white}
						customInput={styles.inputCont}
						customCont={styles.contInput}
						autoCorrect={false}
						secureTextEntry={true}
					/>
					<View style={styles.cont}>
						<Image
							style={styles.photoProfile}
							source={photo ? { uri: photo } : login}
							resizeMode={photo ? 'cover' : 'contain'}
						/>
						<Button
							onPress={takeImage}
							tittle={t('TakePhoto')}
							width={'30%'}
							customButton={styles.takePhoto}
							backgroundColor={appTheme.mediumGrayOpacity}
						/>
						<Button
							onPress={selectImage}
							tittle={t('SelectPhoto')}
							width={'30%'}
							customButton={styles.selectPhoto}
							backgroundColor={appTheme.blackOpacity}
						/>
					</View>
					<Button
						tittle={t('Register')}
						width={'90%'}
						customButton={styles.buttonLogin}
						onPress={() =>
							Auth.SignUp(
								email,
								password,
								// firstName,
								// lastName,
								// date,
								// numberPhone,
								// photo,
							)
						}
					/>
					<View style={styles.inputSignIn}>
						<Text style={styles.signIn}>{t('AllReadyAcc')}</Text>
						<ButtonText
							tittle={t('SignIn')}
							width={'18%'}
							onPress={() => Navigation.goBack()}
						/>
					</View>
				</View>
			</BlurView>
		</View>
	);
};
export default Form;
