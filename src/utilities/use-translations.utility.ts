import {
  DICTIONARY,
  DEFAULT_LANGUAGE,
} from "../configuration/i18n.configuration";

export function useTranslations(lang: keyof typeof DICTIONARY) {
  return function t(key: keyof (typeof DICTIONARY)[typeof DEFAULT_LANGUAGE]) {
    return DICTIONARY[lang][key] || DICTIONARY[DEFAULT_LANGUAGE][key];
  };
}
