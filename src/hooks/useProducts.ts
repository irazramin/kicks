"use client";

import { useCallback, useEffect, useState } from "react";
import {
  getProducts,
  getProductsByCategorySlug,
} from "@/services";
import type { Product } from "@/types/product";

interface UseProductsOptions {
  categorySlug?: string;
}

export function useProducts(options?: UseProductsOptions) {
  const [data, setData] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const categorySlug = options?.categorySlug;

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const products = categorySlug
        ? await getProductsByCategorySlug(categorySlug)
        : await getProducts();
      setData(products);
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Failed to fetch products"));
    } finally {
      setLoading(false);
    }
  }, [categorySlug]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return { data, loading, error, refetch: fetchProducts };
}
