import AppLayout from "@/layout";
import { lazy } from "react";
import { Navigate, RouteObject } from "react-router-dom";
const Login = lazy(() => import("@/pages/Login"));
const DashBoard = lazy(() => import("@/pages/dashboard"));
// const Login = lazy(() => import("@/pages/Login"));
const router: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to={"/dashboard"} />,
  },
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/dashboard",
        element: <DashBoard />,
      },
    ],
  },
  {
    path: "/login",
    id: "",
    element: <Login />,
  },
];

export default router;
