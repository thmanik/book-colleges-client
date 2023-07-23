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
const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"allColleges/:id",
        element:<SingleCardDetails></SingleCardDetails>,
        loader:({params})=>fetch(`http://localhost:5000/allColleges/${params.id}`)
      },
      {
        path:"colleges",
        element:<PrivateRoute><CollegeRoute></CollegeRoute></PrivateRoute>
      },
      {
        path:"login",
        element:<Login></Login>
      },
      {
        path:"registration",
        element:<Registration></Registration>
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
