import { createBrowserRouter } from "react-router-dom";
  import HomeMain from "../layout/HomeMain/HomeMain";
import Main from "../layout/Main";
import ErrorPage from "../shear/ErrorPage/ErrorPage";
import Login from "../shear/Login/Login";
import Register from "../shear/Register/Register";
import CategoryDetails from "../shear/RightSaid/CategoryDetails/CategoryDetails";
import RightSaid from "../shear/RightSaid/RightSaid";
import SuccessPage from "../shear/RightSaid/SuccessPage/SuccessPage";
import PrivateRouter from "./PrivateRouter/PrivateRouter";
 
 
export const router = createBrowserRouter([
 {  
     path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            path: '/',
            loader: () => fetch("https://learning-platform-server-lyart.vercel.app/courses"),
            element: <HomeMain></HomeMain>,
            children: [
                {
                    path: '/',
                    loader: () => fetch("https://learning-platform-server-lyart.vercel.app/courses"),
                    element: <RightSaid></RightSaid> 
                },
                {
                    path: '/:id',
                    loader: ({params}) => fetch(`https://learning-platform-server-lyart.vercel.app/courses/${params.id}`),
                    element: <CategoryDetails></CategoryDetails>
                },
                {
                    path: '/success',
                     element: <PrivateRouter><SuccessPage></SuccessPage></PrivateRouter>
                }
            ]
         },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        }
    ]
}
    
 ])