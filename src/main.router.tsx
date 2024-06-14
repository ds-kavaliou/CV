import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/root.layout";
import RootPage from "./pages/root.page";

// const RootLayout = React.lazy(() => import("./pages/root.layout"));
// const RootPage = React.lazy(() => import("./pages/root.page"));

const router = createBrowserRouter([
  { element: <RootLayout />, children: [{ path: "", element: <RootPage /> }] },
]);

export default function AppRouterProvider() {
  return <RouterProvider router={router} />;
}
