import { useLoaderData } from "react-router-dom";
import './SingleCardDetails.css'
import { FaCheckCircle } from "react-icons/fa";
import { Helmet } from "react-helmet";

const SingleCardDetails = () => {
    const singleCollege = useLoaderData()
    console.log(singleCollege)
    const { college_image, event, college_name, sports_facilities, admission_process,admission_date, events_details, research_work, sports_categories } = singleCollege;
    return (
        <div className="my-10  mx-10 singleCard-section">
             <Helmet>
                <meta charSet="utf-8" />
                <title>{college_name} Details-Book college</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img className="imagee-size" src={college_image} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title"><span className="college-name">{college_name}</span></h2>
                    <div>
                        <p><span className="font-bold ">Admission Date:</span> <span className="color">{admission_date}</span> </p>
                        <p><span className="font-bold">Event: </span><span className="color">{event}</span> </p>
                        <p><span className="font-bold">Event Details: </span>{events_details} </p>
                        <p><span className="font-bold">Admission Process: </span>{admission_process}</p>
                        <p><span className="font-bold">Research Work: </span>{research_work}</p>
                        <div className="flex my-2">
                        <p><span className="font-bold">Sport Categories:</span>{sports_categories.map(category=><ul key={category._id}><li className="flex "><FaCheckCircle className="mt-1 check-icon"></FaCheckCircle><span className="ms-1">{category}</span></li></ul>)}</p>
                        <p><span className="font-bold">Sport Categories:</span>{sports_facilities.map(category=><ul key={category._id}><li className="flex"><FaCheckCircle className="mt-1 check-icon"></FaCheckCircle><span className="ms-1">{category}</span></li></ul>)}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SingleCardDetails;