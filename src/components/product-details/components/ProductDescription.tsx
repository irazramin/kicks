export interface ProductDescriptionProps {
  description: string;
}

export function ProductDescription({
  description,
}: ProductDescriptionProps) {
  return (
    <div className="lg:mt-8 mt-6 space-y-3">
      <h2 className="text-base leading-[100%] font-semibold uppercase text-[#232321]">
        About the product
      </h2>
      <p className="text-base text-[#232321] font-normal font-open-sans leading-[120%]">
        {description}
      </p>
    </div>
  );
}
