import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import { RootLayout } from "./layouts/RootLayout.jsx"

import { homeRoute, postListRoute, userListRoute, postRoute, userRoute } from "./routes"

import "./global.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,

    children: [
      {
        children: [
          { index: true, ...homeRoute },
          {
            path: "posts",
            children: [
              {
                index: true,
                ...postListRoute,
              },
              {
                path: ":postId",
                children: [{ index: true, ...postRoute }],
              },
            ],
          },
          {
            path: "users",
            children: [
              { index: true, ...userListRoute },
              { path: ":userId", ...userRoute },
            ],
          },
        ],
      },
      { path: "*", element: <h1>404 - Page Not Found</h1> },
    ],
  },
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>
)
