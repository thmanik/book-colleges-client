import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { FaUniversity, FaArrowRight, FaCheckCircle, FaInfoCircle } from "react-icons/fa";

const Admission = () => {
    const [collegesInfo, setCollegesInfo] = useState([]);

    useEffect(() => {
        fetch('https://book-colleges-server.vercel.app/allColleges')
            .then(res => res.json())
            .then(data => setCollegesInfo(data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="bg-[#F8FAFC] min-h-screen pb-20 font-sans">
            <Helmet>
                <title>Admission Portal | Book College</title>
            </Helmet>

            <div className="bg-white border-b border-gray-100 pt-16 pb-12 px-6">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-2 text-[#004d66] font-bold uppercase tracking-widest text-xs mb-3">
                            <span className="w-8 h-[2px] bg-[#FF7350]"></span>
                            Academic Year 2024-25
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black text-[#004d66] leading-tight">
                            College <span className="text-[#FF7350]">Admission</span> Listing
                        </h1>
                        <p className="text-gray-500 mt-4 max-w-lg">
                            Select your preferred institution from the verified list below to proceed with your online application.
                        </p>
                    </div>
                    
                  
                    <div className="bg-[#004d66] rounded-2xl p-6 text-white shadow-xl shadow-blue-900/10 flex items-center gap-6">
                        <div className="text-center border-r border-white/10 pr-6">
                            <p className="text-3xl font-black">{collegesInfo.length}</p>
                            <p className="text-[10px] uppercase opacity-60 font-bold">Institutions</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-green-400/20 flex items-center justify-center text-green-400">
                                <FaCheckCircle />
                            </div>
                            <p className="text-xs font-medium">All applications are <br/>currently active</p>
                        </div>
                    </div>
                </div>
            </div>

           
            <div className="max-w-6xl mx-auto px-6 mt-8">
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 flex items-center gap-3 text-blue-800 text-sm">
                    <FaInfoCircle className="shrink-0" />
                    <p><b>Instructions:</b> Review the college details before applying. You can apply to multiple institutions using your registered profile.</p>
                </div>
            </div>

     
            <div className="max-w-6xl mx-auto px-6 mt-10">
                <div className="grid grid-cols-1 gap-4">
                    {collegesInfo.map((college, index) => (
                        <div 
                            key={college?._id}
                            className="bg-white hover:bg-gray-50 border border-gray-200 rounded-2xl p-5 md:p-6 transition-all duration-300 flex flex-col md:flex-row items-center justify-between group shadow-sm hover:shadow-md"
                        >
                            <div className="flex items-center gap-6 w-full md:w-auto">
                               
                                <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-xl bg-gray-100 text-gray-500 font-bold group-hover:bg-[#004d66] group-hover:text-white transition-colors">
                                    {index + 1}
                                </div>
                                
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-orange-50 flex items-center justify-center text-[#FF7350] border border-orange-100">
                                        <FaUniversity size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-bold text-[#004d66] group-hover:text-[#FF7350] transition-colors">
                                            {college.college_name}
                                        </h3>
                                        <p className="text-gray-400 text-xs md:text-sm font-medium uppercase tracking-wide">
                                            Admission ID: #UG-2024-{100 + index}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 w-full md:w-auto mt-6 md:mt-0 border-t md:border-t-0 pt-4 md:pt-0">
                                <div className="hidden lg:block text-right">
                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Status</p>
                                    <p className="text-sm font-bold text-green-600">Accepting Applications</p>
                                </div>
                                
                                <Link 
                                    to={`/applyForm/${college?._id}`}
                                    className="w-full md:w-auto flex items-center justify-center gap-3 bg-[#004d66] hover:bg-[#FF7350] text-white font-bold px-8 py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-blue-900/10 active:scale-95"
                                >
                                    Apply Now <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- Footer Help Section --- */}
            <div className="max-w-6xl mx-auto px-6 mt-16 text-center">
                <p className="text-gray-400 text-sm">
                    Having trouble with the application? <a href="#" className="text-[#004d66] font-bold border-b-2 border-orange-200 hover:border-[#FF7350] transition-all">Download Admission Guide (PDF)</a>
                </p>
            </div>
        </div>
    );
};

export default Admission;