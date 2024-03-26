import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./components/Root";
import ErrorPage from "./components/ErrorPage";
import Home from "./pages/Home";
import ListedBooks from "./pages/ListedBooks";
import PageToRead from "./pages/PageToRead";
import Statistics from "./pages/Statistics";
import Blogs from "./pages/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>, 
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=>fetch('books.json')
      },
      {
        path: '/listed books',
        element: <ListedBooks></ListedBooks>,
      },
      {
        path: '/page to read',
        element: <PageToRead></PageToRead>,
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>,
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
