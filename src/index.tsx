import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import "./firebase";
import { CssBaseline } from "@mui/material";
import { SumProvider } from "./context/sumContext";
import { LessonsProvider } from "./context/lessonsContext";
import { ModalProvider } from "./context/modalContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <CssBaseline />
    <ModalProvider>
      <SumProvider>
        <LessonsProvider>
          <App />
        </LessonsProvider>
      </SumProvider>
    </ModalProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
