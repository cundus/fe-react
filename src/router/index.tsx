import {
   createBrowserRouter,
   RouteObject,
   RouterProvider,
} from "react-router-dom";

import Home from "../pages/home";
import RootLayout from "../layouts/root-layout";
import Register from "@/pages/register";
import Login from "@/pages/login";
import AuthLayout from "@/layouts/auth-layout";
import Detail from "@/pages/detail";
import ChatPage from "@/pages/chat";

const routes: RouteObject[] = [
   // {
   //    path: "/",
   //    element: <RootLayout />,
   //    children: [
   //       {
   //          index: true,
   //          element: <Home />,
   //       },
   //       {
   //          path: "search",
   //          element: <>Search</>,
   //       },
   //       {
   //          path: "follows",
   //          element: <>Follows</>,
   //       },
   //       {
   //          path: "profile",
   //          element: <>Profile</>,
   //       },
   //       {
   //          path: "thread/:id",
   //          element: <Detail />,
   //       },
   //    ],
   // },
   {
      path: "/chat/:userId",
      element: <ChatPage />,
   },
   {
      element: <AuthLayout />,
      children: [
         {
            path: "/register",
            element: <Register />,
         },
         {
            path: "/login",
            element: <Login />,
         },
      ],
   },

   {
      path: "*",
      element: <div>Error</div>,
   },
];

export default function Router() {
   return <RouterProvider router={createBrowserRouter(routes)} />;
}
