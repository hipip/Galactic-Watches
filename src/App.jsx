import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

function App() {
  // fetch data here an pass it to pages

  const router = createBrowserRouter([
    {
      path: "/",
      element: <h1>Home Page</h1>,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
