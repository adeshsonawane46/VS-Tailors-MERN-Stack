import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Sidebar from "./Sidebar";

import "../styles/navbar.css";

import logo from "/Images/VS Tailor Website Logo Fix.png";
import profileIcon from "/Images/Profile-icon.png";

function Navbar() {

const [sidebarOpen, setSidebarOpen] = useState(false);
const [profileDropdown, setProfileDropdown] = useState(false);
const [isLoggedIn, setIsLoggedIn] = useState(false);

useEffect(() => {
const logged = localStorage.getItem("loggedIn") === "true";
setIsLoggedIn(logged);
}, []);

const logoutUser = () => {
localStorage.removeItem("loggedIn");
localStorage.removeItem("token");
setIsLoggedIn(false);
setProfileDropdown(false);
};

return (
<>
{/* Header */} <section id="header">

    <Link to="/">
      <img src={logo} width="160" className="logo" alt="VS Tailors" />
    </Link>

    {/* Desktop Navbar */}
    <ul id="navbar">

      <li>
        <NavLink to="/" end>Home</NavLink>
      </li>

      <li>
        <NavLink to="/products">Products</NavLink>
      </li>

      <li>
        <NavLink to="/about">About</NavLink>
      </li>

      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>

      {!isLoggedIn && (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}

      {isLoggedIn && (
        <li style={{ position: "relative" }}>

          <span
            style={{ cursor: "pointer" }}
            onClick={() => setProfileDropdown(!profileDropdown)}
          >
            <img
              src={profileIcon}
              alt="Profile"
              width="23"
              style={{ borderRadius: "50%" }}
            />
          </span>

          {profileDropdown && (
            <ul
              style={{
                position: "absolute",
                top: "40px",
                right: "0",
                background: "#fff",
                listStyle: "none",
                padding: "10px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
              }}
            >
              <li
                style={{ cursor: "pointer" }}
                onClick={logoutUser}
              >
                Logout
              </li>
            </ul>
          )}

        </li>
      )}

    </ul>

    {/* Hamburger */}
    <span
      id="hamburger"
      onClick={() => setSidebarOpen(!sidebarOpen)}
    >
      ☰
    </span>

  </section>

  {/* Sidebar Component */}
  {sidebarOpen && (

  <div
    className="sidebar-overlay"
    onClick={() => setSidebarOpen(false)}
  ></div>
)}

  <Sidebar
  sidebarOpen={sidebarOpen}
  setSidebarOpen={setSidebarOpen}
  isLoggedIn={isLoggedIn}
  logoutUser={logoutUser}
  />

</>

);
}

export default Navbar;
