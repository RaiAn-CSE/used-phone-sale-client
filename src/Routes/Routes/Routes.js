import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import AllModels from "../../Pages/Home/Categories/AllModels";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";

const router = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        // errorElement: <DisplayError></DisplayError>,
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
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/allmodels/:id',
                element: <AllModels></AllModels>,
                loader: ({ params }) => fetch(`usedPhone.json${params.id}`)
            },

            // {
            //     path: '/service/:id',
            //     element: <PrivateRoute><Service></Service></PrivateRoute>,
            //     loader: ({ params }) => fetch(`https://travel-service-server-zeta.vercel.app/services/${params.id}`)
            // },
            // {
            //     path: '/appointment',
            //     element: <Appointment></Appointment>
            // }
        ]
    },
])

export default router;