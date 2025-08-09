import { Link, useLocation, useNavigate } from "react-router";
import GoogleAuthButton from "../../components/AuthButtons/GoogleAuthButton";
import { use } from "react";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";

const Login = () => {
  const { logInUser } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogIn = (event)=>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    logInUser(email, password)
      .then(() =>{
        Swal.fire({
          title: "Log in successful",
          icon: "success"
        })
        navigate(location.state || "/")
      }).catch(err => {
        Swal.fire({
          title: `${err.message}`,
          icon: "error"
        })
      });
  }
  return (
    <div className="min-h-[100dvh] flex items-center justify-center pt-20">
        <form onSubmit={handleLogIn} className="bg-secondary/50 flex flex-col items-center sm:w-2xl py-14 px-5 rounded-2xl">
          <h2 className="text-3xl mb-5 text-center">Welcome Back to ProdDivine</h2>
          <p className="sm:text-xl font-light mb-8 text-center">
            Access your recommendations. Empower better buying.
          </p>
          <GoogleAuthButton />
          <p className="mt-8 mb-4">Or</p>
          <div className="sm:w-lg w-full">
            <fieldset className="fieldset mb-3">
              <legend className="fieldset-legend text-lg font-normal ">
                Your Email
              </legend>
              <input
                type="email"
                className="input focus:outline-primary border border-primary w-full bg-base-100"
                placeholder="Type here"
                name="email"
                required
              />
            </fieldset>
            <fieldset className="fieldset mb-3">
              <legend className="fieldset-legend text-lg font-normal ">
                Your Password
              </legend>
              <input
                type="password"
                className="input focus:outline-primary border border-primary w-full bg-base-100"
                placeholder="Type here"
                name="password"
                required
              />
              <p className="cursor-pointer">Forgot password?</p>
            </fieldset>
            <button type="submit" className="btn btn-primary w-full rounded-3xl text-base mt-10">Continue</button>
            <p className="mt-5">
              Don't have an account?{" "}
              <Link to="/registration" className="font-bold underline">
                Create one
              </Link>
            </p>
          </div>
        </form>
    </div>
  );
};

export default Login;