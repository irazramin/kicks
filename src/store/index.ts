import { configureStore } from "@reduxjs/toolkit";
import type { CartLineItem } from "@/types/cart";
import cartReducer from "./slices/cartSlice";

const CART_STORAGE_KEY = "kicks-cart";

function getCartFromStorage(): CartLineItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export const makeStore = () => {
  const preloadedState =
    typeof window !== "undefined"
      ? { cart: { items: getCartFromStorage() } }
      : undefined;

  const store = configureStore({
    reducer: {
      cart: cartReducer,
    },
    preloadedState,
  });

  if (typeof window !== "undefined") {
    store.subscribe(() => {
      localStorage.setItem(
        CART_STORAGE_KEY,
        JSON.stringify(store.getState().cart.items)
      );
    });
  }

  return store;
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
