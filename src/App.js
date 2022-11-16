import "./App.css";

import { createBrowserRouter } from "react-router-dom";

import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/cadastro",
    element: <Cadastro />,
  },
]);

export { router };
