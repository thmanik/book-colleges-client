import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const CollegeRoute = () => {
    const [colleges, setColleges] = useState([]);

    useEffect(() => {
        fetch('https://book-colleges-server.vercel.app/allColleges')
            .then(res => res.json())
            .then(data => {
                setColleges(data);
            });
    }, []);

    return (
        <div className="bg-gray-50 py-10 px-4 sm:px-10 lg:px-20">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Colleges - Book College</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

            <div className="text-center mb-12">
                <h1 className="text-3xl md:text-5xl font-extrabold text-[#014C63] underline decoration-[#FF7350] underline-offset-8">
                    Colleges Information
                </h1>
                <p className="mt-4 text-gray-500 font-medium">Explore and find the best college for your future</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
                {colleges.map(college => (
                    <div key={college._id} className="w-full max-w-sm">
                        <div className="card w-full h-[400px] bg-base-100 shadow-xl image-full overflow-hidden rounded-2xl border-none">
                            <figure>
                                <img 
                                    src={college.college_image} 
                                    alt={college.college_name} 
                                    className="w-full h-full object-cover" 
                                />
                            </figure>
                            
                            {/* Reduced padding (p-4) and increased text visibility */}
                            <div className="card-body p-4 sm:p-5 justify-end bg-black/40 group hover:bg-black/60 transition-all duration-300">
                                <h2 className="card-title text-xl sm:text-2xl font-bold text-white mb-2 leading-tight">
                                    {college.college_name}
                                </h2>
                                
                                <div className="space-y-1 text-white text-sm sm:text-base">
                                    <p className="flex justify-between items-center border-b border-white/20 pb-1">
                                        <span className="font-bold text-[#FF7350]">Rating:</span> 
                                        <span>{college.rating}</span>
                                    </p>
                                    <p className="flex justify-between items-center border-b border-white/20 pb-1">
                                        <span className="font-bold text-[#FF7350]">Research:</span> 
                                        <span>{college.number_of_research}</span>
                                    </p>
                                    <p className="flex justify-between items-center border-b border-white/20 pb-1">
                                        <span className="font-bold text-[#FF7350]">Admission:</span> 
                                        <span>{college.admission_date}</span>
                                    </p>
                                </div>

                                <div className="card-actions justify-end mt-4">
                                    <Link 
                                        to={`/allColleges/${college._id}`} 
                                        className="btn btn-color btn-circle relative inline-flex items-center justify-center p-4 py-3 overflow-hidden font-medium text-blue-700 transition duration-400 ease-out border-2 shadow-md group"
                                    >
                                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full group-hover:translate-x-0 ease">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                            </svg>
                                        </span>
                                        <span className="absolute flex items-center justify-center w-full h-full transition-all duration-300 transform group-hover:translate-x-full ease text-sm">
                                            View
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CollegeRoute;