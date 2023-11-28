import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SingleBlog from "./components/SingleBlog";
import HomePage from "./pages/HomePage";


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path:'/blogs/:id',
    element: <SingleBlog/>,
  }
])

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
