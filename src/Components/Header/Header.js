import React from 'react';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';

const Header = () => {
    
  let {pathname} = useLocation();
//   console.log("this is location", location);
    const navColor = pathname === "/login" ? "text-dark" : "text-dark"

    const { user, logOut } = useAuth();
    
    return (
      <div className="header d-flex justify-content-between p-3 mx-5">
        <NavLink className={navColor} id="logo" to="/home">
          City Ride
        </NavLink>
        <nav>
          <NavLink className={navColor} to="/home">
            Home
          </NavLink>
          <NavLink className={navColor} to="/contact">
            Contact
          </NavLink>
          <NavLink className={navColor} to="/blog">
            Blog
          </NavLink>
          <NavLink className={navColor} to="/map">
            Map
          </NavLink>
          <span>{user.email} </span>
          {user.email ? (
            <button
              className="btn btn-outline-dark log-out-btn"
              onClick={logOut}
            >
              LogOut
            </button>
          ) : (
            <NavLink className={navColor} to="/login">
              Login
            </NavLink>
          )}
        </nav>
      </div>
    );
};

export default Header;