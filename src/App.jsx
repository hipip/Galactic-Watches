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
  const [cart, setCart] = useState([]);

  const addToCart = (watchId, quantity) => {
    const foundWatch = cart.find((watch) => watch.id === watchId);
    if (foundWatch) {
      const newQte = foundWatch.quantity + quantity;
      setCart([
        ...cart.filter((item) => item.id !== watchId),
        { id: watchId, quantity: newQte },
      ]);
    } else setCart([...cart, { id: watchId, quantity: 1 }]);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage watches={watches} />,
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
      element: <CartPage cart={cart} />,
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
