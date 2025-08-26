import { useNavigate } from "react-router-dom";
import { userLogin } from "../../api/auth";
import { useLogin } from "../../context/login-context";

export const Login = () => {
  const { loginDispatch, email, password} = useLogin();
  const navigate = useNavigate();

  const onFormSubmit = async (e) => {
    e.preventDefault();
    const data = await userLogin(email, password);
    loginDispatch({
      type: "TOKEN",
      payload: {
        token: data,
      },
    });
    if (data.access_token) {
      navigate("/");
    }
    console.log(data);
  };

  const onEmailChange = (e) => {
    loginDispatch({
      type: "EMAIL",
      payload: {
        value: e.target.value,
      },
    });
  };

  const onPasswordChange = (e) => {
    loginDispatch({
      type: "PASSWORD",
      payload: {
        value: e.target.value,
      },
    });
  };

  return (
    <form
      onSubmit={onFormSubmit}
      className="w-full max-w-md mx-auto mt-20 bg-gradient-to-br from-gray-900/80 to-black/90 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-xl p-6 sm:p-8"
    >
      <div className="mb-4">
        <span className="block text-sm font-medium text-gray-300 mb-2">
          Email *
        </span>
        <input
          onChange={onEmailChange}
          type="email"
          required
          placeholder="Enter your email"
          className="w-full px-4 py-3 rounded-xl bg-gray-800/60 text-white placeholder-gray-400 border border-gray-700/40 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-400 transition-all"
        />
      </div>

      <div className="mb-6">
        <span className="block text-sm font-medium text-gray-300 mb-2">
          Password
        </span>
        <input
          onChange={onPasswordChange}
          type="password"
          required
          placeholder="Enter your password"
          className="w-full px-4 py-3 rounded-xl bg-gray-800/60 text-white placeholder-gray-400 border border-gray-700/40 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-400 transition-all"
        />
      </div>

      <div>
        <button className="w-full mt-3 py-3 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 backdrop-blur-sm text-white font-semibold rounded-xl flex items-center justify-center gap-2 hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 border border-cyan-500/30 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/25 group/cart">
          Login
        </button>
      </div>

      {/* Demo credentials info */}
      <div className="mt-6 p-4 rounded-xl bg-gray-800/50 border border-gray-700/40 text-gray-300 text-sm sm:text-base">
        <p className="font-semibold text-white/90 mb-2">Demo Credentials:</p>
        <p>
          <span className="text-cyan-400 font-medium">Email:</span>{" "}
          john@mail.com
        </p>
        <p>
          <span className="text-cyan-400 font-medium">Password:</span>{" "}
          changeme
        </p>
      </div>
    </form>
  );
};
