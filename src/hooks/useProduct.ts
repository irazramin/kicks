"use client";

import { useCallback, useEffect, useState } from "react";
import { getProductById } from "@/services";
import type { Product } from "@/types/product";

export function useProduct(id: number | null) {
  const [data, setData] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchProduct = useCallback(async () => {
    if (id === null) {
      setData(null);
      setLoading(false);
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const product = await getProductById(id);
      setData(product);
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Failed to fetch product"));
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  return { data, loading, error, refetch: fetchProduct };
}
