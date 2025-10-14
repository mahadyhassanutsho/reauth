import { Link, NavLink } from "react-router";
import { routes } from "../../lib/router";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm justify-between">
      {/* Logo */}
      <div className="">
        <a className="btn btn-ghost text-xl">ReAuth</a>
      </div>

      {/* NavLinks */}
      <ul className="menu menu-horizontal px-1 space-x-1">
        {Object.values(routes).map((route, i) => (
          <li key={i}>
            <NavLink
              to={route.path}
              className={({ isActive }) =>
                `${isActive ? "font-semibold bg-neutral-content" : ""}`
              }
            >
              {route.name}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* User */}
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
        </div>
        <ul
          tabIndex="-1"
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
        >
          <li>
            <Link className="justify-between">
              Profile
              <span className="badge">New</span>
            </Link>
          </li>
          <li>
            <Link>Settings</Link>
          </li>
          <li>
            <Link>Logout</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
