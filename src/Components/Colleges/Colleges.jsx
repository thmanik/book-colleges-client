import { useEffect, useState } from "react";
import './Colleges.css'
import { Link } from "react-router-dom";
import {  FaSearch } from "react-icons/fa";

const Colleges = () => {
    const [products, setProducts] = useState([])
    const [searchText, setSearchText] = useState("");
    const [colleges, setColleges]=useState([])

   
    useEffect(()=>{
        fetch('https://book-college-server-seven.vercel.app/allColleges')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setColleges(data)
        })
    },[])

    const handleSearch = () => {
        fetch(`https://book-college-server-seven.vercel.app/allColleges/${searchText}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setProducts(data);
            });
    };

    return (
        <div>
            <div>
                <img className="home-page-image"  src="https://i.ibb.co/GFY675S/Picsart-23-10-17-13-01-42-997.jpg" alt="" />
            </div>
            <div className=" mt-[-85px] sm:mt-[-300px]  ">
                <div className="search-box search-box-edit pt-2 mt-5 text-center">
                    <input
                        onChange={(e) => setSearchText(e.target.value)}
                        type="text"
                        className="p-2 border sm:w-40 md:w-72"
                        placeholder="Search Your College"
                    />
                    <button onClick={handleSearch} className=" btn-colors  relative inline-flex items-center justify-center p-4  py-3  overflow-hidden font-medium text-blue-700 transition duration-400 ease-out border-2 shadow-md group"><span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full  group-hover:translate-x-0 ease">
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" >< FaSearch ></FaSearch><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" ></path></svg>
</span>
<span className="absolute flex items-center justify-center w-full h-full transition-all duration-300 transform group-hover:translate-x-full ease"><span className="font-semibold">Search</span></span>
<span className="relative invisible">Search</span></button>
                </div>
            </div>


            {/* college card */}
            <div className=" card-section grid md:grid-cols-3 sm:grid-cols-1   mt-12  md:ms-0 lg:ms-20 md:p-10 ">
                {
                    colleges.slice(0-6).map(college=><div key={college?._id}><div className="card card-edit card-width card-compact w-80 bg-base-100 shadow-xl mt-8">
                    <figure><img className="college-img" src={college?.college_image} alt="Shoes" /></figure>
                    <div className="card-body collegeCard-body">
                      <h2 className="card-title">{college?.college_name}</h2>
                      <div className="flex">
                        <p><span className="font-bold">Event:</span> {college?.event}</p>
                        <p className="text-end"><span className="font-bold">Sport:</span> {college?.sport}</p>
                      </div>
                        <p><span className="font-bold"> Research History:</span>{college?.research_history}</p>
                      <div className="flex">
                      <p className="mt-2"><span className="font-bold"> Admission Date:</span>{college?.admission_date}</p>
                       <Link to={`/allColleges/${college._id}`}><button className=" btn-color btn-circle  relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-blue-700 transition duration-400 ease-out border-2   shadow-md group"><span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full  group-hover:translate-x-0 ease">
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span className="absolute flex items-center justify-center w-full h-full transition-all duration-300 transform group-hover:translate-x-full ease">View</span>
<span className="relative invisible">Button Text</span></button></Link>
                      </div>
                    </div>
                  </div></div>)
                }
            </div>
        </div>

    );
};

export default Colleges;