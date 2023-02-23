import React from "react";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import "./assets/app.css";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import CartEmpty from './pages/CartEmpty'
import Login from "./pages/Login";
function App() {
  return ( 
    <div className="App">
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/cartEmpty" element={<CartEmpty />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
