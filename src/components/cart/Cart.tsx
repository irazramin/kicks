"use client";

import { useState } from "react";
import { CartBanner } from "./components/CartBanner";
import { CartBagSection } from "./components/CartBagSection";
import type { CartLineItem } from "./components/CartBagSection";
import { OrderSummary } from "./components/OrderSummary";
import { SuggestionProducts } from "../shared/suggestion-products";

const MOCK_ITEMS: CartLineItem[] = [
  {
    id: "1",
    image: "https://i.imgur.com/qNOjJje.jpeg",
    name: "DROPSET TRAINER SHOES",
    category: "Men's Road Running Shoes",
    color: "Enamel Blue / University White",
    price: 130,
    size: "10",
    quantity: 1,
  },
];

export function Cart() {
  const [items, setItems] = useState<CartLineItem[]>(MOCK_ITEMS);

  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const delivery = 6.99;

  const handleRemove = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
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
