import React from 'react';
import './index.css';
import App from './App';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { store } from "./reduxxx/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);


