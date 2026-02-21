import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { CartLineItem } from "@/components/cart";

export interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
    category: string;
    color: string;
    size: string;
}

interface CartState {
    items: CartLineItem[];
}

const initialState: CartState = {
    items: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartLineItem[]>) => {
            const existingItem = state.items.find((item) => item.id === action.payload[0].id);
            if (existingItem) {
                existingItem.quantity += action.payload[0].quantity;
            } else {
                state.items = [...state.items, ...action.payload];
            }
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
    },
    
})

export const { addToCart, removeFromCart } = cartSlice.actions;

export const selectCartItems = (state: RootState) => state.cart.items;

export default cartSlice.reducer;