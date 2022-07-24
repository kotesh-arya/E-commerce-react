import "./App.css";
import { HomePage } from "./pages/HomePage/HomePage";
import { ProductList } from "./pages/ProductList/ProductList";
import { WishList } from "./pages/WishList/WishList";
import { Cart } from "./pages/Cart/Cart";
import { SignUp } from "./pages/SignUp/SignUp";
import { SignIn } from "./pages/SignIn/SignIn";
import { UserInfo } from "./pages/UserInfo/UserInfo";
import { Routes, Route } from "react-router-dom";
import { RequiresAuth } from "./RequiresAuth";
import { NotFound } from "./pages/NotFound/NotFound";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}>
          Home
        </Route>
        <Route path="/ProductList">
          <Route index element={<ProductList />} />
          <Route path="/ProductList/:category" element={<ProductList />} />
        </Route>
        <Route path="/UserInfo" element={<UserInfo />}>
          UserInfo
        </Route>
        <Route
          path="/WishList"
          element={
            <RequiresAuth>
              <WishList />
            </RequiresAuth>
          }
        >
          Wishlist
        </Route>
        <Route
          path="/Cart"
          element={
            <RequiresAuth>
              <Cart />
            </RequiresAuth>
          }
        >
          Cart
        </Route>
        <Route path="/SignUp" element={<SignUp />}>
          Sign Up
        </Route>
        <Route path="/SignIn" element={<SignIn />}>
          Sign In
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
