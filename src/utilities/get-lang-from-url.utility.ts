import {
  DEFAULT_LANGUAGE,
  DICTIONARY,
} from "../configuration/i18n.configuration";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");

  if (lang in DICTIONARY) return lang as keyof typeof DICTIONARY;

  return DEFAULT_LANGUAGE;
}
