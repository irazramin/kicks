"use client";
import { toast } from "react-hot-toast";
import { CartBanner, CartBagSection, OrderSummary } from ".";
import { SuggestionProducts } from "../shared/suggestion-products";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { removeFromCart } from "@/store/slices/cartSlice";

export function Cart() {
  const items = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();

  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const delivery = 6.99;

  const handleRemove = (id: string) => {
    dispatch(removeFromCart(id));
    toast.success('Product removed from cart', {
      style: {
        border: '1px solid #4A69E2',
        padding: '16px',
        color: '#4A69E2',
      },
      iconTheme: {
        primary: '#4A69E2',
        secondary: '#E5E3E8',
      },
    });
  };

  return (
    <div className="min-h-screen">
      <CartBanner />
      <div className="container container-7xl mx-auto lg:px-0 px-4">
        <div className="mx-auto grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-8">
            <CartBagSection
              items={items}
              onRemoveItem={handleRemove}
            />
          </div>
          <div className="lg:col-span-4">
            <OrderSummary
              subtotal={subtotal}
              itemCount={items.reduce((n, i) => n + i.quantity, 0)}
              delivery={delivery}
              salesTax={null}
            />
          </div>
        </div>
      </div>
      <div className="lg:pt-[40px] lg:pb-[60px] pt-6 pb-12">
        <SuggestionProducts />
      </div>
    </div>
  );
}
