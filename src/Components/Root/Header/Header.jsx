import { NavLink } from "react-router-dom";
import "./Header.css";


const Header = () => {
  const navLink = (
    <>
      <ul className=" flex flex-col gap-3 md:flex-row text-lg font-semibold">
        <NavLink to="/">
          {({ isActive }) => (
            <span className={isActive ? "active" : ""}>Statistics</span>
          )}
        </NavLink>
        <NavLink to="/applied">
          {({ isActive }) => (
            <span className={isActive ? "active" : ""}>Applied Jobs</span>
          )}
        </NavLink>
        <NavLink to="/blog">
          {({ isActive }) => (
            <span className={isActive ? "active" : ""}>Blog</span>
          )}
        </NavLink>
      </ul>
    </>
  );

  return (
    <>
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLink}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case font-bold text-xl">CareerHub</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLink}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn text-white bg-violet-500 border-none">
          Star Applying
        </a>
      </div>
    </div>
    </>
  );
};

export default Header;
