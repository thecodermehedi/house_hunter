import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Loading from "../components/Loading";
import DashboardLayout from "@/layouts/DashboardLayout";
import Dashboard from "@/pages/Dashboard";
const router = createBrowserRouter([
  {path: "/auth/login", element: <Login />},
  {path: "/auth/register", element: <Register />},
  {path: "/state/loading", element: <Loading />},
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [{index: true, element: <Home />}],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    errorElement: <NotFound />,
    children: [{index: true, element: <Dashboard />}],
  },
]);

export default router;
