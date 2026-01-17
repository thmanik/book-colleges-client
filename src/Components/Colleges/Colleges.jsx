import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import './Colleges.css';

const Colleges = () => {
    const [searchText, setSearchText] = useState("");
    const [colleges, setColleges] = useState([]);

    useEffect(() => {
        fetch('https://book-colleges-server.vercel.app/allColleges')
            .then(res => res.json())
            .then(data => setColleges(data))
            .catch(err => console.error(err));
    }, []);

    const handleSearch = () => {
        fetch(`https://book-colleges-server.vercel.app/collegeSearchByCollegeName/${searchText}`)
            .then((res) => res.json())
            .then((data) => setColleges(data))
            .catch(err => console.error(err));
    };

    return (
        <div>
            <img className="home-page-image w-full" src="https://i.ibb.co/GFY675S/Picsart-23-10-17-13-01-42-997.jpg" alt="College Banner" />

            <div className="mt-[-85px] sm:mt-[-300px]">
                <div className="search-box search-box-edit pt-2 mt-5 text-center">
                    <input
                        onChange={(e) => setSearchText(e.target.value)}
                        type="text"
                        className="p-2 border sm:w-40 md:w-72"
                        placeholder="Search Your College"
                    />
                    <button onClick={handleSearch} className="btn-colors relative inline-flex items-center justify-center p-4 py-3 overflow-hidden font-medium text-blue-700 transition duration-400 ease-out border-2 shadow-md group">
                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full group-hover:translate-x-0 ease">
                            <FaSearch className="w-6 h-6" />
                        </span>
                        <span className="absolute flex items-center justify-center w-full h-full transition-all duration-300 transform group-hover:translate-x-full ease">
                            <span className="font-semibold">Search</span>
                        </span>
                        <span className="relative invisible">Search</span>
                    </button>
                </div>
            </div>

            <div className="card-section grid grid-cols-1 md:grid-cols-3 mt-12 md:ms-0 lg:ms-12 md:p-10 gap-8">
                {colleges.map((college) => (
                    <div key={college?._id} className="card card-edit card-width card-compact w-80 bg-base-100 shadow-xl mt-8 mx-auto">
                        <figure>
                            <img className="college-img" src={college?.college_image} alt={college?.college_name} />
                        </figure>
                        <div className="card-body collegeCard-body">
                            <h2 className="card-title">{college?.college_name}</h2>
                            <div className="flex justify-between">
                                <p><span className="font-bold">Event:</span> {college?.event}</p>
                                <p className="text-end"><span className="font-bold">Sport:</span> {college?.sport}</p>
                            </div>
                            <p><span className="font-bold">Research History:</span> {college?.research_history}</p>
                            <div className="flex items-center justify-between mt-2">
                                <p><span className="font-bold">Admission:</span> {college?.admission_date}</p>
                                <Link to={`/allColleges/${college._id}`}>
                                    <button className="btn-color btn-circle relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-blue-700 transition duration-400 ease-out border-2 shadow-md group">
                                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full group-hover:translate-x-0 ease">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                            </svg>
                                        </span>
                                        <span className="absolute flex items-center justify-center w-full h-full transition-all duration-300 transform group-hover:translate-x-full ease">View</span>
                                        <span className="relative invisible">View</span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Colleges;