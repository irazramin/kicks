import { CartItemCard } from "./CartItemCard";

export interface CartLineItem {
  id: string;
  image: string;
  name: string;
  category: string;
  color: string;
  price: number;
  size: string;
  quantity: number;
}

export interface CartBagSectionProps {
  items: CartLineItem[];
  onRemoveItem?: (id: string) => void;
  onWishlistItem?: (id: string) => void;
}

export function CartBagSection({
  items,
  onRemoveItem,
  onWishlistItem,
}: CartBagSectionProps) {
  return (
    <div className="rounded-[16px] lg:p-6 p-4 bg-white">
      <h1 className="font-rubik text-xl font-semibold text-[#232321] lg:text-[32px] leading-[120%]">
        Your Bag
      </h1>
      <p className="mt-2 text-base text-[#232321]/80 font-open-sans leading-[120%] font-normal">
        Items in your bag not reserved - check out now to make them yours.
      </p>
      <div className="lg:mt-12 mt-2">
        {items.map((item) => (
          <CartItemCard
            key={item.id}
            image={item.image}
            name={item.name}
            category={item.category}
            color={item.color}
            price={item.price}
            size={item.size}
            quantity={item.quantity}
            onWishlist={() => onWishlistItem?.(item.id)}
            onRemove={() => onRemoveItem?.(item.id)}
          />
        ))}
      </div>
    </div>
  );
}
