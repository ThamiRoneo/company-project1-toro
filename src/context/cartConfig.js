// Cart configuration and hook. Kept separate from the Provider component
// so react-refresh fast refresh works (only components may be exported
// from a component file).
import { createContext, useContext } from "react";

export const STORAGE_KEY = "toro-cart";

export const CartContext = createContext(null);

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
}
