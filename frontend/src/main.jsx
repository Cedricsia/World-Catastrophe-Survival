import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import Tutorials from "./pages/Tutorials";
import Trainings from "./pages/Trainings";
import Eshop from "./pages/Eshop";
import NoMatch from "./pages/NoMatch";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/tutorials", element: <Tutorials /> },
  { path: "/trainings", element: <Trainings /> },
  { path: "/eshop", element: <Eshop /> },
  {
    path: "/profile",
    element: <Profile />,
  },
  { path: "*", element: <NoMatch /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
