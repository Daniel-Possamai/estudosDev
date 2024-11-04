import { createBrowserRouter } from "react-router-dom";
import Home from './pages/home/home.tsx'
import Todo from './pages/todoList/todo.tsx'


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/todo",
      element: <Todo/>,
    },
  ]);



