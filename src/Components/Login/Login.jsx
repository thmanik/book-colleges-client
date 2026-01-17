import { useContext, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import { AuthContext } from "../Providers/AuthProvider/AuthProvider";
import { Helmet } from "react-helmet";

const Login = () => {
  const { googleLogin, githubLogin, signIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    setError("");

    signIn(email, password)
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const handleGoogleLogin = () => {
    setError("");

    googleLogin()
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const handleGithubLogin = () => {
    setError("");

    githubLogin()
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((err) => {
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
        <div className="my-9">
          <div className="text-center">
            <h1 className="text-2xl mt-1 font-bold">Login Now!</h1>
          </div>

          <div className="card w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="text-black input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="text-black input input-bordered"
                  required
                />
              </div>

              {error && <p className="text-red-600">{error}</p>}

              <div className="form-control mt-6">
                <button className="btn btn-color">Login</button>
              </div>

              <label className="label">
                <p>
                  New User?
                  <Link className="new-user-btn color ml-1" to="/registration">
                    Registration
                  </Link>
                  here.
                </p>
              </label>
            </form>
          </div>

          <div className="mt-3 text-center googleLogin">
            <p className="text-color">Or</p>
            <h5 className="text-color">Login With</h5>

            <div className="py-5">
              <button
                onClick={handleGoogleLogin}
                className="btn-color btn mb-2 inline-flex items-center gap-2"
              >
                <FaGoogle /> Login with Google
              </button>

              <br />

              <button
                onClick={handleGithubLogin}
                className="btn btn-color mb-2 inline-flex items-center gap-2"
              >
                <FaGithub /> Login with Github
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
