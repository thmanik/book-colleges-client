import { useContext, useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider/AuthProvider';
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
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Login - Book College</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

            <div className="hero min-h-screen bg-base-200">
                <div className="my-9 w-full max-w-sm">
                    <div className="text-center mb-4">
                        <h1 className="text-2xl font-bold">Login Now!</h1>
                    </div>
                    
                    <div className="card shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered text-black" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered text-black" required />
                            </div>
                            
                            {error && <div className="text-red-600 mt-2 text-sm">{error}</div>}
                            
                            <div className="form-control mt-6">
                                <button className="btn btn-color">Login</button>
                            </div>

                            <label className="label">
                                <p className="text-sm">New User? <Link className="color font-semibold" to="/registration">Register</Link> here.</p>
                            </label>
                        </form>
                    </div>

                    <div className="mt-6 text-center">
                        <p className="text-color">Or Login With</p>
                        <div className="flex flex-col gap-2 mt-4 items-center">
                            <button onClick={handleGoogleLogin} className="btn btn-color w-full max-w-xs gap-2">
                                <FaGoogle /> Google
                            </button>
                            <button onClick={handleGithubLogin} className="btn btn-color w-full max-w-xs gap-2">
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