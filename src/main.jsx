import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import router from './routers/index';
import { RouterProvider } from "react-router-dom";
import { ThemeContextProvider } from './contexts/ThemeContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeContextProvider>
    <RouterProvider router={router} />
  </ThemeContextProvider>
)