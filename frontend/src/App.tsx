import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ProtectedRoutes from "./components/ProtectedRoutes";

import UserPagesContainer from "./pages/user/UserPagesContainer";
import Home from "./pages/user/Home";
import Orders from "./pages/user/Orders";
import Cart from "./pages/user/Cart";
import Order from "./pages/user/Order";
import Page404 from "./pages/Page404";

function App() {

  return (
    <Router>
      <Routes>
        <Route element={<UserPagesContainer />}>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Page404 />} />
          <Route path="/mobile-app" element={<Page404 />} />
          <Route path="/contact-us" element={<Page404 />} />
          <Route path="/delivery" element={<Page404 />} />
          <Route path="/privacy-policy" element={<Page404 />} />
          <Route path="/about-us" element={<Page404 />} />

          <Route element={<ProtectedRoutes />}>
            <Route path="/orders" element={<Orders />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<Order />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
