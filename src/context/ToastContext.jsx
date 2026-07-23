// Toast state management — shows temporary confirmation messages.
import { useState } from "react";
import { ToastContext } from "./toastConfig.js";

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  function showToast(message, duration = 3000) {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, duration);
  }

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="fixed top-20 right-4 z-50 flex flex-col gap-2">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="rounded-toro border border-toro-sand bg-toro-sand/50 px-6 py-4 shadow-lg backdrop-blur-sm"
            role="status"
            aria-live="polite"
          >
            <p className="text-lg font-semibold text-toro-brown">
              {toast.message}
            </p>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
