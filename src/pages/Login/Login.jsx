import { useContext, useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../components/AuthProvider/AuthProvider';
import { Helmet } from 'react-helmet';

const Login = () => {
    const { googleLogin, githubLogin, signIn } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        setError('');
        signIn(email, password)
            .then(() => {
                navigate(from, { replace: true });
            })
            .catch(err => {
                setError(err.message);
            });
    };

    const handleGoogleLogin = () => {
        setError('');
        googleLogin()
            .then(() => {
                navigate(from, { replace: true });
            })
            .catch(err => {
                setError(err.message);
            });
    };

    const handleGithubLogin = () => {
        setError('');
        githubLogin()
            .then(() => {
                navigate(from, { replace: true });
            })
            .catch(err => {
                setError(err.message);
            });
    };

    return (
        <div className="flex items-center justify-center bg-base-200 p-4">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Login - Book College</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

            <div className="my-5 md:my-10 w-full max-w-sm bg-base-100 rounded-xl shadow-md overflow-hidden">
                <div className="p-8">
                    <div className="text-center mb-6">
                        <h1 className="text-2xl font-bold text-gray-800">Login Now!</h1>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-4">
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

                        {error && (
                            <p className="text-red-600 text-sm mt-2">{error}</p>
                        )}

                        <div className="form-control mt-6">
                            <button className="btn btn-color w-full font-bold">Login</button>
                        </div>

                        <div className="text-center mt-4">
                            <p className="text-sm text-gray-600">
                                New User? 
                                <Link className="color font-bold ml-1 hover:underline" to="/registration">Register</Link> here.
                            </p>
                        </div>
                    </form>

                    {/* Social Login Section */}
                    <div className="mt-8">
                        <div className="divider text-gray-400 text-sm italic">Or Login With</div>
                        <div className="flex flex-col gap-3 mt-4">
                            <button 
                                onClick={handleGoogleLogin} 
                                className="btn btn-outline btn-color w-full flex items-center gap-2 font-semibold"
                            >
                                <FaGoogle /> Google
                            </button>
                            <button 
                                onClick={handleGithubLogin} 
                                className="btn btn-outline btn-color w-full flex items-center gap-2 font-semibold"
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