import i18next from 'i18next';
import english from './english.json';
import spanish from './spanish.json';
import { initReactI18next } from 'react-i18next';

i18next.use(initReactI18next).init({
	lng: 'en',
	compatibilityJSON: 'v3',
	resources: {
		en: english,
		es: spanish,
	},
	react: {
		useSuspense: false,
	},
	interpolation: {
		escapeValue: false,
	},
});
export default i18next;
