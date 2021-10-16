import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";
import useFirebase from "./Hook/useFirebase";
import Header from "./components/Header/Header";

function App() {
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
    <div className="App">
      <Header user={user}></Header>
      <h1>Hello App.js</h1>
      <button onClick={googleSignIn}>google sign in</button>
      <button className="m-2" onClick={githubSignIn}>
        Github sign in
      </button>

      <div className="form-input">
        <input onChange={handleEmail} className="mt-2" type="email" />
        <br />
        <input onChange={handlePassword} className="mt-2" type="password" />
        <br />
        <button onClick={handleSubmit} className="mt-2">
          Register
        </button>
        <button onClick={handleSignIn} className="mt-2">
          Login
        </button>
      </div>
    </div>
  );
}

export default App;
