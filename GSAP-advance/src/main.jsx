import { createBrowserRouter,RouterProvider, } from "react-router";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Toaster } from "react-hot-toast";
import './index.css'


const router = createBrowserRouter([
  { path: "/",element: <App/> },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <div>
    <RouterProvider router={router} />
     <Toaster />
  </div>
);



// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
