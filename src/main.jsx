import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import Main from './Layout/Main.jsx';
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx';
import CollegeRoute from './pages/CollegeRoute/CollegeRoute.jsx';
import Login from './pages/Login/Login.jsx';
import Admission from './pages/Admission/Admission.jsx';
import ApplyForm from './pages/ApplyForm/ApplyForm.jsx';
import MyCollege from './pages/MyCollege/MyCollege.jsx';
import Home from './pages/Home/Home.jsx';
import SingleCardDetails from './pages/SingleCardDetails/SingleCardDetails.jsx';
import Registration from './pages/Registration/Registration.jsx';

import PrivateRoute from './components/routes/PrivateRoute.jsx';
import AuthProvider from './components/AuthProvider/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"allColleges/:id",
        element:<PrivateRoute><SingleCardDetails></SingleCardDetails></PrivateRoute>,
        loader:({params})=>fetch(`https://book-colleges-server.vercel.app/allColleges/${params.id}`)
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
        loader:({params})=>fetch(`https://book-colleges-server.vercel.app/applyForm/${params.id}`)
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
