import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import Home from './src/components/Home';
import Offers from './src/components/Offers';
import Orders from "./src/components/Orders";
import Cart from "./src/components/Cart";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";
import Login from "./src/components/Login";
import About from "./src/components/About";
import Profile from "./src/components/Profile";

const AppLayout = () => (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
);

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
                element: <About />,
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
                element: <RestaurantMenu />,
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