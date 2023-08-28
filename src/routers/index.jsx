import Home from '../pages/Home';
import Create from '../pages/Create';
import Search from '../pages/Search';
import Layout from '../pages/Layouts/Layout';
import { createBrowserRouter } from "react-router-dom";
import BookDetail from '../components/BookDetail';
import NotFound404Page from '../components/NotFound404Page';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "/create",
        element: <Create />
      },
      {
        path: "/search",
        element: <Search />
      },
      {
        path: "/books/:id",
        element: <BookDetail />
      },
      {
        path: "*",
        element: <NotFound404Page />
      }
    ]
  }
]);

export default router;