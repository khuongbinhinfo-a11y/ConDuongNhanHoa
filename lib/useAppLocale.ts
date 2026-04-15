"use client";

import { useCallback, useEffect, useState } from "react";
import { DEFAULT_LOCALE, isAppLocale, LOCALE_STORAGE_KEY, type AppLocale } from "@/lib/locale";

export function useAppLocale() {
  const [locale, setLocale] = useState<AppLocale>(DEFAULT_LOCALE);

  useEffect(() => {
    const stored = typeof window !== "undefined" ? window.localStorage.getItem(LOCALE_STORAGE_KEY) : null;
    if (isAppLocale(stored)) {
      setLocale(stored);
    }
  }, []);

  const handleLocaleChange = useCallback((nextLocale: AppLocale) => {
    setLocale(nextLocale);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, nextLocale);
    }
  }, []);

  return { locale, handleLocaleChange };
}

