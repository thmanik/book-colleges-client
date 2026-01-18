import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import CollegeCard from "../../components/Cards/CollegeCard";
import Loading from "../../components/Loading/Loading";

const CollegeRoute = () => {
    const [colleges, setColleges] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch('https://book-colleges-server.vercel.app/allColleges')
            .then(res => res.json())
            .then(data => {
                setColleges(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <Loading/>
    }

    return (
        <div className="bg-[#F8FAFC] min-h-screen">
            <Helmet>
                <meta charSet="utf-8" />
                <title>All Colleges - Book College</title>
            </Helmet>

            
            <div className="bg-white mt-6 md:pt-16 pb-12 px-4 border-b border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-black text-primary">
                                Explore Colleges
                            </h1>
                            <p className="text-gray-500 mt-2 text-lg">
                                Discover your next academic destination from our curated list.
                            </p>
                        </div>
                        <div className="text-primary font-bold text-sm bg-gray-100 px-4 py-2 rounded-full">
                            Total: {colleges.length} Colleges Found
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="container mx-auto px-4 md:px-6 lg:px-10 py-16">
               
                {colleges.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {colleges.map((college) => (
                            <CollegeCard key={college?._id} college={college}/>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <p className="text-gray-400 text-xl font-medium">No colleges available at the moment.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CollegeRoute;