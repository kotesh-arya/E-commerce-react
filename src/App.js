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
import { ProductPage } from "../src/pages/ProductPage/ProductPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const notify = () => {
  toast("🦄 Wow so easy!", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
function App() {
  return (
    <div className="App">
      <button onClick={notify}>Toast notify</button>
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
        <Route path="/Product/:productId" element={<ProductPage />}>
          Product Page
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
