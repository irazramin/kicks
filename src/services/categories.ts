import { apiClient } from "@/lib/api-client";
import type { Category } from "@/types/category";

export async function getCategories(): Promise<Category[]> {
  const { data } = await apiClient.get<Category[]>("/categories");
  return data;
}

export async function getCategoryBySlug(slug: string): Promise<Category> {
  const categories = await getCategories();
  const category = categories.find(
    (c) => c.slug.toLowerCase() === slug.toLowerCase(),
  );
  if (!category) throw new Error(`Category not found: ${slug}`);
  return category;
}
