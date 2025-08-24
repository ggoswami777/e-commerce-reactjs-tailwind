import { useCart } from "../../context/cart-context";
import { getTotalCartAmount } from "../../utils/getTotalCartAmount";

export const PriceDetails = () => {
    const {cart}=useCart();
    const totalCartAmount = getTotalCartAmount(cart);
    const DeliveryCharge=cart.length>0?49:0;
  return (
    <div className="bg-gradient-to-br from-gray-900/90 to-black/95 backdrop-blur-xl border border-gray-700/40 rounded-2xl shadow-lg p-5 sm:p-6 md:p-8 w-full max-w-md mx-auto h-[50vh]">
      {/* Title */}
      <h2 className="text-xl sm:text-2xl font-bold text-white/90 border-b border-gray-700/50 pb-3 mb-4">
        Price Details
      </h2>

      {/* Price Breakdown */}
      <div className="space-y-3 text-gray-300">
        <div className="flex justify-between">
          <p className="text-sm sm:text-base">Price ({cart.length}items)</p>
          <p className="font-medium">Rs. {totalCartAmount}</p>
        </div>

        <div className="flex justify-between">
          <p className="text-sm sm:text-base">Delivery Charges</p>
          <p className="font-medium text-green-400">Rs. {cart.length > 0 ? DeliveryCharge : 0}</p>
        </div>
      </div>

      {/* Total */}
      <div className="flex justify-between border-t border-gray-700/50 mt-4 pt-4 text-white font-semibold text-lg sm:text-xl">
        <p>Total Amount</p>
        <p>Rs. {totalCartAmount+DeliveryCharge}</p>
      </div>

      {/* CTA Button */}
      <button className="mt-6 w-full py-3 px-4 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 text-white font-bold rounded-xl hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 border border-cyan-500/30 hover:border-cyan-400 shadow-md hover:shadow-cyan-500/30">
        PLACE ORDER
      </button>
    </div>
  );
};
