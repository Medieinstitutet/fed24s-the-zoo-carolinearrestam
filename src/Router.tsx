// src/Router.tsx
import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { AnimalDetailPage } from "./pages/AnimalDetailPage";
import { ErrorPage } from "./pages/ErrorPage";
import { RootLayout } from "./layout/RootLayout";
import { AnimalsPage } from "./pages/AnimalPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
        {
        path: "animals",
        element: <AnimalsPage />,
      },
      {
        path: "/animals/:id",
        element: <AnimalDetailPage />,
      },
    ],
  },
]);
