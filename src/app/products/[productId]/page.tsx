import { notFound } from "next/navigation";
import { ProductDetails } from "@/components/product-details";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;
  const id = Number(productId);
  if (Number.isNaN(id)) notFound();

  return <ProductDetails productId={id} />;
}