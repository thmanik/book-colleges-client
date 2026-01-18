import { useLoaderData, Link } from "react-router-dom";
import { FaCalendarAlt, FaArrowRight, FaCheckCircle, FaLightbulb, FaRocket } from "react-icons/fa";
import { Helmet } from "react-helmet";
import Loading from "../../components/Loading/Loading";

const SingleCardDetails = () => {
    const singleCollege = useLoaderData();

    if (!singleCollege) {
        return <Loading />;
    }

    const { 
        _id, college_image, college_name, sports_facilities, 
        admission_process, admission_date, events_details, 
        research_work, sports_categories 
    } = singleCollege;

    return (
        <div className="bg-[#F9FBFC] min-h-screen">
            <Helmet>
                <meta charSet="utf-8" />
                <title>{college_name} | Admission Details</title>
            </Helmet>

          
            <div className="max-w-7xl mx-auto px-4 md:px-8  my-8 md:my-10 py-7 md:py-16">
                
               
                <div className="mb-14 border-b-2 border-gray-100 pb-12">
                    <div className="flex items-center gap-2 text-secondary font-bold uppercase tracking-[4px] text-md mb-4">
                        <span className="w-8 h-[2px] bg-secondary"></span> institution profile
                    </div>
                    <h1 className="text-3xl md:text-6xl font-black text-gray-900 tracking-tight mb-8">
                        {college_name}
                    </h1>
                    <div className="flex flex-wrap items-center gap-4">
                        <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-2xl border-2 border-gray-100 shadow-sm">
                            <FaCalendarAlt className="text-primary" />
                            <span className="text-sm font-bold text-gray-700">Deadline: {admission_date}</span>
                        </div>
                        <div className="hidden md:block h-6 w-[2px] bg-gray-200 mx-2"></div>
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest bg-gray-100 px-4 py-2 rounded-lg">Verified Partner</span>
                    </div>
                </div>

                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-12">
                    
                    
                    <div className="lg:col-span-7 space-y-16">
                       
                        <div className="rounded-sm overflow-hidden shadow-md border-2 border-white">
                            <img 
                                src={college_image} 
                                alt={college_name} 
                                className="w-full md:h-[550px] object-cover hover:scale-105 transition-transform duration-1000" 
                            />
                        </div>

                        
                        <div className="relative pl-4 md:pl-8 border-l-4 border-primary">
                            <h2 className="text-xl md:text-3xl font-black text-gray-900 mb-2 md:mb-6 uppercase tracking-tight">Admission Process</h2>
                            <p className="text-gray-600 md:leading-relaxed text-md md:text-xl font-medium">
                                {admission_process}
                            </p>
                        </div>

                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-10 rounded-[2rem] bg-white border-2 border-gray-100 shadow-xl shadow-gray-200/40 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -mr-10 -mt-10 transition-all group-hover:scale-150"></div>
                                <FaRocket className="text-blue-500 mb-6 text-2xl" />
                                <h4 className="text-gray-900 font-black mb-4 uppercase text-xs tracking-[2px]">Research Focus</h4>
                                <p className="text-gray-500 text-sm leading-relaxed relative z-10">{research_work}</p>
                            </div>

                            <div className="p-10 rounded-[2rem] bg-white border-2 border-gray-100 shadow-xl shadow-gray-200/40 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-orange-50 rounded-bl-full -mr-10 -mt-10 transition-all group-hover:scale-150"></div>
                                <FaLightbulb className="text-orange-500 mb-6 text-2xl" />
                                <h4 className="text-gray-900 font-black mb-4 uppercase text-xs tracking-[2px]">Campus Events</h4>
                                <p className="text-gray-500 text-sm leading-relaxed relative z-10">{events_details}</p>
                            </div>
                        </div>
                    </div>

                    
                    <div className="lg:col-span-5">
                        <div className="sticky top-32">
                            <div className="bg-white p-10 rounded-sm border-1 border-gray-50  shadow-sm">
                                <h3 className="text-2xl font-black mb-10 text-gray-900 flex items-center gap-3">
                                    Facilities <span className="text-gray-300 font-light text-xl">/ Specs</span>
                                </h3>
                                
                                <div className="space-y-10">
                                  
                                    <div>
                                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-[3px] mb-5">Athletics Categories</p>
                                        <div className="flex flex-wrap gap-2">
                                            {sports_categories?.map((category, i) => (
                                                <span key={i} className="bg-gray-50 text-gray-800 border border-gray-200 px-5 py-2 rounded-xl text-xs font-bold hover:bg-primary hover:text-white transition-colors cursor-default">
                                                    {category}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    
                                    <div>
                                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-[3px] mb-5">Top Tier Facilities</p>
                                        <ul className="grid grid-cols-1 gap-4">
                                            {sports_facilities?.map((facility, i) => (
                                                <li key={i} className="flex items-center gap-4 text-gray-700 font-bold text-sm bg-gray-50/50 p-4 rounded-2xl border border-gray-100">
                                                    <FaCheckCircle className="text-green-500" /> {facility}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                
                                <div className="mt-12">
                                    <Link 
                                        to={`/applyForm/${_id}`}
                                        className="group flex items-center justify-center gap-4 bg-primary text-white w-full px-2 md:px-5 py-3 md:py-5 rounded-3xl font-black text-sm md:text-lg hover:bg-secondary transition-all duration-500 shadow-2xl active:scale-95 overflow-hidden relative"
                                    >
                                        <span className="relative z-10 uppercase tracking-widest">Apply For Admission</span>
                                        <FaArrowRight className="group-hover:translate-x-2 transition-transform relative z-10" />
                                    </Link>
                                    <div className="flex items-center justify-center gap-2 mt-6 text-gray-400">
                                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                        <p className="text-[10px] font-bold uppercase tracking-widest italic">Applications are currently open</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCardDetails;