import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import AddProduct from "./pages/AddProduct";
import Cart from "./pages/Cart";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import SignUp from "./pages/SignUp";
import Login from "./pages/SignIn";
import CheckOut from "./pages/CheckOut";

function App() {
  const [user, setUser] = useState(localStorage.getItem("user"));

  useEffect(() => {
    setUser(localStorage.getItem("user"));
  }, []);

  const logOutUser = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("email");
    setUser(null);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Layout logOutUser={logOutUser} user={user} />}
          >
            <Route path="/" element={<Home />} />
            <Route path="cart" element={<Cart />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="sign-in" element={<Login setUser={setUser} />} />
            <Route path="checkout" element={<CheckOut />} />
          </Route>
          <Route path="add-product" element={<AddProduct />} />
        </Routes>
      </BrowserRouter>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition:Bounce
      />
    </>
  );
}

export default App;
