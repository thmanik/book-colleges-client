import { useForm } from "react-hook-form";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaPaperPlane } from "react-icons/fa";

const ContactPage = () => {
    
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        alert("Thank you! Your message has been sent.");
        reset(); 
    };

    return (
        <div className="min-h-screen bg-white pb-20">
            {/* Minimal Header */}
            <div className="bg-primary py-20 px-6 text-center">
                <h1 className="text-4xl font-black text-white mb-4">
                    Contact <span className="text-secondary">Us</span>
                </h1>
                <p className="text-gray-300 max-w-xl mx-auto">
                    Have questions? We're here to help you find the perfect college.
                </p>
            </div>

            <div className="max-w-6xl mx-auto px-6 -mt-10">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
                    
                    {/* Left: Contact Info */}
                    <div className="lg:col-span-2 space-y-4">
                        {[
                            { icon: <FaPhoneAlt />, title: "Call Us", detail: "+880 1234 567 890", color: "#FF7350" },
                            { icon: <FaEnvelope />, title: "Email Us", detail: "info@bookcolleges.com", color: "#014C63" },
                            { icon: <FaMapMarkerAlt />, title: "Visit Us", detail: "Dhanmondi, Dhaka, BD", color: "#FF7350" }
                        ].map((item, index) => (
                            <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-5">
                                <div className="text-white p-4 rounded-xl shadow-md" style={{ backgroundColor: item.color }}>
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 className="text-gray-400 text-xs uppercase tracking-widest font-bold">{item.title}</h4>
                                    <p className="text-primary font-bold">{item.detail}</p>
                                </div>
                            </div>
                        ))}

                        <div className="bg-primary p-6 rounded-2xl text-white shadow-lg">
                            <h4 className="font-bold mb-4">Connect Socially</h4>
                            <div className="flex gap-3">
                                {[<FaFacebook />, <FaTwitter />, <FaLinkedin />].map((social, i) => (
                                    <a key={i} href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-all">
                                        {social}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: Message Form with React Hook Form */}
                    <div className="lg:col-span-3 bg-gray-50 p-8 md:p-10 rounded-3xl border border-gray-100">
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-primary">Send us a Message</h2>
                            <p className="text-gray-500 text-sm mt-1">We usually respond within 24 hours.</p>
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div>
                                    <input 
                                        {...register("name", { required: "Name is required" })}
                                        placeholder="Your Name"
                                        className={`w-full p-4 bg-white border rounded-xl outline-none focus:ring-2 focus:ring-secondary/20 transition-all ${errors.name ? 'border-red-500' : 'border-gray-200'}`}
                                    />
                                    {errors.name && <span className="text-red-500 text-xs mt-1 ml-1">{errors.name.message}</span>}
                                </div>
                                <div>
                                    <input 
                                        {...register("email", { 
                                            required: "Email is required",
                                            pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }
                                        })}
                                        placeholder="Email Address"
                                        className={`w-full p-4 bg-white border rounded-xl outline-none focus:ring-2 focus:ring-secondary/20 transition-all ${errors.email ? 'border-red-500' : 'border-gray-200'}`}
                                    />
                                    {errors.email && <span className="text-red-500 text-xs mt-1 ml-1">{errors.email.message}</span>}
                                </div>
                            </div>
                            
                            <div>
                                <select 
                                    {...register("subject", { required: "Please select a subject" })}
                                    className={`w-full p-4 bg-white border rounded-xl outline-none focus:ring-2 focus:ring-secondary/20 transition-all ${errors.subject ? 'border-red-500' : 'border-gray-200'}`}
                                >
                                    <option value="">Select Subject</option>
                                    <option value="Admission Support">Admission Support</option>
                                    <option value="General Inquiry">General Inquiry</option>
                                </select>
                                {errors.subject && <span className="text-red-500 text-xs mt-1 ml-1">{errors.subject.message}</span>}
                            </div>

                            <div>
                                <textarea 
                                    {...register("message", { required: "Message cannot be empty", minLength: { value: 10, message: "Min 10 characters" } })}
                                    rows="4" 
                                    placeholder="How can we help you?"
                                    className={`w-full p-4 bg-white border rounded-xl outline-none focus:ring-2 focus:ring-secondary/20 transition-all ${errors.message ? 'border-red-500' : 'border-gray-200'}`}
                                ></textarea>
                                {errors.message && <span className="text-red-500 text-xs mt-1 ml-1">{errors.message.message}</span>}
                            </div>

                            <button 
                                type="submit"
                                className="flex items-center justify-center gap-2 bg-secondary text-white font-bold py-4 px-10 rounded-xl hover:bg-primary transition-all shadow-lg active:scale-95"
                            >
                                <span>Send Message</span>
                                <FaPaperPlane size={14} />
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ContactPage;