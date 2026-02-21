export const PRODUCTS_API_URL = "/products";
export const SINGLE_PRODUCT_API_URL = (id: number) => `${PRODUCTS_API_URL}/${id}`;
export const CATEGORIES_API_URL = "/categories";
export const SINGLE_CATEGORY_API_URL = (id: number) => `${CATEGORIES_API_URL}/${id}`;
export const PRODUCTS_BY_CATEGORY_API_URL = (categoryId: number) => `${CATEGORIES_API_URL}/${categoryId}/products`;