import { apiClient } from "@/lib/api-client";
import { getCategoryBySlug } from "./categories";
import type { Product } from "@/types/product";
import { PRODUCTS_BY_CATEGORY_API_URL, SINGLE_PRODUCT_API_URL } from "@/constants/api-url";

export async function getProducts(): Promise<Product[]> {
  const { data } = await apiClient.get<Product[]>("/products");
  return data;
}

export async function getProductById(id: number): Promise<Product> {
  const { data } = await apiClient.get<Product>(SINGLE_PRODUCT_API_URL(id));
  return data;
}

export async function getProductsByCategoryId(
  categoryId: number,
): Promise<Product[]> {
  const { data } = await apiClient.get<Product[]>(
    PRODUCTS_BY_CATEGORY_API_URL(categoryId),
  );
  return data;
}

export async function getProductsByCategorySlug(
  categorySlug: string,
): Promise<Product[]> {
  const category = await getCategoryBySlug(categorySlug);
  return getProductsByCategoryId(category.id);
}
