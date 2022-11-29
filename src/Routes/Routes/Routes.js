import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import AddProducts from "../../Pages/AddProducts/AddProducts";
import AllBuyers from "../../Pages/AllUsers/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/AllUsers/AllSellers/AllSellers";
import Blogs from "../../Pages/Blogs/Blogs";
import DashBoard from "../../Pages/DashBoard/DashBoard";
import AllModels from "../../Pages/Home/Categories/AllModels";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import MyOrder from "../../Pages/MyOrder/MyOrder";
import MyProducts from "../../Pages/MyProducts/MyProducts";
import ReportedItems from "../../Pages/ReportedItems/ReportedItems";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRoute from "../SellerRoute/SellerRoute";


const router = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
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
                path: '/myorders',
                element: <MyOrder></MyOrder>
            },
            {
                path: '/category/:id',
                element: <AllModels></AllModels>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/allsellers',
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path: '/allbuyers',
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path: '/addproducts',
                element: <SellerRoute><AddProducts></AddProducts></SellerRoute>
            },
            {
                path: '/myproducts',
                element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <DashBoard></DashBoard>
            },
            {
                path: '/dashboard/allsellers',
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path: '/dashboard/allbuyers',
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path: '/dashboard/addproducts',
                element: <SellerRoute><AddProducts></AddProducts></SellerRoute>
            },
            {
                path: '/dashboard/myproducts',
                element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
            },
            {
                path: '/dashboard/reportedItems',
                element: <SellerRoute><ReportedItems></ReportedItems></SellerRoute>
            },
        ]
    }
])

export default router;