import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

/* axios */
import axios from "axios";
/* import bootstrap to react project */
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
/* React rounter dom */
import { BrowserRouter } from "react-router-dom";

/* axios config */
axios.defaults.baseURL = process.env.REACT_APP_BASE_API_URL;

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    //if token saved in localStorage then
    //I want to add the token to the header of the request
    console.log("token", token);
    config.headers["x-auth-token"] = token;
  }
  return config;
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
