import { useEffect, useState } from "react";
import './Colleges.css'
import { Link } from "react-router-dom";

const Colleges = () => {
    const [products, setProducts] = useState([])
    const [searchText, setSearchText] = useState("");
    const [colleges, setColleges]=useState([])


    useEffect(()=>{
        fetch('http://localhost:5000/allColleges')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setColleges(data)
        })
    },[])

    const handleSearch = () => {
        fetch(`http://localhost:5000/allColleges/${searchText}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setProducts(data);
            });
    };

    return (
        <div>
            <div>
                <div className="search-box search-box-edit p-2 text-center">
                    <input
                        onChange={(e) => setSearchText(e.target.value)}
                        type="text"
                        className="p-2 border"
                        placeholder="Search Your College"
                    />
                    <button onClick={handleSearch} className="btn btn-color ">Search</button>
                </div>
            </div>


            {/* college card */}
            <div className="grid md:grid-cols-3 sm:grid-cols-1 ms-16 py-10">
                {
                    colleges.slice(0-3).map(college=><div key={college?._id}><div className="card card-compact w-80 bg-base-100 shadow-xl mt-8">
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