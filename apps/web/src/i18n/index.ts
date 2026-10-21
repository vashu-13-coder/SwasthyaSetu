import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      appName: 'SwasthyaSetu',
      tagline: 'Offline-First Triage Assistant for Rural Health Workers',
    },
  },
  hi: {
    translation: {
      appName: 'स्वास्थ्यसेतु',
      tagline: 'ग्रामीण स्वास्थ्य कार्यकर्ताओं के लिए ऑफलाइन-प्रथम ट्राइएज सहायक',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
