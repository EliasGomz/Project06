export const validateEmail = value => {
	const emailRegex =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (value) {
		return emailRegex.test(value) ? null : 'Correo no valido';
	}
	return null;
};

export const validatePassword = value => {
	const passRegex =
		/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*#?&:()._-]{8,}$/;
	if (value) {
		return passRegex.test(value)
			? null
			: 'Debe contener mayúscula, minúscula, números y 8 o más caracteres';
	}
	return value;
};

export const validatePhoneNum = value => {
	const phoneRegex = /^[0-9]{8,8}$/;
	if (value) {
		return phoneRegex.test(value) ? null : 'Numero no valido';
	}
	return null;
};

export const validateName = value => {
	const nameRegex = /^[A-Za-z]{3,20}$/;
	if (value) {
		return nameRegex.test(value) ? null : 'Nombre no valido';
	}
	return null;
};
