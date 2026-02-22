import { useProducts } from "@/hooks";
import { NotFound } from "@/components/shared/NotFound";
import { SuggestionProductSkeleton } from "@/components/shared/skeletons";
import { ProductCard } from "./ProductCard";
import { DEFAULT_CATEGORY_SLUG, MAX_PRODUCTS, SKELETON_COUNT } from "../constants";

export function ProductsList() {
  const { data: products, loading } = useProducts({
    categorySlug: DEFAULT_CATEGORY_SLUG,
  });

  if (loading) {
    return (
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: SKELETON_COUNT }, (_, i) => (
          <SuggestionProductSkeleton key={i} />
        ))}
      </div>
    );
  }

  const hasProducts = (products?.length ?? 0) > 0;

  if (!hasProducts) {
    return (
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
        <div className="col-span-full">
          <NotFound message="No products found" className="min-h-[200px]" />
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
      {(products ?? []).slice(0, MAX_PRODUCTS).map((product) => (
        <div key={product.id}>
          <ProductCard
            title={product.title}
            price={`$${product.price}`}
            imageSrc={product.images?.[0]}
            href={`/products/${product.id}`}
          />
        </div>
      ))}
    </div>
  );
}
