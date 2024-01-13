import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Error from './components/Error';
import Login from './components/Login';
import SearchList from './components/SearchList';
import { Suspense, lazy } from 'react';

// lazy load components
const MovieList = lazy(() => import('./components/MovieList'));
const TVList = lazy(() => import('./components/TVList'));
const DetailsOfMovie = lazy(() => import('./components/DetailsOfMovie'));
const DetailsOfTV = lazy(() => import('./components/DetailOfTV'));

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <Suspense fallback={'Loading...'}>
                <App />
            </Suspense>
        ),
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
                path: '/tv',
                element: <TVList />,
            },
            {
                path: '/search',
                element: <SearchList />,
            },
            {
                path: '/movie/:movieId',
                element: <DetailsOfMovie />,
            },
            {
                path: '/tv/:tvId',
                element: <DetailsOfTV />,
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
