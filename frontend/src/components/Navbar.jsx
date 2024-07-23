import React from "react";
import { NavLink } from "react-router-dom";
import useAppContext from "../AppContext";
import useCartContext from "../CartContext";

const Navbar = ({ mycart }) => {
  const { loggedIn, setLoggedIn, logout } = useAppContext();

  const handleNavClick = () => {
    if (window.innerWidth < 992) {
      document.querySelector('.navbar-toggler').click();
    }
  };
  
  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      logout();
    }
  };

  const showLoginOptions = () => {
    if (loggedIn) {
      return (
        <button className="btn btn-danger" onClick={handleLogout}>
          Logout
        </button>
      );
    } else {
      return (
        <>
          <button className="d-flex px-4 btn btn-outline-primary me-2 active">
            <NavLink className="nav-link" to="/login" onClick={handleNavClick}>
              Login
            </NavLink>
          </button>
          <button className="d-flex px-4 btn btn-outline-primary active">
            <NavLink className="nav-link" to="/signup" onClick={handleNavClick}>
              Sign up
            </NavLink>
          </button>
        </>
      );
    }
  };
  return (
    <nav className="sticky-top navbar navbar-expand-lg navFont shadow-sm">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to={"/"}>
          <span className="px-3" style={{ fontSize: "26px" }}>
            VintiMart
          </span>
          <span className="px-">
            <i class="fa-solid fa-bounce fa-chair  fa-xl"></i>
          </span>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" onClick={handleNavClick}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/addfurniture" onClick={handleNavClick}>
                Add Furniture
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/browsefurniture" onClick={handleNavClick}>
                Browse Furniture
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact" onClick={handleNavClick}>
                Contact Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/view" onClick={handleNavClick}>
                View Order
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/cartpage" onClick={handleNavClick}>
                <span className="px-2">
                  <i class="fa-solid fa-cart-shopping fa-xl style={color: #9d9dd8}"></i>
                </span>
              </NavLink>
            </li>
          </ul>
          {showLoginOptions()}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
