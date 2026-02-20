"use client";

import { useCallback, useEffect, useState } from "react";
import { getCategories } from "@/services";
import type { Category } from "@/types/category";

export function useCategories() {
  const [data, setData] = useState<Category[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchCategories = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const categories = await getCategories();
      setData(categories);
    } catch (err) {
      setError(
        err instanceof Error ? err : new Error("Failed to fetch categories"),
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return { data, loading, error, refetch: fetchCategories };
}
