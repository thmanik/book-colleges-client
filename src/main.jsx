import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main.jsx';
import Home from './Components/Home/Home.jsx';
import SingleCardDetails from './Components/SingleCardDetails/SingleCardDetails.jsx';
import CollegeRoute from './Components/CollegeRoute/CollegeRoute.jsx';
import Login from './Components/Login/Login.jsx';
import Registration from './Components/Registration/Registration.jsx';
import AuthProvider from './Components/Providers/AuthProvider/AuthProvider.jsx';
import PrivateRoute from './Components/Routes/PrivateRoute/PrivateRoute.jsx';
import Admission from './Components/Admission/Admission.jsx';
import ApplyForm from './Components/ApplyForm/ApplyForm.jsx';
import MyCollege from './Components/MyCollege/MyCollege.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"allColleges/:id",
        element:<PrivateRoute><SingleCardDetails></SingleCardDetails></PrivateRoute>,
        loader:({params})=>fetch(`https://book-college-server-1neisge2c-manikonline.vercel.app/allColleges/${params.id}`)
      },
      {
        path:"colleges",
        element:<CollegeRoute></CollegeRoute>
      },
      {
        path:"login",
        element:<Login></Login>
      },
      {
        path:"registration",
        element:<Registration></Registration>
      },
      {
        path:"admission",
        element:<PrivateRoute><Admission></Admission></PrivateRoute>
      },
      {
        path:"applyForm/:id",
        element:<ApplyForm></ApplyForm>,
        loader:({params})=>fetch(`https://book-college-server-1neisge2c-manikonline.vercel.app/applyForm/${params.id}`)
      },
      {
        path:"mycollege",
        element:<PrivateRoute><MyCollege></MyCollege></PrivateRoute>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
