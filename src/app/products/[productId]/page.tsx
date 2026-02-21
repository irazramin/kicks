import { notFound } from "next/navigation";
import { ProductDetails } from "@/components/product-details";
import { SuggestionProducts } from "@/components/shared/suggestion-products";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;
  const id = Number(productId);
  if (Number.isNaN(id)) notFound();

  return (
    <>
      <ProductDetails productId={id} />
      <div className="lg:pb-[60px] pb-[40px] lg:pt-[128px] pt-[24px]">
        <SuggestionProducts />
      </div>
    </>
  );
}
