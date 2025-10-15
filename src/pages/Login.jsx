import { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { routes } from "../lib/router";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [showPassword, setShowPassWord] = useState(false);
  const { loginUser } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const toggleShowPassword = () =>
    setShowPassWord((showPassword) => !showPassword);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    loginUser(email, password)
      .then(() => {
        e.target.reset();
        navigate(location.state || routes.home.path);
      })
      .catch((e) => console.error(e));
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <div className="flex relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    className="input"
                    placeholder="Password"
                    required
                    minLength={6}
                  />
                  <button
                    className="btn btn-ghost z-10 absolute right-0 top-0 mr-4"
                    type="button"
                    onClick={toggleShowPassword}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4" type="submit">
                  Login
                </button>
              </fieldset>
            </form>
            <p>
              New to here? Please{" "}
              <Link
                to={routes.register.path}
                className="link link-primary font-semibold"
              >
                {routes.register.name}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
