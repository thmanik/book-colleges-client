import { Link } from "react-router-dom";
import { FaAward, FaFlask, FaCalendarAlt } from "react-icons/fa";

const CollegeCard = ({ college }) => {
   
    console.log("data",college)
    const { 
        _id, 
        college_image, 
        college_name, 
        rating, 
        number_of_research, 
        admission_date, 
        research_history 
    } = college;

    return (
        <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col group overflow-hidden border border-gray-100 h-full">
            
           
            <div className="h-56 md:h-64 w-full overflow-hidden relative">
                <img 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    src={college_image} 
                    alt={college_name} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <div className="bg-[#FF7350] text-white text-[10px] font-black px-3 py-1 rounded-md uppercase tracking-widest shadow-lg">
                        Admission Open
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm text-[#004d66] text-[10px] font-black px-3 py-1 rounded-md uppercase flex items-center gap-1 shadow-lg">
                        <FaAward className="text-yellow-500" /> {rating}
                    </div>
                </div>
            </div>

          
            <div className="p-8 flex flex-col flex-grow">
                <h2 className="text-2xl font-black text-[#004d66] mb-4 truncate group-hover:text-[#FF7350] transition-colors" title={college_name}>
                    {college_name}
                </h2>
                
                <div className="space-y-4 mb-8">
                   
                    <div className="flex justify-between items-center text-xs border-b border-gray-50 pb-4">
                        <div className="flex flex-col gap-1">
                            <span className="text-gray-400 font-bold uppercase tracking-wider">Research Papers</span>
                            <span className="text-[#004d66] font-black flex items-center gap-2">
                                <FaFlask className="text-[#FF7350]" /> {number_of_research}+ Papers
                            </span>
                        </div>
                        <div className="text-right flex flex-col gap-1">
                            <span className="text-gray-400 font-bold uppercase tracking-wider">Deadline</span>
                            <span className="text-[#004d66] font-black flex items-center justify-end gap-2">
                                <FaCalendarAlt className="text-[#FF7350]" /> {admission_date}
                            </span>
                        </div>
                    </div>

                 
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 italic">
                        {research_history}
                    </p>
                </div>

                
                <div className="mt-auto">
                    <Link to={`/allColleges/${college?._id}`} className="w-full">
                        <button className="relative w-full inline-flex items-center justify-center px-10 py-4 overflow-hidden font-black text-[#004d66] transition duration-500 ease-out border-2 border-[#004d66] shadow-sm group/btn rounded-2xl hover:text-white">
                            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white bg-[#FF7350] duration-300 -translate-x-full group-hover/btn:translate-x-0 ease">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </span>
                            <span className="absolute flex items-center justify-center w-full h-full transition-all duration-300 transform group-hover/btn:translate-x-full ease text-xs uppercase tracking-[2px]">
                                Explore Details
                            </span>
                            <span className="relative invisible text-xs uppercase tracking-[2px]">Explore Details</span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CollegeCard;