import { createBrowserRouter } from "react-router-dom"; 
import RootLayout from "../layouts/RootLayout.jsx";

// apaansi udah gw benerin kocak
import Home from "../pages/index.jsx";
import Blog from "../pages/blogs/index.jsx";
import Post from "../pages/blogs/_id.jsx";
import About from "../pages/About.jsx";
import Card from "../components/ErrorPage.jsx";

import { posts, postById } from "../apis/loaders.js";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <Card />,
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
