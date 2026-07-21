// Cart state management — persists to localStorage.
import { useCallback, useEffect, useReducer } from "react";
import { CartContext, STORAGE_KEY } from "./cartConfig.js";

function loadCart() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const existing = state.find(
        (item) =>
          item.productId === action.payload.productId &&
          item.size === action.payload.size &&
          item.grind === action.payload.grind
      );
      if (existing) {
        return state.map((item) =>
          item === existing
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
      }
      return [...state, action.payload];
    }
    case "REMOVE_ITEM":
      return state.filter((item) => item.id !== action.payload);
    case "UPDATE_QUANTITY":
      if (action.payload.quantity <= 0) {
        return state.filter((item) => item.id !== action.payload.id);
      }
      return state.map((item) =>
        item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
      );
    case "CLEAR_CART":
      return [];
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, null, loadCart);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const count = items.reduce((sum, item) => sum + item.quantity, 0);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const addToCart = useCallback((product, size, grind, quantity = 1) => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: `${product.id}-${size}-${grind}-${Date.now()}`,
        productId: product.id,
        name: product.name,
        image: product.images[0],
        size,
        grind,
        price: product.sizes.find((s) => s.size === size)?.price ?? product.priceFrom,
        quantity,
      },
    });
  }, []);

  const removeFromCart = useCallback((id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  }, []);

  const updateQuantity = useCallback((id, quantity) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: "CLEAR_CART" });
  }, []);

  return (
    <CartContext.Provider value={{ items, count, total, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}
