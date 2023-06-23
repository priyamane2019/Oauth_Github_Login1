import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-we4insf8dbdm38it.us.auth0.com"
    clientId="0bBW2VgZ3KjsJiaNe5ifqJt2J1Sl1lQv"
    redirectUri={window.location.origin}>
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);


/*
dev-we4insf8dbdm38it.us.auth0.com
0bBW2VgZ3KjsJiaNe5ifqJt2J1Sl1lQv

9f0112ac99c0b20b2fd6
334bcd9ff1ab60546886e164cf7ec4f5cd8ff4e6
*/

