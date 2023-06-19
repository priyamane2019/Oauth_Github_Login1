import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-b3kobca0hwxyxmp0.us.auth0.com"
    clientId="RAoiV3maIH8ssGOsqvzF8vUvuhO64jqR"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);

