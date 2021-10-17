import React from "react";
import { useContext, createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";
import useFirebase from "../../Hook/useFirebase";

const PrivateRoute = ({ children, ...rest }) => {
  const { user } = useFirebase();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
