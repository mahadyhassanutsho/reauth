import { useState } from "react";
import { Link } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { routes } from "../lib/router";
import { useAuth } from "../context/AuthContext";

export default function Register() {
  const [showPassword, setShowPassWord] = useState(false);
  const { createUser } = useAuth();

  const toggleShowPassword = () =>
    setShowPassWord((showPassword) => !showPassword);

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUser(email, password)
      .then((result) => console.log(result.user))
      .catch((e) => console.error(e));
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleRegister}>
              <fieldset className="fieldset">
                <label className="label">Name</label>
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
                  Register
                </button>
              </fieldset>
            </form>
            <p>
              Already have an account? Please{" "}
              <Link
                to={routes.login.path}
                className="link link-primary font-semibold"
              >
                {routes.login.name}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
