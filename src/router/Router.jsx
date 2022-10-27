import { createBrowserRouter } from "react-router-dom";
import SecretPage from "../Home/SecretPage/SecretPage";
 import HomeMain from "../layout/HomeMain/HomeMain";
import Main from "../layout/Main";
import Login from "../shear/Login/Login";
import Register from "../shear/Register/Register";
import CategoryDetails from "../shear/RightSaid/CategoryDetails/CategoryDetails";
import RightSaid from "../shear/RightSaid/RightSaid";
import PrivateRouter from "./PrivateRouter/PrivateRouter";
 
 
export const router = createBrowserRouter([
 {  
     path: '/',
    element: <Main></Main>,
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
                    path: '/secret',
                    element: <PrivateRouter><SecretPage></SecretPage></PrivateRouter>
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