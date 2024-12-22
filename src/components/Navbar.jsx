import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => setIsOpen(!isOpen);

  return (
    <div className="nav-bar-container">
      <div className="mobile-nav-bar">
        <FontAwesomeIcon
          icon={faBars}
          className="menu-icon"
          onClick={() => toggleIsOpen()}
        />
        <Link to="/" id="logo">
          GW
        </Link>
      </div>
      <div className={isOpen ? "nav-bar" : "nav-bar closed"}>
        <FontAwesomeIcon
          icon={faBars}
          className="menu-icon-inside-nav"
          onClick={() => toggleIsOpen()}
        />
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/watches"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Watches
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Cart
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          About
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
