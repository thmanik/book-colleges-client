import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../components/AuthProvider/AuthProvider';
import { Helmet } from 'react-helmet';

const Login = () => {
    const { googleLogin, githubLogin, signIn } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

   
    const { register, handleSubmit, formState: { errors } } = useForm();

    const from = location?.state?.from?.pathname || '/';

    
    const onSubmit = data => {
        const { email, password } = data;
        setError('');

        signIn(email, password)
            .then(result => {
                console.log('Login Success:', result.user);
                navigate(from, { replace: true });
            })
            .catch(err => {
                setError(err.message);
            });
    };

    const handleGoogleLogin = () => {
        setError('');
        googleLogin()
            .then(result => {
                navigate(from, { replace: true });
            })
            .catch(err => setError(err.message));
    };

    const handleGithubLogin = () => {
        setError('');
        githubLogin()
            .then(result => {
                navigate(from, { replace: true });
            })
            .catch(err => setError(err.message));
    };

    return (
        <div className="flex items-center justify-center bg-base-200 p-4 min-h-[calc(100vh-80px)]">
            <Helmet>
                <title>Login - Book College</title>
            </Helmet>

            <div className="my-5 md:my-10 w-full max-w-sm bg-base-100 rounded-xl shadow-md overflow-hidden">
                <div className="p-8">
                    <div className="text-center mb-6">
                        <h1 className="text-2xl font-bold text-gray-800">Login Now!</h1>
                    </div>

                    
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        
                       
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-gray-700">Email</span>
                            </label>
                            <input 
                                type="email" 
                                {...register("email", { required: "Email is required" })}
                                placeholder="Enter your email" 
                                className={`input input-bordered w-full text-black focus:outline-none focus:border-blue-400 ${errors.email ? 'border-red-500' : ''}`} 
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
                                    minLength: { value: 6, message: "Password must be at least 6 characters" }
                                })}
                                placeholder="Enter password" 
                                className={`input input-bordered w-full text-black focus:outline-none focus:border-blue-400 ${errors.password ? 'border-red-500' : ''}`} 
                            />
                            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
                        </div>

                       
                        {error && (
                            <p className="text-red-600 text-sm mt-2 font-medium">{error}</p>
                        )}

                        <div className="form-control mt-6">
                            <button type="submit" className="btn bg-primary hover:bg-[#026685] text-white border-none w-full font-bold uppercase">
                                Login
                            </button>
                        </div>

                        <div className="text-center mt-4">
                            <p className="text-sm text-gray-600">
                                New User? 
                                <Link className="text-primary font-bold ml-1 hover:underline" to="/registration">Register</Link> here.
                            </p>
                        </div>
                    </form>

                    <div className="mt-8">
                        <div className="divider text-gray-400 text-sm italic">Or Login With</div>
                        <div className="flex flex-col gap-3 mt-4">
                            <button 
                                onClick={handleGoogleLogin} 
                                className="btn btn-outline border-primary text-primary hover:bg-primary hover:border-primary w-full flex items-center gap-2 font-semibold"
                            >
                                <FaGoogle /> Google
                            </button>
                            <button 
                                onClick={handleGithubLogin} 
                                className="btn btn-outline border-primary text-primary hover:bg-primary hover:border-primary w-full flex items-center gap-2 font-semibold"
                            >
                                <FaGithub /> Github
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;