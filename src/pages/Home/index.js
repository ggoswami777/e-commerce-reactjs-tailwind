import { useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar";
import { getAllProducts } from "../../api/getAllProducts";
import { ProductCard } from "../../components/ProductCard";
import { getAllCategories } from "../../api/getAllCategories";
import { getProductsByCategories } from "../../utils/getProductsByCategories";

export const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  useEffect(() => {
    (async () => {
      const data = await getAllProducts();
      const categories = await getAllCategories();
      const updatedCategories = [{ id: "1a", name: "All" }, ...categories];
      setProducts(data);
      setCategories(updatedCategories);
    })();
  }, []);
  const onCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  const filterByCategories = getProductsByCategories(
    products,
    selectedCategory
  );
  return (
    <>
      <Navbar />
      <main className="pt-8 mt-16 px-4">
        {/* Category Chips */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {categories?.length > 0 &&
            categories.map((category) => (
              <div
                key={category.id}
                className="px-4 py-2 text-sm sm:text-base font-semibold rounded-full 
                         bg-gradient-to-br from-gray-900/80 to-black/90 backdrop-blur-xl 
                         border border-gray-700/50 shadow-md text-white/90
                         hover:from-cyan-600/30 hover:to-blue-600/30 hover:border-cyan-400 
                         hover:text-cyan-300 transition-all duration-300 cursor-pointer
                         select-none"
                onClick={() => onCategoryClick(category.name)}
              >
                {category.name}
              </div>
            ))}
        </div>


        <div className="flex flex-wrap gap-8 justify-center">
          {filterByCategories?.length > 0 ? (
            filterByCategories.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <h2
              className="text-xl md:text-2xl font-semibold text-gray-300 mt-8 
                   bg-gradient-to-r from-gray-900/70 to-black/80 
                   px-6 py-3 rounded-xl border border-gray-700/50 
                   shadow-lg backdrop-blur-md"
            >
              🚫 No Products Found
            </h2>
          )}
        </div>
      </main>
    </>
  );
};
