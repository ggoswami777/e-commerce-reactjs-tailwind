import { Login } from "../../components/Login";
import { Navbar } from "../../components/Navbar";
export const AuthLogin = () => {
  return (
    <>
      <Navbar />
      <main className="flex justify-center items-center min-h-screen">
        <Login />
      </main>
    </>
  );
};
