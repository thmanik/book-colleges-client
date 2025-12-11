import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider/AuthProvider";
import { Helmet } from "react-helmet";


const MyCollege = () => {
const {user}=useContext(AuthContext)
const [usersData, setUserData]=useState([])
  useEffect(()=>{
    fetch(`https://book-colleges-server.vercel.app/mycollege?email=${user?.email}`)
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        setUserData(data)
        
    })
  },[user])

 
    return (
        <div>
           <Helmet>
                <meta charSet="utf-8" />
                <title>MyCollege-Book college</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
           <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Name and <br></br> Date of Birth</th>
        <th>Email & Phone</th>
        <th>College Name <br />& Subject</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        usersData.map((userData)=><> <tr>
    
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={userData?.photo} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{userData?.name}</div>
                  <div className="text-sm opacity-50">{userData?.dateOfBirth}</div>
                </div>
              </div>
            </td>
            <td>
            {userData?.email}
              <br/>
              <span className="badge badge-ghost badge-sm"> {userData?.phoneNumber}</span>
            </td>
            <td>{userData?.collegeName}<br />
             <span>{userData?.subject}</span>
            </td>
            <th>
              <button className="btn btn-color">Add Review</button>
            </th>
          </tr></>)
      }
     
 
    </tbody>


    
  </table>
</div>
        </div>
    );
};

export default MyCollege;