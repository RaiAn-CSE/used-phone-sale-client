import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AllBuyers from "../../Pages/AllUsers/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/AllUsers/AllSellers/AllSellers";
import Blogs from "../../Pages/Blogs/Blogs";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import AllModels from "../../Pages/Home/Categories/AllModels";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


const router = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/allmodels/:id',
                element: <AllModels></AllModels>,
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)
            },
            {
                path: '/allsellers',
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path: '/allbuyers',
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
    }
])

export default router;