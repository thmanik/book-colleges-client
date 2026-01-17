import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaFlask, FaCalendarAlt, FaAward, FaUniversity } from "react-icons/fa";

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
        if (!searchText) return;
        fetch(`https://book-colleges-server.vercel.app/collegeSearchByCollegeName/${searchText}`)
            .then((res) => res.json())
            .then((data) => setColleges(data))
            .catch(err => console.error(err));
    };

    return (
        <div className="bg-[#F4F7FA] min-h-screen pb-20">
            
            <div className="relative bg-[#004d66] pt-24 pb-48 md:pt-32 md:pb-64 px-4 overflow-hidden">
                
                
                <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF7350]/10 rounded-full -ml-20 -mb-20 blur-3xl"></div>
                
                
                <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
                     style={{ 
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20L0 0h40L20 20zM0 40l20-20 20 20H0z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                     }}>
                </div>

                <div className="max-w-5xl mx-auto flex flex-col items-center relative z-10">
                
                    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 rounded-full mb-6">
                        <FaUniversity className="text-[#FF7350] text-xs" />
                        <span className="text-white text-[10px] font-bold uppercase tracking-[2px]">Find Your Academic Home</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black text-white mb-10 tracking-tight text-center leading-tight">
                        Explore Top Tier <br /> 
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7350] to-[#ff9b80]">Colleges Worldwide</span>
                    </h1>
                    
                    
                    <div className="w-full max-w-2xl bg-white/5 backdrop-blur-xl p-1  rounded-3xl md:rounded-full border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex flex-col md:flex-row items-center gap-2 transition-all duration-300 hover:bg-white/10">
                        <div className="flex-grow flex items-center w-full px-5">
                            <FaSearch className="text-[#FF7350] mr-3" />
                            <input
                                onChange={(e) => setSearchText(e.target.value)}
                                type="text"
                                className="w-full bg-transparent outline-none text-white placeholder-white/50 text-base py-3"
                                placeholder="Search by college name, research or sport..."
                            />
                        </div>
                        <button 
                            onClick={handleSearch} 
                            className="w-full md:w-auto bg-[#FF7350] hover:bg-white hover:text-[#004d66] text-white px-10 py-3.5 rounded-2xl md:rounded-full transition-all duration-500 font-black text-sm uppercase tracking-wider shadow-xl active:scale-95"
                        >
                            Search
                        </button>
                    </div>
                </div>
            </div>

            
            <div className="container mx-auto px-4 md:px-6 lg:px-10 -mt-32 md:-mt-40 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {colleges.map((college) => (
                        <div 
                            key={college?._id} 
                            className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col group overflow-hidden border border-gray-100 h-full"
                        >
                        
                            <div className="h-44 md:h-48 w-full overflow-hidden relative">
                                <img 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                                    src={college?.college_image} 
                                    alt={college?.college_name} 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                <div className="absolute bottom-3 left-4">
                                    <span className="bg-[#FF7350] text-white text-[10px] font-bold px-3 py-1 rounded-md uppercase tracking-widest shadow-md">
                                        Active Admission
                                    </span>
                                </div>
                            </div>

                           
                            <div className="p-6 flex flex-col flex-grow">
                                <h2 className="text-xl md:text-2xl font-bold text-[#004d66] mb-4 truncate group-hover:text-[#FF7350] transition-colors" title={college?.college_name}>
                                    {college?.college_name}
                                </h2>
                                
                                <div className="space-y-4 mb-8">
                                    <div className="flex justify-between items-center text-sm border-b border-gray-100 pb-3">
                                        <div className="flex items-center gap-2">
                                            <FaAward className="text-[#FF7350]" />
                                            <span className="text-gray-500">Event: <span className="font-bold text-gray-700">{college?.event}</span></span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-gray-500 text-right">Sport: <span className="font-bold text-gray-700">{college?.sport}</span></span>
                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        <FaFlask className="text-[#004d66] mt-1 shrink-0" />
                                        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                                            <span className="font-bold text-gray-700 mr-1">Research:</span> 
                                            {college?.research_history}
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl border border-gray-100">
                                        <FaCalendarAlt className="text-[#004d66]" />
                                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                                            Deadline: <span className="text-[#004d66] ml-1">{college?.admission_date}</span>
                                        </p>
                                    </div>
                                </div>

                               
                                <div className="mt-auto flex justify-end">
                                    <Link to={`/allColleges/${college._id}`}>
                                        <button className="relative inline-flex items-center justify-center px-10 py-3 overflow-hidden font-bold text-[#004d66] transition duration-500 ease-out border-2 border-[#004d66] shadow-sm group/btn rounded-full hover:text-white">
                                            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white border-1 border-[#FF7350] bg-[#FF7350] duration-300 -translate-x-full group-hover/btn:translate-x-0 ease">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                                </svg>
                                            </span>
                                            <span className="absolute flex items-center justify-center w-full h-full transition-all duration-300 transform group-hover/btn:translate-x-full ease text-sm">
                                                View Details
                                            </span>
                                            <span className="relative invisible text-sm">View Details</span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Colleges;