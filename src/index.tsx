import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline } from "@mui/material";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { SumProvider } from "./context/sumContext";
import { LessonsProvider } from "./context/lessonsContext";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import "./firebase";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./context/userContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <CssBaseline />
    <ToastContainer theme="light" />
    <UserProvider>
      <SumProvider>
        <LessonsProvider>
          <App />
        </LessonsProvider>
      </SumProvider>
    </UserProvider>
  </React.StrictMode>
);

reportWebVitals();
