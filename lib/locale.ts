export const SUPPORTED_LOCALES = ["vi", "en"] as const;

export type AppLocale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: AppLocale = "vi";
export const LOCALE_STORAGE_KEY = "cdnh_locale";

export function isAppLocale(value: string | null): value is AppLocale {
  return SUPPORTED_LOCALES.includes(value as AppLocale);
}
