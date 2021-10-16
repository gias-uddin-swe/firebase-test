import React from "react";
import useFirebase from "./../../Hook/useFirebase";
import "./Header.css";
const Header = () => {
  const { user, error } = useFirebase();
  console.log(error);

  return (
    <div>
      <ul className="d-flex justify-content-center p-2 m-3">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Login</li>
        <button>LogOut</button>
      </ul>
      <h1>{user?.email}</h1>
    </div>
  );
};

export default Header;
