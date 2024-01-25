import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./components/Error.jsx";
import AppLayout from "./App.jsx";
import Hero from "./components/Hero.jsx";
import TVList from "./components/TVList.jsx";
import MovieList from "./components/MovieList.jsx";
import SearchList from "./components/SearchList.jsx";


const router= createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Hero/>
            },
            {
                path:"/tv",
                element:<TVList/>
            },
            {
                path:"/movie",
                element:<MovieList/>
            },
            {
                path:"/search",
                element:<SearchList/>
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById("root")).render(
        <RouterProvider router={router} />
);
