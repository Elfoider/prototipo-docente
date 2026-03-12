"use client";

import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(initialValue);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (item) {
        setStoredValue(JSON.parse(item));
      }
    } catch (error) {
      console.error(`Error leyendo localStorage para ${key}:`, error);
    } finally {
      setIsLoaded(true);
    }
  }, [key]);

  useEffect(() => {
    if (!isLoaded) return;

    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(`Error guardando localStorage para ${key}:`, error);
    }
  }, [key, storedValue, isLoaded]);

  return [storedValue, setStoredValue, isLoaded] as const;
}