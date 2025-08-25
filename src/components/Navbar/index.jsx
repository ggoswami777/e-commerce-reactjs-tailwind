import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../context/login-context";


export const Navbar = () => {
  const navigate = useNavigate();
  const [isAccountDropDownOpen, setIsAccountDropDownOpen] = useState(false);
  const {token,loginDispatch}=useLogin();
  const onLoginClick = () => {
    if(token?.access_token){
      navigate('/auth/login');
    }else{
      loginDispatch({
        type:'LOGOUT'
      })
      navigate('/auth/login');
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center bg-gradient-to-r from-gray-900 via-black to-gray-800 backdrop-blur-xl bg-opacity-90 p-4 text-white shadow-2xl border-b border-gray-700/30">
      {/* Logo */}
      <h1
        onClick={() => navigate("/")}
        className="text-2xl select-none md:text-4xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent cursor-pointer"
      >
        SHOP IT
      </h1>

      {/* Search Bar */}
      <div className="flex-1 px-4 hidden sm:flex justify-center">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full max-w-md px-4 py-2 rounded-xl bg-gradient-to-r from-gray-800/70 to-gray-700/70 backdrop-blur-md border border-gray-600/40 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300"
        />
      </div>

      {/* Icons */}
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
        <div className="relative">
          <span
            onClick={() =>
              setIsAccountDropDownOpen(!isAccountDropDownOpen)
            }
            className="material-icons-outlined text-2xl sm:text-3xl cursor-pointer hover:scale-110 hover:text-cyan-400 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.6)] p-2 rounded-full hover:bg-white/10 backdrop-blur-sm"
          >
            account_circle
          </span>
          {isAccountDropDownOpen && (
            <div className="absolute right-0 ">
              <button
                className="w-full px-4 py-2 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 backdrop-blur-sm text-white font-semibold rounded-xl flex items-center justify-center gap-2 hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 border border-cyan-500/30 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/25"
                onClick={onLoginClick}
              >
                {
                  token?.access_token?"Logout":"Login"
                }
                
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};
