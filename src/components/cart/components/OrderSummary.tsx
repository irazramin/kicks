import Link from "next/link";

export interface OrderSummaryProps {
  subtotal: number;
  itemCount: number;
  delivery?: number;
  salesTax?: number | null;
}

export function OrderSummary({
  subtotal,
  itemCount,
  delivery = 6.99,
  salesTax = null,
}: OrderSummaryProps) {
  const total = subtotal + delivery + (salesTax ?? 0);

  return (
    <div className="rounded-[16px] lg:bg-transparent bg-white lg:p-0 p-4">
      <h2 className="font-rubik lg:text-[32px] text-xl font-semibold text-secondary leading-[100%]">
        Order Summary
      </h2>
      <ul className="mt-6 space-y-4 list-none">
        <li className="flex justify-between text-secondary">
          <span className="lg:text-xl text-base font-open-sans leading-[100%] font-semibold">{itemCount} ITEM{itemCount !== 1 ? "S" : ""}</span>
          <span className="lg:text-xl text-base font-open-sans leading-[100%] font-semibold">${subtotal.toFixed(2)}</span>
        </li>
        <li className="flex justify-between text-secondary">
          <span className="lg:text-xl text-base font-open-sans leading-[100%] font-semibold  ">Delivery</span>
          <span className="lg:text-xl text-base font-open-sans leading-[100%] font-semibold">${delivery.toFixed(2)}</span>
        </li>
        <li className="flex justify-between text-secondary">
          <span className="text-xl font-open-sans leading-[100%] font-semibold">Sales Tax</span>
          <span className="text-xl font-open-sans leading-[100%] font-semibold">{salesTax != null ? `$${salesTax.toFixed(2)}` : "-"}</span>
        </li>
      </ul>
      <div className="mt-4 flex justify-between font-rubik text-2xl font-semibold text-secondary">
        <span>Total</span>
        <span>${subtotal > 0 ? total.toFixed(2) : 0}</span>
      </div>
      <Link
        href="/checkout"
        className="mt-6 block w-full rounded-lg bg-secondary py-4 text-center text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-[#333]"
      >
        Checkout
      </Link>
      <Link
        href="#promo"
        className="lg:mt-6 mt-4 block text-start lg:text-xl text-base font-open-sans leading-[100%] font-semibold text-secondary underline hover:no-underline"
      >
        Use a promo code
      </Link>
    </div>
  );
}
