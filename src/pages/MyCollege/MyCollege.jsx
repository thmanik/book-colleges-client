/* eslint-disable react/no-unescaped-entities */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";
import { Helmet } from "react-helmet";
import { FaGraduationCap, FaCalendarAlt, FaPhoneAlt, FaEnvelope, FaBookOpen, FaStar } from "react-icons/fa";

const MyCollege = () => {
    const { user } = useContext(AuthContext);
    const [usersData, setUserData] = useState([]);

    useEffect(() => {
        fetch(`https://book-colleges-server.vercel.app/mycollege?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setUserData(data);
            });
    }, [user]);

    return (
        <div className="min-h-screen bg-[#F8FAFC] py-12 px-4 md:px-12">
            <Helmet>
                <meta charSet="utf-8" />
                <title>My Applications - Book College</title>
            </Helmet>

           
            <div className="max-w-6xl mx-auto mb-10 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-black text-[#004d66]">
                    My <span className="text-[#FF7350]">Applications</span>
                </h2>
                <p className="text-gray-500 mt-2 italic font-medium">Tracking your academic journey and submissions.</p>
                <div className="w-20 h-1.5 bg-[#FF7350] rounded-full mt-3 mx-auto md:mx-0"></div>
            </div>

            
            <div className="max-w-6xl mx-auto grid grid-cols-1 gap-8">
                {usersData.length > 0 ? (
                    usersData.map((userData) => (
                        <div key={userData?._id} className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col md:flex-row">
                            
                            
                            <div className="bg-[#004d66] md:w-1/4 p-8 flex flex-col items-center justify-center text-white text-center">
                                <div className="relative mb-4">
                                    <div className="w-24 h-24 rounded-2xl overflow-hidden ring-4 ring-[#FF7350]/30 shadow-2xl">
                                        <img className="w-full h-full object-cover" src={userData?.photo} alt="Student" />
                                    </div>
                                    <div className="absolute -bottom-2 -right-2 bg-[#FF7350] p-2 rounded-lg shadow-lg">
                                        <FaGraduationCap size={18} />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold leading-tight">{userData?.name}</h3>
                                <div className="flex items-center gap-2 text-blue-100/70 text-sm mt-1">
                                    <FaCalendarAlt size={12} />
                                    <span>DOB: {userData?.dateOfBirth}</span>
                                </div>
                            </div>

                           
                            <div className="md:w-3/4 p-8 grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                                
                             
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-gray-50 rounded-xl text-[#004d66]">
                                            <FaEnvelope />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Email Address</p>
                                            <p className="text-gray-700 font-bold">{userData?.email}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-gray-50 rounded-xl text-[#004d66]">
                                            <FaPhoneAlt />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Phone Number</p>
                                            <p className="text-gray-700 font-bold">{userData?.phoneNumber}</p>
                                        </div>
                                    </div>
                                </div>

                               
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-orange-50 rounded-xl text-[#FF7350]">
                                            <FaGraduationCap />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Institution</p>
                                            <p className="text-xl font-black text-[#004d66]">{userData?.collegeName}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
                                            <FaBookOpen />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Major/Subject</p>
                                            <p className="text-gray-700 font-bold">{userData?.subject}</p>
                                        </div>
                                    </div>
                                </div>

                                
                                <div className="md:col-span-2 mt-4 pt-6 border-t border-gray-100 flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                                        <span className="text-xs font-black text-gray-400 uppercase tracking-widest">Application Submitted</span>
                                    </div>
                                    <button className="flex items-center gap-2 bg-[#FF7350] hover:bg-[#004d66] text-white px-6 py-2.5 rounded-xl font-bold transition-all duration-300 shadow-lg shadow-[#FF7350]/20 active:scale-95 group">
                                        <FaStar className="group-hover:rotate-45 transition-transform" /> Add Review
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="bg-white p-12 rounded-3xl text-center border-2 border-dashed border-gray-200">
                        <FaGraduationCap className="mx-auto text-6xl text-gray-200 mb-4" />
                        <h2 className="text-2xl font-bold text-gray-400">No Applications Found</h2>
                        <p className="text-gray-400 mt-1">You haven't applied to any colleges yet.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyCollege;