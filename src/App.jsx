// App entry — defines routes and wraps every page in the shared Header/Footer shell.
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { CartProvider } from "./context/CartContext.jsx";
import { ToastProvider } from "./context/ToastContext.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Franchise from "./pages/Franchise.jsx";
import Cart from "./pages/Cart.jsx";
import Policy from "./pages/Policy.jsx";
import Account from "./pages/Account.jsx";
import SignUp from "./pages/SignUp.jsx";
import Login from "./pages/Login.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <CartProvider>
        <ToastProvider>
        <div className="flex min-h-screen flex-col">
          <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/franchise" element={<Franchise />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/account" element={<Account />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/shipping" element={<Policy title="Shipping" body="Free delivery on orders over R500. Nationwide shipping within 2–4 business days." />} />
            <Route path="/returns" element={<Policy title="Returns" body="Unopened beans may be returned within 14 days of delivery." />} />
            <Route path="/privacy" element={<Policy title="Privacy Policy" body="We only use your details to fulfil and improve your orders." />} />
            <Route path="/terms" element={<Policy title="Terms" body="By using this site you agree to our standard terms of sale." />} />
          </Routes>
        </main>
        <Footer />
      </div>
      </ToastProvider>
      </CartProvider>
    </BrowserRouter>
  );
}
