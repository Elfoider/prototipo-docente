"use client";

import { useEffect, useState } from "react";

type ToastType = "success" | "info" | "error";

interface ToastItem {
  id: string;
  message: string;
  type: ToastType;
}

export function useToast(timeout = 2500) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const showToast = (message: string, type: ToastType = "info") => {
    const id = crypto.randomUUID();
    setToasts((prev) => [...prev, { id, message, type }]);
  };

  useEffect(() => {
    if (toasts.length === 0) return;

    const timers = toasts.map((toast) =>
      setTimeout(() => {
        setToasts((prev) => prev.filter((item) => item.id !== toast.id));
      }, timeout)
    );

    return () => timers.forEach(clearTimeout);
  }, [toasts, timeout]);

  return { toasts, showToast };
}
