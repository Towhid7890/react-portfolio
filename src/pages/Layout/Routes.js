import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import About from "./../About/About";
import Resume from "../Resume/Resume";
import Contact from "./../Contact/Contact";
import Projects from "../Projects/Projects";
import Blog from "../Blog/Blog";
import Home from "./../Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/resume",
        element: <Resume></Resume>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/projects",
        element: <Projects></Projects>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);
