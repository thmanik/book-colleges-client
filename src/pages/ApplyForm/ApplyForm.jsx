import { useContext } from "react";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import { FaGraduationCap, FaUser, FaEnvelope, FaPhone, FaBook, FaCalendarAlt, FaLink, FaMapMarkerAlt, FaVenusMars, FaAward, FaSchool } from "react-icons/fa";

const ApplyForm = () => {
    const data = useLoaderData();
    const { user } = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        
        const userdata = {
            collegeName: form.collegeName.value,
            name: form.name.value,
            email: form.email.value,
            phoneNumber: form.phoneNumber.value,
            subject: form.subject.value,
            dateOfBirth: form.dateOfBirth.value,
            photo: form.photo.value,
            address: form.address.value,
            gender: form.gender.value,
           
            sscGPA: form.sscGPA.value,
            hscGPA: form.hscGPA.value,
        };

        fetch('https://book-colleges-server.vercel.app/userInfo', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userdata)
        })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your application has been submitted',
                    showConfirmButton: false,
                    timer: 1500
                });
                form.reset();
            }
        })
        .catch(err => console.error(err));
    };

    return (
        <div className="min-h-screen bg-[#F3F4F6] py-12 px-4">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Apply - {data?.college_name} - Book College</title>
            </Helmet>

            <div className="max-w-4xl mx-auto">
                <div className="bg-[#004d66] rounded-t-3xl p-8 text-center text-white">
                    <FaGraduationCap className="text-5xl mx-auto mb-4 text-[#FF7350]" />
                    <h1 className="text-3xl font-black uppercase tracking-wide">Admission Application</h1>
                    <p className="mt-2 text-blue-100 opacity-80 italic">Fill in your academic details correctly.</p>
                </div>

                <div className="bg-white rounded-b-3xl shadow-2xl p-8 md:p-12">
                    <form onSubmit={handleRegister} className="space-y-8">
                        
                        
                        <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100">
                            <label className="text-sm font-bold text-[#FF7350] uppercase tracking-widest">Applying For</label>
                            <input 
                                type="text" 
                                name="collegeName" 
                                className="w-full bg-transparent text-2xl font-black text-[#004d66] border-none focus:ring-0 p-0" 
                                defaultValue={data?.college_name} 
                                readOnly 
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                           
                            <div className="space-y-2">
                                <label className="flex items-center gap-2 font-bold text-gray-700"><FaUser className="text-[#004d66]" /> Candidate Name</label>
                                <input type="text" name="name" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 outline-none" defaultValue={user?.displayName} readOnly />
                            </div>

                            <div className="space-y-2">
                                <label className="flex items-center gap-2 font-bold text-gray-700"><FaEnvelope className="text-[#004d66]" /> Email Address</label>
                                <input type="email" name="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 outline-none" defaultValue={user?.email} readOnly />
                            </div>

                        
                            <div className="space-y-2">
                                <label className="flex items-center gap-2 font-bold text-gray-700"><FaBook className="text-[#004d66]" /> Desired Subject</label>
                                <input type="text" name="subject" placeholder="e.g. BBA, CSE, EEE" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#FF7350] outline-none transition-all" required />
                            </div>

                            <div className="space-y-2">
                                <label className="flex items-center gap-2 font-bold text-gray-700"><FaPhone className="text-[#004d66]" /> Contact Number</label>
                                <input type="text" name="phoneNumber" placeholder="+8801xxxxxxxxx" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#FF7350] outline-none transition-all" required />
                            </div>

                         
                            <div className="space-y-2">
                                <label className="flex items-center gap-2 font-bold text-gray-700"><FaSchool className="text-[#004d66]" /> SSC GPA / Result</label>
                                <input type="text" name="sscGPA" placeholder="e.g. 5.00" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#FF7350] outline-none transition-all" required />
                            </div>

                            <div className="space-y-2">
                                <label className="flex items-center gap-2 font-bold text-gray-700"><FaAward className="text-[#004d66]" /> HSC GPA / Result</label>
                                <input type="text" name="hscGPA" placeholder="e.g. 5.00" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#FF7350] outline-none transition-all" required />
                            </div>

                            <div className="space-y-2">
                                <label className="flex items-center gap-2 font-bold text-gray-700"><FaVenusMars className="text-[#004d66]" /> Gender</label>
                                <select name="gender" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#FF7350] outline-none transition-all bg-white" required>
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="flex items-center gap-2 font-bold text-gray-700"><FaCalendarAlt className="text-[#004d66]" /> Date of Birth</label>
                                <input type="date" name="dateOfBirth" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#FF7350] outline-none transition-all" required />
                            </div>
                        </div>

                        
                        <div className="space-y-2">
                            <label className="flex items-center gap-2 font-bold text-gray-700"><FaLink className="text-[#004d66]" /> Candidate Photo URL</label>
                            <input type="text" name="photo" placeholder="https://example.com/photo.jpg" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#FF7350] outline-none transition-all" required />
                        </div>

                        
                        <div className="space-y-2">
                            <label className="flex items-center gap-2 font-bold text-gray-700"><FaMapMarkerAlt className="text-[#004d66]" /> Permanent Address</label>
                            <textarea name="address" rows="2" placeholder="Full address with City and Post Code" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#FF7350] outline-none transition-all" required></textarea>
                        </div>

                        <div className="pt-6">
                            <button className="w-full bg-[#004d66] hover:bg-[#FF7350] text-white font-black py-4 rounded-2xl shadow-xl transition-all duration-300 transform active:scale-95 uppercase tracking-widest text-lg">
                                Submit Application
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ApplyForm;