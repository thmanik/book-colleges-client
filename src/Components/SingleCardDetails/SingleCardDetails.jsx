import { useLoaderData } from "react-router-dom";
import './SingleCardDetails.css'

const SingleCardDetails = () => {
    const singleCollege = useLoaderData()
    console.log(singleCollege)
    const { college_image, event, college_name, sports_facilities, admission_process,admission_date, events_details, research_work, sports_categories } = singleCollege;
    return (
        <div className="my-10 mx-10">
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img className="imagee-size" src={college_image} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{college_name}</h2>
                    <div>
                        <p><span className="font-bold ">Admission Date:</span> <span className="color">{admission_date}</span> </p>
                        <p><span className="font-bold">Event: </span>{event} </p>
                        <p><span className="font-bold">Event Details: </span>{events_details} </p>
                        <p><span className="font-bold">Admission Process: </span>{admission_process}</p>
                        <p><span className="font-bold">Research Work: </span>{research_work}</p>
                        <div className="flex my-2">
                        <p><span className="font-bold">Sport Categories:</span>{sports_categories.map(category=><ul key={category._id}><li>{category}</li></ul>)}</p>
                        <p><span className="font-bold">Sport Categories:</span>{sports_facilities.map(category=><ul key={category._id}><li>{category}</li></ul>)}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SingleCardDetails;