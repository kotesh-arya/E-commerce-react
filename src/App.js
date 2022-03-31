import "./App.css";
import logo from "./logo.png";
import { HomePage } from "./pages/HomePage/HomePage";
import { ProductList } from "./pages/ProductList/ProductList";
import { WishList } from "./pages/WishList/WishList";
import { Cart } from "./pages/Cart/Cart";
import { SignUp } from "./pages/SignUp/SignUp";
import { SignIn } from "./pages/SignIn/SignIn";
import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
     {/* <HomePage/> */}
    
     <Routes>
       <Route path="/" element={<HomePage/>} >Home</Route>
       <Route path="/ProductList" element={<ProductList/>} >ProductList</Route>
       <Route path="/WishList" element={<WishList/>} >Wishlist</Route>
       <Route path="/Cart" element={<Cart/>} >Cart</Route>
       <Route path="/SignUp" element={<SignUp/>} >Sign Up</Route>
       <Route path="/SignIn" element={<SignIn/>} >Sign In</Route>
     </Routes>
    </div>
  );
}

export default App;
