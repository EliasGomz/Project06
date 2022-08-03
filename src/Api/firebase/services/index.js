import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import storage from '@react-native-firebase/storage';
import moment from 'moment';
import {
	validateEmail,
	validatePassword,
	validateName,
	validatePhoneNum,
} from '../../../Utils/validations';

const defaultName = moment().format('HHmmss');
const instance = storage();
const defaultMetadata = {
	contentType: 'image/jpeg',
};

const uploadAsset = async (
	reference,
	uri,
	name = defaultName,
	metadata = defaultMetadata,
) => {
	return new Promise((resolve, reject) => {
		instance
			.ref(reference)
			.child(name)
			.putFile(uri, metadata)
			.then(uploadedFile => {
				resolve(uploadedFile.downloadURL);
			})
			.catch(error => {
				reject(error);
			});
	});
};

const googleLogin = async () => {
	// Get the users ID token
	const { idToken } = await GoogleSignin.signIn();

	// Create a Google credential with the token
	const googleCredential = auth.GoogleAuthProvider.credential(idToken);

	// Sign-in the user with the credential
	return auth().signInWithCredential(googleCredential);
};

const facebookLogin = async () => {
	// Attempt login with permissions
	const result = await LoginManager.logInWithPermissions([
		'public_profile',
		'email',
	]);

	if (result.isCancelled) {
		throw new Error('User cancelled the login process');
	}

	// Once signed in, get the users AccesToken
	const data = await AccessToken.getCurrentAccessToken();

	if (!data) {
		throw new Error('Something went wrong obtaining access token');
	}

	// Create a Firebase credential with the AccessToken
	const facebookCredential = auth.FacebookAuthProvider.credential(
		data.accessToken,
	);

	// Sign-in the user with the credential
	return auth().signInWithCredential(facebookCredential);
};

const SignUp = (
	email,
	password,
	// firstName,
	// lastName,
	// age,
	// numberPhone,
	// photo,
) => {
	try {
		const emailValidation = validateEmail(email);
		if (!email) throw new Error('Email es requerido');
		if (emailValidation) throw new Error('Email no es valido');
		if (!password) throw new Error('Pass es requerido');
		const passValidation = validatePassword(password);
		if (passValidation) throw new Error('Password no es valido');
		// if (!firstName) throw new Error('firstName es requerido');
		// const fNameValidation = validateName(firstName);
		// if (fNameValidation) throw new Error('Name no es valido');
		// if (!lastName) throw new Error('lastName es requerido');
		// const lNameValidation = validateName(lastName);
		// if (lNameValidation) throw new Error('Name no es valido');
		// if (!age) throw new Error('age es requerido');
		// if (!numberPhone) throw new Error('phone es requerido');
		// const phoneNumValidation = validatePhoneNum(numberPhone);
		// if (phoneNumValidation) throw new Error('Numero no es valido');
		// if (!photo) throw new Error('photo es requerido');

		auth()
			.createUserWithEmailAndPassword(email, password)
			.then(credential => {
				return credential.user.uid;
			});
		// await firestore().collection('Users').doc(userId).set({
		// 	email,
		// 	password,
		// 	firstName,
		// 	lastName,
		// 	age,
		// 	numberPhone,
		// });
	} catch (err) {
		Alert.alert(err);
	}
};

const SignIn = (email, password) => {
	try {
		if (!email) throw new Error('Email es requerido');
		if (!password) throw new Error('Pass es requerido');

		return auth()
			.signInWithEmailAndPassword(email, password)
			.then(() => {});
	} catch (err) {
		Alert.alert(err);
	}
};

const ForgetPassword = email => {
	try {
		if (!email) throw new Error('Email es requerido');

		return auth().sendPasswordResetEmail(email);
	} catch (err) {
		Alert.alert(err);
	}
};

const SignOut = () => {
	return auth().signOut();
};

const Auth = {
	SignUp,
	SignIn,
	ForgetPassword,
	SignOut,
	googleLogin,
	facebookLogin,
};
export default Auth;
