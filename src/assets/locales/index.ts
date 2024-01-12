import {initReactI18next} from 'react-i18next'
import i18n from 'i18next'
import uk from "./uk";
import en from "./en";


const resources = {
  uk: {
    translation: uk,
  },
  en: {
    translation: en,
  },
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
