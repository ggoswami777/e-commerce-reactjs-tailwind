import { useCart } from "../../context/cart-context";

export const HorizontalProductCard = ({ product }) => {
  const { cartDispatch } = useCart();
  const onRemoveClick = (product) => {
    cartDispatch({ type: "REMOVE_FROM_CART", payload: { id: product.id } });
  }

  return (
    <div className="bg-gradient-to-br from-gray-900/80 to-black/90 backdrop-blur-xl rounded-2xl shadow-2xl flex flex-col md:flex-row hover:shadow-cyan-500/20 hover:shadow-2xl transition-all duration-500 border border-gray-700/50 hover:border-cyan-500/30 group w-full">
      
      {/* Image Container */}
      <div className="relative w-full h-52 sm:h-60 md:w-64 md:h-48 bg-gradient-to-br from-gray-800/50 to-gray-900/50 flex items-center justify-center overflow-hidden rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none">
        <img
          src={product.images[0]}
          alt={product.title || 'product'}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
      </div>

      {/* Card Details */}
      <div className="flex flex-col justify-between p-4 md:p-6 flex-1">
        {/* Title */}
        <div className="text-lg sm:text-xl font-bold text-white/90 group-hover:text-cyan-100 transition-colors duration-300">
          {product.title}
        </div>

        {/* Description */}
        <div className="mt-2">
          <p className="text-gray-300 text-sm sm:text-base mb-2 sm:mb-3">
            Men Sneakers
          </p>
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Rs.{product.price * 25}
            </span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-4 md:mt-6">
          <button onClick={()=> onRemoveClick(product)} className="flex-1 py-2 sm:py-3 px-3 sm:px-4 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 backdrop-blur-sm text-white font-semibold rounded-xl flex items-center justify-center gap-2 hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 border border-cyan-500/30 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/25 group/cart">
            <span className="material-icons-outlined text-sm group-hover/cart:scale-110 transition-transform duration-200">
              shopping_cart_checkout
            </span>
            Remove from Cart
          </button>

          <button className="flex-1 py-2 sm:py-3 px-3 sm:px-4 bg-gradient-to-r from-gray-700/50 to-gray-600/50 backdrop-blur-sm text-white font-semibold rounded-xl flex items-center justify-center gap-2 hover:from-pink-500/70 hover:to-purple-500/70 transition-all duration-300 border border-gray-600/30 hover:border-pink-400/50 hover:shadow-lg hover:shadow-pink-500/25 group/wishlist">
            <span className="text-red-400 group-hover/wishlist:scale-110 transition-transform duration-200">
              ❤️
            </span>
            Move to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};
