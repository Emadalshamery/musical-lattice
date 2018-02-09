import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "normalize.css";
import "material-components-web/dist/material-components-web.min.css";
import "material-design-icons/iconfont/material-icons.css";

import Root from "./components/Root";

const rootElement = document.querySelector("#root");
let renderRoot;

if (process.env.NODE_ENV === "production") {
  renderRoot = () => {
    ReactDOM.render(
      <BrowserRouter>
        <Root />
      </BrowserRouter>,
      rootElement
    );
  };
} else {
  const { AppContainer } = require("react-hot-loader");

  renderRoot = () => {
    ReactDOM.render(
      <AppContainer>
        <BrowserRouter>
          <Root />
        </BrowserRouter>
      </AppContainer>,
      rootElement
    );
  };
}

renderRoot();

if (process.env.NODE_ENV !== "production") {
  if (module.hot) {
    module.hot.accept("./components/Root", renderRoot);
  }
}
