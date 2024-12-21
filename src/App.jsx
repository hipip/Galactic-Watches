import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import watches from "./assets/db.json";
import HomePage from "./pages/HomePage";
import WatchesPage from "./pages/WatchesPage";
import WatchPage from "./pages/WatchPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import CartPage from "./pages/CartPage";
import { useState } from "react";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage watches={watches} />,
    },
    {
      path: "/watches",
      element: <WatchesPage watches={watches} />,
    },
    {
      path: "/watches/:watchId",
      element: <WatchPage watches={watches} />,
    },
    {
      path: "/cart",
      element: <CartPage />,
    },
    {
      path: "/contact",
      element: <ContactPage />,
    },
    {
      path: "/about",
      element: <AboutPage />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
