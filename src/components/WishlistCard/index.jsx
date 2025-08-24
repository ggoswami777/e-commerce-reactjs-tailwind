import { useCart } from "../../context/cart-context";
import { findProductInCart } from "../../utils/findProductInCart";

export const WishlistCard = ({ product }) => {
    const { cart } = useCart();
    const isProductInCart = findProductInCart(cart, product.id);
    const { cartDispatch } = useCart();
     const onCartClick = (product) => {
    !isProductInCart
      ? cartDispatch({ type: "ADD_TO_CART", payload: product })
      : cartDispatch({ type: "REMOVE_FROM_CART", payload: product });
  };
  const onRemoveWishlistClick = (product) => {
    cartDispatch({ type: "REMOVE_FROM_WISHLIST", payload: { id: product.id } });
  };
  return (
    <div className="bg-gradient-to-br from-gray-900/80 to-black/90 backdrop-blur-xl rounded-2xl shadow-2xl flex flex-col lg:flex-row hover:shadow-cyan-500/20 hover:shadow-2xl transition-all duration-500 border border-gray-700/50 hover:border-cyan-500/30 group w-full max-w-4xl mx-auto">
      {/* Image Container */}
      <div className="relative w-full h-64 sm:h-72 lg:w-80 lg:h-60 xl:h-64 bg-gradient-to-br from-gray-800/50 to-gray-900/50 flex items-center justify-center overflow-hidden rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none flex-shrink-0">
        <img
          src={product.images[0]}
          alt={product.title || "product"}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
      </div>

      {/* Card Details */}
      <div className="flex flex-col justify-between p-6 lg:p-8 flex-1 min-h-[250px] lg:min-h-[240px]">
        {/* Title */}
        <div className="text-xl sm:text-2xl lg:text-xl xl:text-2xl font-bold text-white/90 group-hover:text-cyan-100 transition-colors duration-300 line-clamp-2 mb-4">
          {product.title}
        </div>

        {/* Description */}
        <div className="flex-1">
          <p className="text-gray-300 text-base lg:text-lg mb-4">
            Men Sneakers
          </p>
          <div className="flex items-center gap-3 flex-wrap mb-6">
            <span className="text-2xl sm:text-3xl lg:text-2xl xl:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Rs.{product.price * 25}
            </span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-auto">
          <button
            onClick={() => onCartClick(product)}
            className="flex-1 py-3 sm:py-4 px-4 sm:px-6 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 backdrop-blur-sm text-white font-semibold rounded-xl flex items-center justify-center gap-2 hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 border border-cyan-500/30 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/25 group/cart text-sm sm:text-base"
          >
            <span className="material-icons-outlined text-lg group-hover/cart:scale-110 transition-transform duration-200">
              {isProductInCart ? 'shopping_cart_checkout' : 'shopping_cart'}
            </span>
            {isProductInCart ? 'Remove from Cart' : 'Add to Cart'}
          </button>

          <button onClick={() => onRemoveWishlistClick(product)} className="flex-1 py-3 sm:py-4 px-4 sm:px-6 bg-gradient-to-r from-gray-700/50 to-gray-600/50 backdrop-blur-sm text-white font-semibold rounded-xl flex items-center justify-center gap-2 hover:from-pink-500/70 hover:to-purple-500/70 transition-all duration-300 border border-gray-600/30 hover:border-pink-400/50 hover:shadow-lg hover:shadow-pink-500/25 group/wishlist text-sm sm:text-base">
            <span className="text-red-400 text-lg group-hover/wishlist:scale-110 transition-transform duration-200">
              ❤️
            </span>
            Remove from Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};