import React from "react";
import ReactDom from "react-dom/client";
import App from "./App.jsx";
import { TaskProvider } from "./components/Model.jsx";

ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TaskProvider>
      <App />
    </TaskProvider>
  </React.StrictMode>,
);
