import {
  DICTIONARY,
  DEFAULT_LANGUAGE,
} from "../configuration/i18n.configuration";

export function useTranslatedPath(lang: keyof typeof DICTIONARY) {
  return function translatePath(path: string, l: string = lang) {
    return l === DEFAULT_LANGUAGE
      ? `/${DEFAULT_LANGUAGE}${path}`
      : `/${l}${path}`;
  };
}
