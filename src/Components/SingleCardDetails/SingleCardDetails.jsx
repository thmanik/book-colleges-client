import { useLoaderData } from "react-router-dom";


const SingleCardDetails = () => {
    const singleCollege = useLoaderData()
    console.log(singleCollege)
    const { college_image, college_name, admission_process, events_details, research_work, sports_categories } = singleCollege;
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={college_image} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{college_name}</h2>
                    <div>
                        <p><span className="font-bold">Event Details: </span>{events_details} </p>
                        <p><span className="font-bold">Admission Process: </span>{admission_process}</p>
                        <p><span className="font-bold">Research Work: </span>{research_work}</p>
                        <p><span className="font-bold">Sport Categories:</span>{sports_categories.map(category=><ul key={category._id}><li>{category}</li></ul>)}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SingleCardDetails;