export const getProductsByCategories = (products, category) => {
  if (!products?.length) return [];

  return category.toLowerCase() === "all"
    ? products
    : products.filter(
        (product) => product.category.name.toLowerCase() === category.toLowerCase()
      );
};
