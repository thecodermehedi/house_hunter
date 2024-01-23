import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Loading from "../components/Loading";
const router = createBrowserRouter([
  {path: "/auth/login", element: <Login />},
  {path: "/auth/register", element: <Register />},
  {path: "/state/loading", element: <Loading />},
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {index: true, element: <Home />},
      {path: "/about", element: <About />},
    ],
  },
]);

export default router;
