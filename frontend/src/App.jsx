import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
// import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import { AppProvider } from "./AppContext";
import AddFurniture from "./components/AddFurniture";
import BrowseFurniture from "./components/BrowseFurniture";
import { CartProvider } from "./CartContext";
import CartPage from "./components/CartPage";

function App() {
  // let cartitems = 20; //props means property. advantage of global variable is that it can be change
  return (
    <div>
      {/* <h1>My react tab</h1> */}
      {/* <Toaster position = "top-right"/> */}

      <BrowserRouter>
      <AppProvider>
        
          <CartProvider>
          {/* rouetes mtlb address create krna */}
          {/* <Link to ="/login">Login</Link> */}
          {/* <Link to ="/signup">Signup</Link> */}
          {/* <Navbar mycart={cartitems} /> */}
          <Navbar  />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addfurniture" element={<AddFurniture />} />
            <Route path="/browsefurniture" element={<BrowseFurniture />} />
            <Route path="/cartpage" element={<CartPage />} />
            <Route path="/contact" element={<Contact />} />
           
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          </CartProvider>
          </AppProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
