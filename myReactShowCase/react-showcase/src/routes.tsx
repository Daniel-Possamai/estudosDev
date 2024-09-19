import { createBrowserRouter } from "react-router-dom";
import Home from './pages/home/home.tsx'


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
  ]);



