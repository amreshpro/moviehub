import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import MovieList from './components/MovieList';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Error from './components/Error';
import TVList from './components/TVList';
import Login from './components/Login';
import DetailsOfMovie from './components/DetailsOfMovie';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/movie',
                element: <MovieList />,
            },
            {
                path: '/movie/:movieId',
                element: <DetailsOfMovie />,
            },
            {
                path: '/tv',
                element: <TVList />,
            },
            {
                path: '/login',
                element: <Login />,
            },
        ],
    },
]);

function App() {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
}

export default function AppLayout() {
    return <RouterProvider router={router} />;
}
