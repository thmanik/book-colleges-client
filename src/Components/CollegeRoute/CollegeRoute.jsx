import { useEffect, useState } from "react";
import './CollegeRoute.css'
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";


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
            <div className="grid card-sizee md:grid-cols-4 sm:grid-cols-1 m-5 ">
            {
                colleges.map(college=><div  className="w-72 " key={college._id}><div className="card college-card w-80 m-5 bg-base-100 shadow-xl image-full ">
                <figure><img  src={college.college_image} alt="Shoes" width={330} height={230} /></figure>
                <div className="card-body ">
                  <h2 className="card-title">{college.college_name}</h2>
                  <p className=""><span className="font-bold ">Rating:</span>:{college.rating}</p>
                  <p><span className="font-bold ">Research:</span>{college.number_of_research}</p>
                  <p><span className="font-bold ">Admision Date:</span>{college.admission_date}</p>
                  <div className="card-actions justify-end">
                    <Link to={`/allColleges/${college._id}`} className="btn btn-color btn-circle relative inline-flex items-center justify-center p-4  py-3  overflow-hidden font-medium text-blue-700 transition duration-400 ease-out border-2 shadow-md group"><span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full  group-hover:translate-x-0 ease">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span><span className="absolute flex items-center justify-center w-full h-full transition-all duration-300 transform group-hover:translate-x-full ease">View</span>
</Link>
                  </div>
                </div>
              </div></div>)
            }
           
            </div>
        </div>
        
    );
};

export default CollegeRoute;