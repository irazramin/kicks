export interface ProductDescriptionProps {
  description: string;
}

export function ProductDescription({
  description,
}: ProductDescriptionProps) {
  return (
    <div className="lg:mt-8 mt-6 space-y-3">
      <h2 className="text-base leading-[100%] font-semibold uppercase text-secondary">
        About the product
      </h2>
      <p className="text-base text-secondary font-normal font-open-sans leading-[120%]">
        {description}
      </p>
    </div>
  );
}
