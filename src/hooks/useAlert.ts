"use client";

import { useEffect, useState } from "react";

type AlertType = "success" | "error" | "info";

interface AlertState {
  message: string;
  type: AlertType;
}

export function useAlert(timeout = 2500) {
  const [alert, setAlert] = useState<AlertState | null>(null);

  useEffect(() => {
    if (!alert) return;

    const timer = setTimeout(() => {
      setAlert(null);
    }, timeout);

    return () => clearTimeout(timer);
  }, [alert, timeout]);

  const showAlert = (message: string, type: AlertType = "info") => {
    setAlert({ message, type });
  };

  return { alert, showAlert };
}