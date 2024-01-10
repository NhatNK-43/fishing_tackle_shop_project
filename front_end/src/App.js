import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {HomePage} from "./components/HomePage";
import {Cart} from "./components/Cart";
import {ProductDetail} from "./components/ProductDetail";
import {Login} from "./components/Login";
import {Register} from "./components/Register";
import {ToastContainer} from "react-toastify";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle";
import "mdb-ui-kit/css/mdb.min.css";
import "mdb-ui-kit/js/mdb.umd.min";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomePage/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/product-detail" element={<ProductDetail/>}></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer/>
    </>
  );
}

export default App;
