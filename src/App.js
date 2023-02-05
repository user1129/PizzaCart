import React from "react";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import "./assets/app.css";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
export const SearchContext = React.createContext();
function App() {
  const [input, setInput] = React.useState('');
  return (
    <div className="App">
      <SearchContext.Provider value={{input,setInput}}>
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="*" element = {<NotFound/>}/>
        </Routes>
      </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
