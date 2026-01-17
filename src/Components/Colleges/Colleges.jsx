import { useEffect, useState } from "react";
import "./Colleges.css";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Colleges = () => {
  const [searchText, setSearchText] = useState("");
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    fetch("https://book-colleges-server.vercel.app/allColleges")
      .then((res) => res.json())
      .then((data) => setColleges(data));
  }, []);

  const handleSearch = () => {
    if (!searchText.trim()) return;

    fetch(
      `https://book-colleges-server.vercel.app/collegeSearchByCollegeName/${searchText}`
    )
      .then((res) => res.json())
      .then((data) => setColleges(data));
  };

  return (
    <div>
      <img
        className="home-page-image"
        src="https://i.ibb.co/GFY675S/Picsart-23-10-17-13-01-42-997.jpg"
        alt="Banner"
      />

      <div className="mt-[-85px] sm:mt-[-300px] text-center">
        <div className="search-box search-box-edit pt-2 mt-5">
          <input
            type="text"
            placeholder="Search Your College"
            className="p-2 border sm:w-40 md:w-72"
            onChange={(e) => setSearchText(e.target.value)}
          />

          <button
            onClick={handleSearch}
            className="btn-colors inline-flex items-center gap-2 p-3 border shadow-md"
          >
            <FaSearch />
            <span>Search</span>
          </button>
        </div>
      </div>

      <div className="card-section grid md:grid-cols-3 sm:grid-cols-1 mt-12 lg:ms-12 md:p-10">
        {colleges.slice(0, 3).map((college) => (
          <div key={college?._id} className="mt-8">
            <div className="card card-edit w-80 bg-base-100 shadow-xl">
              <figure>
                <img
                  className="college-img"
                  src={college?.college_image}
                  alt={college?.college_name}
                />
              </figure>

              <div className="card-body collegeCard-body">
                <h2 className="card-title">{college?.college_name}</h2>

                <div className="flex justify-between">
                  <p>
                    <b>Event:</b> {college?.event}
                  </p>
                  <p>
                    <b>Sport:</b> {college?.sport}
                  </p>
                </div>

                <p>
                  <b>Research History:</b> {college?.research_history}
                </p>

                <div className="flex justify-between items-center mt-2">
                  <p>
                    <b>Admission Date:</b> {college?.admission_date}
                  </p>

                  <Link to={`/allColleges/${college?._id}`}>
                    <button className="btn-color px-4 py-2 border shadow-md">
                      View
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Colleges;
