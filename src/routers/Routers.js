import Cart from "pages/Cart";
import Checkout from "pages/Checkout";
import Home from "pages/Home";
import Login from "pages/Login";
import PageNotFound from "pages/PageNotFound";
import ProductDetails from "pages/ProductDetails";
import Shop from "pages/Shop";
import Signup from "pages/Signup";
import { Navigate, Route, Routes } from "react-router-dom";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to='home' />} />

      <Route path="home" element={<Home />} />
      <Route path="shop" element={<Shop/>} />
      <Route path="shop/:id" element={<ProductDetails/>} />
      <Route path="cart" element={<Cart />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Routers;
