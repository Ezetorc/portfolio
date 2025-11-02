import { DEFAULT_LANGUAGE } from "../configuration/i18n.configuration";
import type { Language } from "../models/language.model";

export function useTranslatedPath(lang: Language) {
  return function translatePath(path: string, l: string = lang) {
    return l === DEFAULT_LANGUAGE
      ? `/${DEFAULT_LANGUAGE}${path}`
      : `/${l}${path}`;
  };
}
