import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import './applyForm.css';

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
        <div className="hero min-h-screen bg-base-200 py-6">
            <Helmet>
                <meta charSet="utf-8" />
                <title>ApplyForm - {data?.college_name} - Book College</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

            <div className="card apply-card max-w-sm shadow-2xl bg-base-100">
                <div className="text-center">
                    <h1 className="text-2xl text-color mt-4 font-bold">Application Form</h1>
                </div>
                <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                        <label className="label-text text-color">College Name</label>
                        <input type="text" name="collegeName" className="text-color input input-bordered" defaultValue={data?.college_name} readOnly />
                    </div>
                    <div className="form-control">
                        <label className="label-text text-color">Candidate Name</label>
                        <input type="text" name="name" className="text-color input input-bordered" defaultValue={user?.displayName} readOnly />
                    </div>
                    <div className="form-control">
                        <label className="label-text text-color">Email</label>
                        <input type="email" name="email" className="text-color input input-bordered" defaultValue={user?.email} readOnly />
                    </div>
                    <div className="form-control">
                        <label className="label-text text-color">Phone Number</label>
                        <input type="text" name="phoneNumber" placeholder="Phone Number" className="text-color input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label-text text-color">Subject</label>
                        <input type="text" name="subject" placeholder="Subject Name" className="text-color input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label-text text-color">Date Of Birth</label>
                        <input type="date" name="dateOfBirth" className="text-color input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label-text text-color">Photo URL</label>
                        <input type="text" name="photo" placeholder="Photo URL" className="text-color input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-color">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ApplyForm;