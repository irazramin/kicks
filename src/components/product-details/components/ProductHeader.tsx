export interface ProductHeaderProps {
  badge?: string;
  title: string;
  price: number;
}

export function ProductHeader({ badge = "New Release", title, price }: ProductHeaderProps) {
  return (
    <div className="w-full">
      {badge && (
        <span className="inline-block lg:mb-4 mb-2 lg:rounded-[12px] rounded-[8px] bg-[#4A69E2] lg:px-4 px-2 lg:py-3 py-2 text-xs font-semibold uppercase font-rubik text-white">
          {badge}
        </span>
      )}
      <h1 className="font-rubik lg:text-[32px] text-xl font-semibold uppercase leading-[100%] text-[#232321] lg:mb-4 mb-2">
        {title}
      </h1>
      <p className="font-rubik text-2xl font-semibold text-[#4A69E2] leading-[100%]">
        ${price.toFixed(2)}
      </p>
    </div>
  );
}
