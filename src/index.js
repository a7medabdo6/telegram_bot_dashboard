/**
=========================================================
* Telegram bot React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import React from "react";

import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "App";
import { store } from "./store";
import { Provider } from "react-redux";
// Telegram bot React Context Provider
import { MaterialUIControllerProvider } from "context";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <BrowserRouter>
        <MaterialUIControllerProvider>
          <App isLoggedIn={false} />
        </MaterialUIControllerProvider>
      </BrowserRouter>
    </Provider>
  </QueryClientProvider>,
  document.getElementById("root")
);
