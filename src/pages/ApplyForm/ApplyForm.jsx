import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import { FaGraduationCap, FaUser, FaEnvelope, FaPhone, FaBook, FaCalendarAlt, FaLink, FaMapMarkerAlt, FaVenusMars, FaAward, FaSchool } from "react-icons/fa";

const ApplyForm = () => {
    const data = useLoaderData();
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = userdata => {
        userdata.collegeName = data?.college_name;
        userdata.name = user?.displayName;
        userdata.email = user?.email;

        fetch('https://book-colleges-server.vercel.app/userInfo', {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(userdata)
        })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Submitted Successfully',
                    showConfirmButton: false,
                    timer: 1500
                });
                reset();
            }
        })
        .catch(err => console.error(err));
    };

    return (
        <div className="min-h-screen bg-[#F3F4F6] py-12 px-4">
            <Helmet>
                <title>Apply - {data?.college_name}</title>
            </Helmet>

            <div className="max-w-4xl mx-auto">
                <div className="bg-primary rounded-t-3xl p-8 text-center text-white">
                    <FaGraduationCap className="text-5xl mx-auto mb-4 text-secondary" />
                    <h1 className="text-3xl font-black uppercase tracking-wide">Admission Application</h1>
                </div>

                <div className="bg-white rounded-b-3xl shadow-2xl p-8 md:p-12">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                        <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100">
                            <label className="text-sm font-bold text-secondary uppercase tracking-widest">Applying For</label>
                            <input 
                                type="text" 
                                className="w-full bg-transparent text-2xl font-black text-primary border-none focus:ring-0 p-0 outline-none" 
                                defaultValue={data?.college_name} 
                                readOnly 
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="flex items-center gap-2 font-bold text-gray-700"><FaUser /> Name</label>
                                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 outline-none" defaultValue={user?.displayName} readOnly />
                            </div>

                            <div className="space-y-2">
                                <label className="flex items-center gap-2 font-bold text-gray-700"><FaEnvelope /> Email</label>
                                <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 outline-none" defaultValue={user?.email} readOnly />
                            </div>

                            <div className="space-y-2">
                                <label className="flex items-center gap-2 font-bold text-gray-700"><FaBook /> Subject</label>
                                <input {...register("subject", { required: true })} placeholder="BBA, CSE..." className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none" />
                            </div>

                            <div className="space-y-2">
                                <label className="flex items-center gap-2 font-bold text-gray-700"><FaPhone /> Phone</label>
                                <input {...register("phoneNumber", { required: true })} placeholder="+8801..." className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none" />
                            </div>

                            <div className="space-y-2">
                                <label className="flex items-center gap-2 font-bold text-gray-700"><FaSchool /> SSC GPA</label>
                                <input {...register("sscGPA", { required: true })} placeholder="5.00" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none" />
                            </div>

                            <div className="space-y-2">
                                <label className="flex items-center gap-2 font-bold text-gray-700"><FaAward /> HSC GPA</label>
                                <input {...register("hscGPA", { required: true })} placeholder="5.00" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none" />
                            </div>

                            <div className="space-y-2">
                                <label className="flex items-center gap-2 font-bold text-gray-700"><FaVenusMars /> Gender</label>
                                <select {...register("gender", { required: true })} className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white outline-none">
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="flex items-center gap-2 font-bold text-gray-700"><FaCalendarAlt /> Date of Birth</label>
                                <input type="date" {...register("dateOfBirth", { required: true })} className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="flex items-center gap-2 font-bold text-gray-700"><FaLink /> Photo URL</label>
                            <input {...register("photo", { required: true })} placeholder="URL link" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none" />
                        </div>

                        <div className="space-y-2">
                            <label className="flex items-center gap-2 font-bold text-gray-700"><FaMapMarkerAlt /> Address</label>
                            <textarea {...register("address", { required: true })} rows="2" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none"></textarea>
                        </div>

                        <div className="pt-6">
                            <button type="submit" className="w-full bg-primary hover:bg-secondary text-white font-black py-4 rounded-2xl shadow-xl transition-all duration-300 transform active:scale-95 uppercase">
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