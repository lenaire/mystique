import React, { useState, useEffect, useMemo } from "react";
import { Observable } from "$utility/observable";

export type ToastType = {
  id: number;
  content: React.ReactNode;
  active: boolean;
};

export type ToastsType = ToastType[];

export type ToastOptions = {
  duration?: number;
};

export type UseToastType = {
  toasts: ToastsType;
  actions: {
    removeToast: (toast: ToastType) => void;
    addToast: (toast: React.ReactNode) => void;
    removeAllToasts: () => void;
  };
  duration: number;
};

const store = new Observable<ToastsType>([]);

export function useToaster({ duration = 5000 }: ToastOptions): UseToastType {
  const [toasts, setToasts] = useState(store.get());

  useEffect(() => {
    return store.subscribe(setToasts);
  }, []);

  const actions = useMemo(() => {
    const removeToast = (toast: ToastType): void => {
      const currentToasts = [...store.get()];
      const toastToRemove = currentToasts.find((currentToast) => currentToast.id === toast.id);
      if (toastToRemove) toastToRemove.active = false;
      store.set([...currentToasts]);
    };

    return {
      removeAllToasts: () => store.set([]),
      removeToast,
      addToast: (toast: React.ReactNode): void => {
        const newToast = {
          id: Date.now(),
          content: toast,
          active: true,
        };

        store.set([...store.get(), newToast]);

        setTimeout(() => {
          removeToast(newToast);
        }, duration);
      },
    };
  }, [duration]);

  return {
    toasts,
    actions,
    duration,
  };
}
