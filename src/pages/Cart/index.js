import { HorizontalProductCard } from "../../components/HorizontalProductCard";
import { Navbar } from "../../components/Navbar";
import { PriceDetails } from "../../components/PriceDetails";
import { useCart } from "../../context/cart-context";

export const Cart = () => {
  const { cart } = useCart();
  return (
    <>
      <Navbar />
      <div className="mt-16">
        <main className="flex flex-col gap-4 px-5 py-6 w-full max-w-7xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-semibold text-white/90">
            My Cart
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
            <div className="lg:col-span-2 space-y-4">
              {cart?.length > 0 ? (
                cart.map((product) => (
                  <HorizontalProductCard key={product.id} product={product} />
                ))
              ) : (
                <h2>Your cart is empty</h2>
              )}
            </div>

            <div className="lg:col-span-1">
              <PriceDetails />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
