import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "./../../Hook/useFirebase";
import "./Header.css";
import useAuth from "./../../Hook/useAuth";
const Header = () => {
  const { user, error, handleLogOut } = useAuth();
  console.log(error);

  return (
    <div>
      <ul className="d-flex justify-content-center p-2 m-3">
        <Link to="/home">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>

        {user?.email ? (
          <button className="btn btn-danger" onClick={handleLogOut}>
            LogOut
          </button>
        ) : (
          <Link to="/login">
            <li>Login</li>
          </Link>
        )}
      </ul>
      <p className="mb-5">{user?.email}</p>
    </div>
  );
};

export default Header;
