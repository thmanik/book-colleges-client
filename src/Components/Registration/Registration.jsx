import { useContext, useState } from 'react';
import { AuthContext } from '../Providers/AuthProvider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Registration = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/';
    const { createUser, updateUserData } = useContext(AuthContext);
    const [error, setError] = useState('');

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        setError('');

        createUser(email, password)
            .then(result => {
                updateUserData(result.user, name, photo);
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => {
                setError(error.message);
            });
    };

    return (
        <div className=" flex items-center justify-center bg-base-200 p-4">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Registration - Book College</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

            
            <div className=" my-5 md:my-10 w-full max-w-sm bg-base-100 rounded-xl shadow-md overflow-hidden">
                <div className="p-8">
                    <div className="text-center mb-6">
                        <h1 className="text-2xl font-bold text-gray-800">Registration Now!</h1>
                    </div>

                    <form onSubmit={handleRegister} className="space-y-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-gray-700">Name</span>
                            </label>
                            <input 
                                type="text" 
                                name="name" 
                                placeholder="Enter your name" 
                                className="input input-bordered w-full text-black focus:outline-none focus:border-blue-400" 
                                required 
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-gray-700">Email</span>
                            </label>
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="Enter your email" 
                                className="input input-bordered w-full text-black focus:outline-none focus:border-blue-400" 
                                required 
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-gray-700">Password</span>
                            </label>
                            <input 
                                type="password" 
                                name="password" 
                                placeholder="Enter password" 
                                className="input input-bordered w-full text-black focus:outline-none focus:border-blue-400" 
                                required 
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-gray-700">Photo URL</span>
                            </label>
                            <input 
                                type="text" 
                                name="photo" 
                                placeholder="Photo URL link" 
                                className="input input-bordered w-full text-black focus:outline-none focus:border-blue-400" 
                                required 
                            />
                        </div>

                        {error && (
                            <p className="text-red-600 text-sm mt-2">{error}</p>
                        )}

                        <div className="form-control mt-6">
                            <button className="btn btn-color w-full font-bold">Registration</button>
                        </div>

                        <div className="text-center mt-4">
                            <p className="text-sm text-gray-600">
                                Already have an account? 
                                <Link className="color font-bold ml-1 hover:underline" to="/login">Login</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;