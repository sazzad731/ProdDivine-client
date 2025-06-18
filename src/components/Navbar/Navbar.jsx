import { Link, NavLink } from "react-router";
import logo from "../../assets/img/logo.png"
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
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
              isActive && "border-b-2 text-white/100 font-medium"
            } pb-1 text-lg font-normal hover:border-b-2 text-white/80`
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
              isActive && "border-b-2 text-white/100 font-medium"
            } pb-1 text-lg font-normal hover:border-b-2 text-white/80`
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
                  isActive && "border-b-2 text-white/100 font-medium"
                } pb-1 text-lg font-normal hover:border-b-2 text-white/80`
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
                  isActive && "border-b-2 text-white/100 font-medium"
                } pb-1 text-lg font-normal hover:border-b-2 text-white/80`
              }
            >
              My Queries
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-recommend"
              className={({ isActive }) =>
                `${
                  isActive && "border-b-2 text-white/100 font-medium"
                } pb-1 text-lg font-normal hover:border-b-2 text-white/80`
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
      {/* btn-border custom class */}
      {!user && (
        <Link to="/login" className="btn-border">
          {/* primary-btn custom class */}
          <button className="primary-btn">Log in</button>
        </Link>
      )}
      {user && (
        <div className="warning-border">
          <button onClick={handleLogOut} className="warning-btn">
            Log out
          </button>
        </div>
      )}
    </>
  );
  return (
    <div className="navbar shadow-sm w-full 2xl:w-[93.75rem] mx-auto mt-2 bg-first rounded-xl px-5 fixed left-0 right-0 z-50">
      <div className="navbar-start w-full">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost xl:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
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
            className="menu gap-2 dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow bg-first text-white"
          >
            {navMenu}
            <div className="sm:hidden block">{authButtons}</div>
          </ul>
        </div>
        <NavLink to="/">
          <img className="w-36" src={logo} alt="Logo" />
        </NavLink>
      </div>
      <div className="navbar-center hidden xl:flex">
        <ul className="menu-horizontal gap-7 text-white">{navMenu}</ul>
      </div>
      <div className="navbar-end text-white w-full hidden sm:inline-flex">
        {authButtons}
      </div>
    </div>
  );
};

export default Navbar;