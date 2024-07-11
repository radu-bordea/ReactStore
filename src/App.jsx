import { RouterProvider, createBrowserRouter } from "react-router-dom";

import {
  About,
  Cart,
  Checkout,
  Error,
  HomeLayout,
  Landing,
  Login,
  Orders,
  Products,
  Register,
  SingleProduct,
} from "./pages";

import { ErrorElement } from "./components";

// loaders
import { loader as landingLoader } from "./pages/Landing";
import { loader as singleProductLoader } from "./pages/SingleProduct";
import { loader as productsLoader } from "./pages/Products";
// actions
import { action as registerAction } from "./pages/Register";

// Create a browser router configuration
const router = createBrowserRouter([
  {
    // Define the root path "/"
    path: "/",
    // Render the HomeLayout component as the main layout
    element: <HomeLayout />,
    // Render the Error component if there's an error on this path
    errorElement: <Error />,
    // Define child routes for the root path
    children: [
      {
        // Specify that this route is the index route (matches "/")
        index: true,
        // Render the Landing component for the root path
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: landingLoader,
      },
      {
        // Define a route for "/products"
        path: "products",
        // Render the Products component for the "/products" path
        element: <Products />,
        errorElement: <ErrorElement />,
        loader: productsLoader,
      },
      {
        // Define a route for "/products/:id" where :id is a dynamic parameter
        path: "products/:id",
        // Render the SingleProduct component for individual product pages
        element: <SingleProduct />,
        errorElement: <ErrorElement />,
        loader: singleProductLoader,
      },
      {
        // Define a route for "/cart"
        path: "cart",
        // Render the Cart component for the "/cart" path
        element: <Cart />,
      },
      {
        // Define a route for "/about"
        path: "about",
        // Render the About component for the "/about" path
        element: <About />,
      },
      {
        // Define a route for "/checkout"
        path: "checkout",
        // Render the Checkout component for the "/checkout" path
        element: <Checkout />,
      },
      {
        // Define a route for "/orders"
        path: "orders",
        // Render the Orders component for the "/orders" path
        element: <Orders />,
      },
    ],
  },
  {
    // Define a route for "/login"
    path: "/login",
    // Render the Login component for the "/login" path
    element: <Login />,
    // Render the Error component if there's an error on this path
    errorElement: <Error />,
  },
  {
    // Define a route for "/register"
    path: "/register",
    // Render the Register component for the "/register" path
    element: <Register />,
    // Render the Error component if there's an error on this path
    errorElement: <Error />,
    action: registerAction,
  },
]);

const App = () => {
  // Render the RouterProvider component with the configured router
  return <RouterProvider router={router} />;
};

export default App;
