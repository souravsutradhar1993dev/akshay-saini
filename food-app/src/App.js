import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Offers from './components/Offers';
import Orders from "./components/Orders";
import Cart from "./components/Cart";
import Error from "./components/Error";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Offline from "./components/Offline";
import useOnline from "./utils/useOnline";
import Shimmer from "./components/Shimmer";

const About = lazy(()=> import("./components/About"));
const RestaurantMenu = lazy(()=> import("./components/RestaurantMenu"));

const AppLayout = () => {
    const isOnline = useOnline();
    return (
        <>
            <Header />
            {
                isOnline ? <Outlet /> : <Offline />
            }
            <Footer />
        </>
    );
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/about',
                element: (
                <Suspense fallback={<Shimmer />}>
                    <About />
                </Suspense>
                ),
                children: [
                    {
                        path: 'profile',
                        element: <Profile />
                    }
                ]
            },
            {
                path: '/offers',
                element: <Offers />,
            },
            {
                path: '/restaurants/:id',
                element: (
                    <Suspense fallback={<Shimmer />}>
                        <RestaurantMenu />
                    </Suspense>
                ),
            },
            {
                path: '/orders',
                element: <Orders />,
            },
            {
                path: '/cart',
                element: <Cart />,
            },
            {
                path: '/login',
                element: <Login />,
            },
        ]
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);