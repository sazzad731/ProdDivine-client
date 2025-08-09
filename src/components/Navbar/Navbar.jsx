import { Link, NavLink } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import ThemeBtn from "../ThemeBtn/ThemeBtn";
const Navbar = () => {
  const { user, logOutUser } = useAuth();

  const handleLogOut = ()=>{
    logOutUser()
      .then(() =>
      {
        Swal.fire({
          title: "Log out successful",
          icon: "success"
        })
      }).catch(err => {
        Swal.fire({
          title: `${err.message}`,
          icon: "error"
        })
      });
  }

  const navMenu = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${
              isActive && "border-neutral border-b-2 text-neutral"
            } pb-1 text-lg hover:border-b-2 text-neutral`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/queries"
          className={({ isActive }) =>
            `${
              isActive && "border-b-2 text-neutral"
            } pb-1 text-lg hover:border-b-2 text-neutral`
          }
        >
          Queries
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              to="/recommend-for-me"
              className={({ isActive }) =>
                `${
                  isActive && "border-b-2 text-neutral"
                } pb-1 text-lg hover:border-b-2 text-neutral`
              }
            >
              Recommendations For Me
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-queries"
              className={({ isActive }) =>
                `${
                  isActive && "border-b-2 text-neutral"
                } pb-1 text-lg hover:border-b-2 text-neutral`
              }
            >
              My Queries
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-recommendations"
              className={({ isActive }) =>
                `${
                  isActive && "border-b-2 text-neutral"
                } pb-1 text-lg hover:border-b-2 text-neutral`
              }
            >
              My Recommendations
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  const authButtons = (
    <>
      {!user && (
        <Link
          to="/login"
          className="btn btn-outline btn-primary w-full sm:w-24 text-base"
        >
          Log in
        </Link>
      )}
      {user && (
        <button
          onClick={handleLogOut}
          className="btn btn-outline btn-primary w-full sm:w-24 text-base"
        >
          Log out
        </button>
      )}
    </>
  );
  return (
    <div className="navbar w-full 2xl:w-[93.75rem] mx-auto">
      <div className="navbar-start w-full">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost xl:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-neutral"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu gap-2 dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow bg-white text-neutral"
          >
            {navMenu}
            <div className="sm:hidden block">{authButtons}</div>
          </ul>
        </div>
        <NavLink to="/" className="text-2xl font-bold text-neutral">
          ProdDivine
        </NavLink>
      </div>
      <div className="navbar-center hidden xl:flex">
        <ul className="menu-horizontal gap-7 text-white">{navMenu}</ul>
      </div>
      <div className="navbar-end w-full gap-4">
        <ThemeBtn />
        <div className="hidden sm:inline-flex">{authButtons}</div>
      </div>
    </div>
  );
};

export default Navbar;