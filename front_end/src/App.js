import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {HomePage} from "./components/HomePage";
import {Cart} from "./components/Cart";
import {ProductDetail} from "./components/ProductDetail";
import {LoginAndRegister} from "./components/LoginAndRegister";
import {ToastContainer} from "react-toastify";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/hompage" element={<HomePage/>}></Route>
          <Route path="/login" element={<LoginAndRegister/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/product-detail" element={<ProductDetail/>}></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer/>
    </>
  );
}

export default App;
