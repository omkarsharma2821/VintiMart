import "./App.css";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import { AppProvider } from "./AppContext";
import AddFurniture from "./components/AddFurniture";
import BrowseFurniture from "./components/BrowseFurniture";
import { CartProvider } from "./CartContext";
import CartPage from "./components/CartPage";
import {Toaster} from 'react-hot-toast';
import UserAuth from "./UserAuth";
import ViewOrders from "./components/ViewOrders";
import Footer from "./components/Footer";

function App() {
  // let cartitems = 20; //props means property. advantage of global variable is that it can be change
  // const myStyle={backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '100vh' }
  return (
    <div>
      {/* <div style={myStyle}> */}
      <Toaster position = "top-right"/>
      <BrowserRouter>
      <AppProvider>
        
          <CartProvider>
          {/* rouetes mtlb address create krna */}
          {/* <Link to ="/login">Login</Link> */}
          {/* <Link to ="/signup">Signup</Link> */}
          {/* <Navbar mycart={cartitems} /> */}
          <Navbar  />
         {/* <img src={homebg} alt="" /> */}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addfurniture" element={<UserAuth><AddFurniture /></UserAuth>} />
            <Route path="/browsefurniture" element={<BrowseFurniture />} />
            <Route path="/cartpage" element={<UserAuth><CartPage /></UserAuth>} />
            <Route path="/contact" element={<UserAuth><Contact /></UserAuth>} />
           
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            {/* <Route path="/drop" element={<Dropzone />} /> */}
            <Route path="/view" element={<ViewOrders />} />
            <Route path="*" element={<NotFound />} />
            {/* <Route path="/footer" element={<Footer/>} /> */}
          </Routes>
          <Footer/>
          </CartProvider>
          </AppProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
