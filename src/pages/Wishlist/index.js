import { Navbar } from "../../components/Navbar"
import { WishlistCard } from "../../components/WishlistCard"
import { useCart } from "../../context/cart-context"


export const Wishlist=()=>{
    const {wishlist}=useCart();
    return(
        <>
        <Navbar />
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 px-4 sm:px-6 lg:px-8 py-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white/90 mb-8 sm:mb-12 text-center lg:text-left bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                    My Wishlist
                </h1>
                
                {wishlist.length === 0 ? (
                    <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
                        <div className="text-6xl sm:text-8xl mb-6 opacity-50">💔</div>
                        <h2 className="text-xl sm:text-2xl text-gray-400 mb-2">Your wishlist is empty</h2>
                        <p className="text-gray-500">Add some products to your wishlist to see them here</p>
                    </div>
                ) : (
                    <div className="flex flex-col gap-6 sm:gap-8">
                        {wishlist.map((product) => (
                            <WishlistCard key={product.id} product={product} />
                        ))}
                    </div>
                )}
            </div>
        </div>
        </>
    )
}