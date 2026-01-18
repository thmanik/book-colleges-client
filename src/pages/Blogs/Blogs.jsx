const BlogPage = () => {
    const admissionBlogs = [
        {
            id: 1,
            category: "Admission Guide",
            title: "Top 10 Things to Consider Before Choosing a Medical College",
            description: "Selecting the right medical college is a life-changing decision. Beyond ratings, you must look into clinical exposure, faculty expertise, and research facilities. This guide breaks down the essential factors for 2024 aspirants.",
            author: "Dr. Sarah Ahmed",
            date: "Oct 24, 2023",
            readTime: "8 min read"
        },
        {
            id: 2,
            category: "Scholarships",
            title: "How to Secure a Full-Funded Scholarship in Engineering",
            description: "Financial barriers should not stop you from quality education. We discuss the various scholarship programs available for engineering students in Bangladesh and abroad, including eligibility criteria and application tips.",
            author: "Eng. Tanvir Hossain",
            date: "Nov 02, 2023",
            readTime: "12 min read"
        },
        {
            id: 3,
            category: "Student Life",
            title: "Balancing Academics and Extra-Curricular Activities",
            description: "College life is not just about books. Engaging in sports, clubs, and research projects can significantly boost your career prospects. Learn how to manage your time effectively without compromising your GPA.",
            author: "Prof. Monirul Islam",
            date: "Nov 15, 2023",
            readTime: "6 min read"
        },
        {
            id: 4,
            category: "Career Planning",
            title: "The Rise of Artificial Intelligence in Higher Education",
            description: "How AI is shaping the future of learning and which courses are becoming most relevant in the 21st century. A deep dive into the evolving curriculum of top global universities.",
            author: "Tech Insider",
            date: "Dec 05, 2023",
            readTime: "10 min read"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            
            <div className="bg-primary py-24 px-6 text-center">
                <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
                    Admission <span className="text-secondary">Insights</span> & Tips
                </h1>
                <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
                    Stay updated with the latest news, admission strategies, and academic guides from education experts to help you navigate your college journey.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-6 -mt-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    
                   
                    <div className="lg:col-span-2 space-y-8">
                        {admissionBlogs.map((blog) => (
                            <article key={blog.id} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                        {blog.category}
                                    </span>
                                    <span className="text-gray-400 text-sm">{blog.date}</span>
                                </div>
                                <h2 className="text-2xl font-bold text-primary mb-4 hover:text-secondary cursor-pointer transition-colors">
                                    {blog.title}
                                </h2>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    {blog.description}
                                </p>
                                <div className="flex justify-between items-center pt-6 border-t border-gray-50">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">
                                            {blog.author[0]}
                                        </div>
                                        <span className="text-sm font-medium text-gray-700">{blog.author}</span>
                                    </div>
                                    <span className="text-gray-400 text-xs italic">{blog.readTime}</span>
                                </div>
                            </article>
                        ))}
                    </div>

                  
                    <div className="space-y-8">
                        {/* todos-1: will make it fully functional later */}
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                            <h3 className="text-xl font-bold text-primary mb-4">Search Articles</h3>
                            <div className="relative">
                                <input 
                                    type="text" 
                                    placeholder="Keywords..." 
                                    className="w-full p-3 bg-gray-50 border rounded-xl outline-none focus:ring-2 focus:ring-secondary transition-all"
                                />
                            </div>
                        </div>

                        {/* todos-2: will make it fully functional later */}
                        <div className="bg-primary p-8 rounded-3xl text-white shadow-xl">
                            <h3 className="text-xl font-bold mb-6 border-b border-white/10 pb-2">Popular Categories</h3>
                            <ul className="space-y-4">
                                {["Medical Admission", "Engineering Guide", "IELTS Preparation", "University Reviews", "Career Counseling"].map((item, i) => (
                                    <li key={i} className="flex justify-between items-center hover:text-secondary cursor-pointer transition-colors group">
                                        <span>{item}</span>
                                        <span className="bg-white/10 px-2 py-1 rounded text-xs group-hover:bg-secondary group-hover:text-white transition-all">12</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* todos-3: will make it fully functional later */}
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center">
                            <h3 className="text-xl font-bold text-primary mb-2">Join Our Newsletter</h3>
                            <p className="text-gray-500 text-sm mb-6">Get admission alerts directly in your inbox.</p>
                            <input 
                                type="email" 
                                placeholder="Email Address" 
                                className="w-full p-3 bg-gray-50 border rounded-xl mb-4 outline-none focus:ring-2 focus:ring-secondary"
                            />
                            <button className="w-full bg-secondary text-white font-bold py-3 rounded-xl hover:bg-primary transition-colors shadow-lg shadow-secondary/20">
                                Subscribe Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;