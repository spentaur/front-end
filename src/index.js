import React from "react";
import ReactDOM from "react-dom";
import { AuthProvider } from "./contexts/auth-context";
import { UserProvider } from "./contexts/user-context";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <UserProvider>
    <AuthProvider>
      <App />
    </AuthProvider>
  </UserProvider>,
  document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
