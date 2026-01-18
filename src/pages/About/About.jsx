import { Link } from "react-router-dom";

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-white">
            
            <div className="bg-primary py-20 px-6 text-center">
                <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
                    Your Journey to <span className="text-secondary">Success</span> Starts Here
                </h1>
                <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                    We are dedicated to simplifying the college admission process for students worldwide. 
                    Empowering the next generation of leaders through education and guidance.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
                
                
                <section className="grid grid-cols-1 md:grid-cols-3 gap-10 border-b pb-16">
                    <div className="md:col-span-1">
                        <h2 className="text-3xl font-bold text-primary sticky top-20">Who We Are</h2>
                    </div>
                    <div className="md:col-span-2 space-y-6 text-gray-700 leading-relaxed text-lg">
                        <p>
                            Founded in 2000, <b>Book Colleges</b> has emerged as a trusted companion for students navigating the complex landscape of higher education. We understand that choosing a college is one of the most significant decisions in a student's life.
                        </p>
                        <p>
                            Our team consists of academic consultants, technology enthusiasts, and career counselors who work tirelessly to bring all the information you need—from college ratings to research history—under one single platform.
                        </p>
                    </div>
                </section>

             
                <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="bg-gray-50 p-10 rounded-3xl border-t-8 border-secondary">
                        <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
                        <p className="text-gray-600">
                            To bridge the information gap between top-tier institutions and talented students. We aim to provide a transparent, accessible, and user-friendly platform that helps students make informed choices based on data and real-world outcomes.
                        </p>
                    </div>
                    <div className="bg-primary p-10 rounded-3xl border-t-8 border-secondary text-white">
                        <h3 className="text-2xl font-bold text-secondary mb-4">Our Vision</h3>
                        <p className="text-gray-100">
                            To become the world's leading academic portal where every student, regardless of their background, can find the resources and opportunities they need to achieve their educational dreams.
                        </p>
                    </div>
                </section>

                
                <section className="space-y-10">
                    <h2 className="text-3xl font-bold text-primary text-center">Our Core Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { title: "Transparency", desc: "Providing honest reviews and verified data for every institution." },
                            { title: "Innovation", desc: "Using AI and modern tools to match students with the right courses." },
                            { title: "Student-First", desc: "Prioritizing student needs and future careers in everything we do." },
                            { title: "Global Reach", desc: "Connecting students with colleges across borders and cultures." }
                        ].map((value, index) => (
                            <div key={index} className="p-8 border rounded-2xl hover:bg-gray-50 transition-colors">
                                <h4 className="font-bold text-secondary text-xl mb-2">{value.title}</h4>
                                <p className="text-gray-600 text-sm">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

               
                <section className="bg-gray-50 p-12 rounded-3xl text-center">
                    <h2 className="text-3xl font-bold text-primary mb-8">How We Help You</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="space-y-3">
                            <span className="text-5xl font-black text-secondary/20">01</span>
                            <h4 className="text-xl font-bold">Research</h4>
                            <p className="text-gray-500 text-sm">Deep dive into college histories, facilities, and ratings.</p>
                        </div>
                        <div className="space-y-3">
                            <span className="text-5xl font-black text-secondary/20">02</span>
                            <h4 className="text-xl font-bold">Guidance</h4>
                            <p className="text-gray-500 text-sm">Expert advice on admission dates and process requirements.</p>
                        </div>
                        <div className="space-y-3">
                            <span className="text-5xl font-black text-secondary/20">03</span>
                            <h4 className="text-xl font-bold">Enrollment</h4>
                            <p className="text-gray-500 text-sm">Finalize your application and secure your future seat.</p>
                        </div>
                    </div>
                </section>

                
                <section className="text-center py-10">
                    <h2 className="text-2xl font-bold text-primary mb-4">Ready to start your academic journey?</h2>
                    <p className="text-gray-500 mb-6">Contact our counselors today for a free session.</p>
                    <Link to={"/admission"} className="bg-secondary text-white px-10 py-4 rounded-full font-bold hover:shadow-lg transition-shadow">
                        Join Us Now
                    </Link>
                </section>
            </div>
        </div>
    );
};

export default AboutPage;