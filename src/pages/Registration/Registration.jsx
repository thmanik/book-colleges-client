import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form'; 
import { AuthContext } from '../../components/AuthProvider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Registration = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/';
    const { createUser, updateUserData } = useContext(AuthContext);
    const [error, setError] = useState('');

    
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        const { name, email, password, photo } = data;
        setError('');

        createUser(email, password)
            .then(result => {
                updateUserData(result.user, name, photo);
                reset(); 
                navigate(from, { replace: true });
            })
            .catch(error => {
                setError(error.message);
            });
    };

    return (
        <div className="flex items-center justify-center bg-base-200 p-4 min-h-screen">
            <Helmet>
                <title>Registration - Book College</title>
            </Helmet>

            <div className="my-5 md:my-10 w-full max-w-sm bg-base-100 rounded-xl shadow-md overflow-hidden">
                <div className="p-8">
                    <div className="text-center mb-6">
                        <h1 className="text-2xl font-bold text-gray-800">Register Now!</h1>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                       
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-gray-700">Name</span>
                            </label>
                            <input 
                                type="text" 
                                {...register("name", { required: "Name is required" })}
                                placeholder="Enter your name" 
                                className={`input input-bordered w-full text-black focus:outline-none ${errors.name ? 'border-red-500' : 'focus:border-blue-400'}`} 
                            />
                            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                        </div>

                     
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-gray-700">Email</span>
                            </label>
                            <input 
                                type="email" 
                                {...register("email", { 
                                    required: "Email is required",
                                    pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" }
                                })}
                                placeholder="Enter your email" 
                                className={`input input-bordered w-full text-black focus:outline-none ${errors.email ? 'border-red-500' : 'focus:border-blue-400'}`} 
                            />
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                        </div>

                    
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-gray-700">Password</span>
                            </label>
                            <input 
                                type="password" 
                                {...register("password", { 
                                    required: "Password is required",
                                    minLength: { value: 6, message: "Minimum 6 characters required" }
                                })}
                                placeholder="Enter password" 
                                className={`input input-bordered w-full text-black focus:outline-none ${errors.password ? 'border-red-500' : 'focus:border-blue-400'}`} 
                            />
                            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-gray-700">Photo URL</span>
                            </label>
                            <input 
                                type="text" 
                                {...register("photo", { required: "Photo URL is required" })}
                                placeholder="Photo URL link" 
                                className={`input input-bordered w-full text-black focus:outline-none ${errors.photo ? 'border-red-500' : 'focus:border-blue-400'}`} 
                            />
                            {errors.photo && <p className="text-red-500 text-xs mt-1">{errors.photo.message}</p>}
                        </div>

                        {error && (
                            <p className="text-red-600 text-sm mt-2">{error}</p>
                        )}

                        <div className="form-control mt-6">
                            <button type="submit" className="btn bg-primary hover:bg-[#026685] text-white border-none w-full font-bold">
                                Registration
                            </button>
                        </div>

                        <div className="text-center mt-4">
                            <p className="text-sm text-gray-600">
                                Already have an account? 
                                <Link className="text-primary font-bold ml-1 hover:underline" to="/login">Login</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;