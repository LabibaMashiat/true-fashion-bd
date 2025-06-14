import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import About from "../pages/About/About/About";
import Products from "../pages/Products/Products/Products";
import Contact from "../pages/Contact/Contact/Contact";
import Gallery from "../pages/Gallery/Gallery/Gallery";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:"/",
          element: <Home></Home>
        },
        {
          path:"/about",
          element: <About></About>
        },
        {
          path:"/products",
          element: <Products></Products>
        },
        {
          path:"/gallery",
          element: <Gallery></Gallery>
        },
        {
          path:"/contact",
          element: <Contact></Contact>
        },
        
      ]
    },
  ]);