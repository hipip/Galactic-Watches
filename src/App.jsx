import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import watches from "./assets/db.json";
import HomePage from "./pages/HomePage";
import WatchesPage from "./pages/WatchesPage";
import WatchPage from "./pages/WatchPage";
import AboutPage from "./pages/AboutPage";
import CartPage from "./pages/CartPage";
import { useEffect, useState } from "react";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    console.log(storedCart);
    return storedCart ? JSON.parse(storedCart) : {};
  });

  const addToCart = (watchId, quantity) => {
    const oldQte = cart[watchId] || 0;
    setCart({ ...cart, [watchId]: oldQte + quantity });
  };

  const deleteFromCart = (watchId) => {
    const newCart = { ...cart };
    delete newCart[watchId];
    setCart(newCart);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage watches={watches} />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/watches",
      element: <WatchesPage watches={watches} addToCart={addToCart} />,
    },
    {
      path: "/watches/:watchId",
      element: <WatchPage watches={watches} addToCart={addToCart} />,
    },
    {
      path: "/cart",
      element: (
        <CartPage
          watches={watches}
          cart={cart}
          deleteFromCart={deleteFromCart}
        />
      ),
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
