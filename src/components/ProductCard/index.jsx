import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/cart-context";
import { findProductInCart } from "../../utils/findProductInCart";
import { findProductInWishlist } from "../../utils/findProductInWishlist";

export const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { cart, cartDispatch ,wishlist} = useCart();
  const isProductInCart = findProductInCart(cart, product.id);
  
  const onCartClick = (product) => {
    !isProductInCart
      ? cartDispatch({ type: "ADD_TO_CART", payload: product })
      : navigate('/cart');
  };
  const isProductInWishlist = findProductInWishlist(wishlist, product.id);
  const onWishlistClick = (product) => {
    console.log("wishlist clicked",wishlist);
    !isProductInWishlist
      ? cartDispatch({ type: "ADD_TO_WISHLIST", payload: product })
      : navigate('/wishlist');
  }
  
  return (
    <div className="w-72 bg-gradient-to-br from-gray-900/80 to-black/90 backdrop-blur-xl rounded-2xl shadow-2xl flex flex-col justify-between hover:shadow-cyan-500/20 hover:shadow-2xl transition-all duration-500 border border-gray-700/50 hover:border-cyan-500/30 group">
      {/* Image */}
      <div className="w-full h-52 bg-gradient-to-br from-gray-800/50 to-gray-900/50 flex items-center justify-center overflow-hidden rounded-t-2xl relative">
        <img
          src={product?.images?.[0] || "/placeholder.png"}
          alt={product?.title || "Product"}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
          onError={(e) => (e.currentTarget.src = "/placeholder.png")}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>
      
      {/* Details */}
      <div className="p-4 flex flex-col flex-grow justify-between">
        <h2 className="text-lg font-semibold text-white/90 line-clamp-2 min-h-[3rem] group-hover:text-cyan-100 transition-colors duration-300">
          {product.title}
        </h2>
        <p className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mt-2">
          Rs. {product.price * 25}
        </p>

        <button  onClick={() => onWishlistClick(product)} className="w-full mt-4 py-3 bg-gradient-to-r from-gray-700/50 to-gray-600/50 backdrop-blur-sm text-white font-semibold rounded-xl flex items-center justify-center gap-2 hover:from-pink-500/70 hover:to-purple-500/70 transition-all duration-300 border border-gray-600/30 hover:border-pink-400/50 hover:shadow-lg hover:shadow-pink-500/25 group/wishlist">
          <span className="material-icons-outlined group-hover/wishlist:scale-110 transition-transform duration-200">
            favorite
          </span>
         {isProductInWishlist ? 'Go to Wishlist' : 'Add to Wishlist'}
        </button>
        
        <button 
          onClick={() => onCartClick(product)} 
          className="w-full mt-3 py-3 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 backdrop-blur-sm text-white font-semibold rounded-xl flex items-center justify-center gap-2 hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 border border-cyan-500/30 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/25 group/cart"
        >
          <span className="material-icons-outlined group-hover/cart:scale-110 transition-transform duration-200">
            {isProductInCart ? 'shopping_cart_checkout' : 'shopping_cart'}
          </span>
          {isProductInCart ? 'Go to Cart' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};