import React, { useState } from "react";
import useFirebase from "./../../Hook/useFirebase";

const Login = () => {
  const { googleSignIn, githubSignIn, handleUserRegister, handleLogin, user } =
    useFirebase();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = () => {
    handleUserRegister(email, password);
  };
  const handleSignIn = () => {
    handleLogin(email, password);
  };
  return (
    <div className="div d-flex justify-content-center align-items-center">
      <div className="row ">
        <div className="col-md-6">
          <div>
            <div className="form-input mt-5">
              <input onChange={handleEmail} className="mt-2 p-2" type="email" />
              <br />
              <input
                onChange={handlePassword}
                className="mt-2 p-2"
                type="password"
              />
              <br />
              <div className="login-regiater-btn mt-4">
                <button onClick={handleSubmit} className="btn btn-primary me-1">
                  Register
                </button>
                <button onClick={handleSignIn} className="btn btn-success ms-1">
                  Login
                </button>
              </div>
            </div>
            <div className="login-btn mt-4">
              <button className="btn btn-warning m-2" onClick={googleSignIn}>
                google sign in
              </button>
              <button className="btn btn-dark m-2" onClick={githubSignIn}>
                Github sign in
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="right-side-image">
            <img
              className="w-100"
              src="https://i.ibb.co/MSBbLcd/access-control-system-abstract-concept-illustration-security-system-authorize-entry-login-credential.jpg"
              alt=""
            />
          </div>
          ;
        </div>
      </div>
    </div>
  );
};

export default Login;
