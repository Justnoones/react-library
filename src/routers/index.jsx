import Home from '../pages/Home';
import Create from '../pages/Create';
import Search from '../pages/Search';
import Layout from '../pages/Layouts/Layout';
import { createBrowserRouter } from "react-router-dom";

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
      }
    ]
  }
]);

export default router;