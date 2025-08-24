import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center bg-gradient-to-r from-gray-900 via-black to-gray-800 backdrop-blur-xl bg-opacity-90 p-4 text-white shadow-2xl border-b border-gray-700/30">
      <h1
        onClick={() => navigate("/")}
        className="text-2xl select-none md:text-4xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent cursor-pointer"
      >
        SHOP IT
      </h1>

      <nav className="ml-auto flex gap-4 sm:gap-6">
        <span
          onClick={() => navigate("/wishlist")}
          className="material-icons-outlined text-2xl sm:text-3xl cursor-pointer hover:scale-110 hover:text-cyan-400 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.6)] p-2 rounded-full hover:bg-white/10 backdrop-blur-sm"
        >
          favorite
        </span>
        <span
          onClick={() => navigate("/cart")}
          className="material-icons-outlined text-2xl sm:text-3xl cursor-pointer hover:scale-110 hover:text-cyan-400 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.6)] p-2 rounded-full hover:bg-white/10 backdrop-blur-sm"
        >
          shopping_cart
        </span>
        <span className="material-icons-outlined text-2xl sm:text-3xl cursor-pointer hover:scale-110 hover:text-cyan-400 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.6)] p-2 rounded-full hover:bg-white/10 backdrop-blur-sm">
          account_circle
        </span>
      </nav>
    </header>
  );
};
