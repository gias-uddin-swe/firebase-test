import FirebaseInit from "../Firebase/Firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

FirebaseInit();

const useFirebase = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  const history = useHistory();

  const googleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        setError("");
        history.push("/home");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const githubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        setUser(result.user);
        setError("");
        history.push("/home");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // handle user register

  const handleUserRegister = (email, password) => {
    console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        setError("");
        history.push("/home");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleLogin = (email, password) => {
    console.log(email, password);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        console.log(result.user);
        setError("");
        history.push("/home");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setError("");
      }
    });
  }, []);

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return {
    googleSignIn,
    githubSignIn,
    handleUserRegister,
    handleLogin,
    user,
    error,
    handleLogOut,
  };
};
export default useFirebase;
