import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import store from "./s2-homeworks/hw10/bll/store";
import { Provider } from "react-redux";
import { App } from "./s1-main/App";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/*для дз 10*/}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
