import { useEffect, useState } from "react";
import './Colleges.css'
import { Link } from "react-router-dom";

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
                    <button onClick={handleSearch} className="btn btn-color ">Search</button>
                </div>
            </div>


            {/* college card */}
            <div className=" card-section grid md:grid-cols-3 sm:grid-cols-1   mt-12  md:ms-0 lg:ms-20 md:p-10 ">
                {
                    colleges.slice(0-3).map(college=><div key={college?._id}><div className="card card-width card-compact w-80 bg-base-100 shadow-xl mt-8">
                    <figure><img className="college-img" src={college?.college_image} alt="Shoes" /></figure>
                    <div className="card-body">
                      <h2 className="card-title">{college?.college_name}</h2>
                      <div className="flex">
                        <p><span className="font-bold">Event:</span> {college?.event}</p>
                        <p className="text-end"><span className="font-bold">Sport:</span> {college?.sport}</p>
                      </div>
                        <p><span className="font-bold"> Research History:</span>{college?.research_history}</p>
                      <div className="flex">
                      <p className="mt-2"><span className="font-bold"> Admission Date:</span>{college?.admission_date}</p>
                       <Link to={`/allColleges/${college._id}`}><button className="btn  btn-color btn-circle">Details</button></Link>
                      </div>
                    </div>
                  </div></div>)
                }
            </div>
        </div>

    );
};

export default Colleges;