import { createBrowserRouter } from "react-router-dom"; 
import RootLayout from "../layouts/RootLayout";

import Home from "../pages/index";
import Blog from "../pages/blogs/index";
import Post from "../pages/blogs/_id";
import About from "../pages/About";

import { posts, postById } from "../apis/loaders";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: "true",
                element: <Home />
            },
            {
                path: "/blog",
                element: <Blog />,
                loader : posts,
            },
            {
                path: "/blog/:id",
                element: <Post />,
                loader : postById,
            },
            {
                path: "/about",
                element: <About />
            }
        ]
    }
]);
