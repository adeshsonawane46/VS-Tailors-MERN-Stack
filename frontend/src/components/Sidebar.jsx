import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/sidebar.css";

function Sidebar({ sidebarOpen, setSidebarOpen, isLoggedIn, logoutUser }) {

const [showLogout, setShowLogout] = useState(false);

return (
<div
id="sidebar"
style={{ left: sidebarOpen ? "0px" : "-250px" }}
>

<span
className="closebtn"
onClick={() => setSidebarOpen(false)}
> × </span>

<Link to="/" onClick={() => setSidebarOpen(false)}>Home</Link>

<Link to="/products" onClick={() => setSidebarOpen(false)}>
Products
</Link>

<Link to="/about" onClick={() => setSidebarOpen(false)}>
About
</Link>

<Link to="/contact" onClick={() => setSidebarOpen(false)}>
Contact
</Link>

{!isLoggedIn && (
<Link to="/login" onClick={() => setSidebarOpen(false)}>
Login
</Link>
)}

{isLoggedIn && (
<div className="sidebar-profile">

<img
src="/Images/Profile-icon.png"
alt="Profile"
onClick={() => setShowLogout(!showLogout)}
/>

{showLogout && (
<span
className="logout-text"
onClick={() => {
logoutUser();
setSidebarOpen(false);
}}
>
Logout
</span>
)}

</div>
)}

</div>
);
}

export default Sidebar;