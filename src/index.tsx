import React from "react";
import ReactDOMClient from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import "./main.scss";
import store from "./store";

const root = ReactDOMClient.createRoot(
  document.getElementById("root") as HTMLDivElement
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
