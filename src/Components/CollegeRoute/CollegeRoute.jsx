import { useEffect, useState } from "react";
import './CollegeRoute.css'
import { Link } from "react-router-dom";


const CollegeRoute = () => {
    const [colleges, setColleges]=useState([])

    useEffect(()=>{
        fetch('https://book-college-server-seven.vercel.app/allColleges')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setColleges(data)
        })
    },[])
    return (
        <div>
            <div className="text-center font-extrabold text-4xl my-5 text-color underline">College Information</div>
            <div className="grid card-sizee md:grid-cols-3 sm:grid-cols-1  ms-12">
            {
                colleges.map(college=><div key={college._id}><div className="card w-80 mt-5 m-1 bg-base-100 shadow-xl image-full ">
                <figure><img className="" src={college.college_image} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">{college.college_name}</h2>
                  <p className=""><span className="font-bold ">Rating:</span>:{college.rating}</p>
                  <p><span className="font-bold ">Research:</span>{college.number_of_research}</p>
                  <p><span className="font-bold ">Admision Date:</span>{college.admission_date}</p>
                  <div className="card-actions justify-end">
                    <Link to={`/allColleges/${college._id}`} className="btn btn-color btn-circle">Details</Link>
                  </div>
                </div>
              </div></div>)
            }
           
            </div>
        </div>
        
    );
};

export default CollegeRoute;