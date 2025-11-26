import { NavLink, Outlet } from "react-router-dom";
import "./RootLayout.css";

function RootLayout() {
  return (
    <div>
      <nav className="navbar">
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? "navlink active" : "navlink"}
        >
          Home
        </NavLink>

        <NavLink 
          to="/blog" 
          className={({ isActive }) => isActive ? "navlink active" : "navlink"}
        >
          Blog
        </NavLink>

        <NavLink 
          to="/about" 
          className={({ isActive }) => isActive ? "navlink active" : "navlink"}
        >
          About
        </NavLink>
      </nav>

      <Outlet />
    </div>
  );
}

export default RootLayout;
