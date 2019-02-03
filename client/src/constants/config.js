
export const API_URL = process.env.REACT_APP_API_URL;
export const ENV = process.env.NODE_ENV;
export const paths = {
	HOME: '/',
	REGISTER: '/account/register',
	LOGIN: '/account/login',
};

export const VALIDATION_MESSAGES = {
	maxLength: (max) => `Must be ${max} characters or less`,
	minLength: (min) => `Must be ${min} characters or more`,
	required: 'To pole jest wymagane',
	email: 'Podany email jest błedny',
	password: 'Hasło musi mieć od 6 do 12 znaków, składać się z dużych i małych liter oraz zawierać znak specjalny',
	passwordConfirmation: 'Passwords do not match',
	default: 'Invalid field',
}

export const FRONT_DATE_FORMAT = 'DD-MM-YYYY';
export const DEFAULT_PAGE_LANGUAGE = 'en';