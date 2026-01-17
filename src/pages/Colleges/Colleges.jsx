import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaFlask, FaCalendarAlt, FaAward, FaUniversity } from "react-icons/fa";
import CollegeCard from "../../components/Cards/CollegeCard";

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
        <div className="bg-[#F4F7FA] min-h-screen md:pb-20">
            
            <div className="relative bg-[#004d66] pt-16 pb-48 md:pt-32 md:pb-64 px-4 overflow-hidden">
                
                
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

                    <h1 className="text-3xl md:text-6xl font-black text-white mb-10 tracking-tight text-center leading-tight">
                        Explore Top Tier <br /> 
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7350] to-[#ff9b80]">Colleges Worldwide</span>
                    </h1>
                    
                    
                    <div className="w-full max-w-2xl bg-white/5 backdrop-blur-xl py-8 md:p-1  rounded-3xl md:rounded-full border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex flex-col md:flex-row items-center gap-2 transition-all duration-300 hover:bg-white/10">
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
                            className="w-[90%] md:w-auto bg-[#FF7350] hover:bg-white hover:text-[#004d66] text-white px-5 md:px-10 py-2 md:py-3.5 rounded-2xl md:rounded-full transition-all duration-500 font-black text-sm uppercase tracking-wider shadow-xl active:scale-95"
                        >
                            Search
                        </button>
                    </div>
                </div>
            </div>

            
            <div className="container mx-auto px-4 md:px-6 lg:px-10 -mt-32 md:-mt-40 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {colleges.slice(0, 3).map((college) => (
                       <CollegeCard key={college?._id} college={college} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Colleges;