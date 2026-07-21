// Toast configuration and hook. Kept separate from the Provider component
// so react-refresh fast refresh works (only components may be exported
// from a component file).
import { createContext, useContext } from "react";

export const ToastContext = createContext(null);

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) throw new Error("useToast must be used within a ToastProvider");
  return context;
}
