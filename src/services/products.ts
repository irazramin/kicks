import { apiClient } from "@/lib/api-client";
import { getCategoryBySlug } from "./categories";
import type { Product } from "@/types/product";

export async function getProducts(): Promise<Product[]> {
  const { data } = await apiClient.get<Product[]>("/products");
  return data;
}

export async function getProductById(id: number): Promise<Product> {
  const { data } = await apiClient.get<Product>(`/products/${id}`);
  return data;
}

export async function getProductsByCategoryId(
  categoryId: number,
): Promise<Product[]> {
  const { data } = await apiClient.get<Product[]>(
    `/categories/${categoryId}/products`,
  );
  return data;
}

export async function getProductsByCategorySlug(
  categorySlug: string,
): Promise<Product[]> {
  const category = await getCategoryBySlug(categorySlug);
  return getProductsByCategoryId(category.id);
}
