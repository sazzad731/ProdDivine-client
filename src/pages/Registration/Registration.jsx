import React, { use } from 'react';
import GoogleAuthButton from '../../components/AuthButtons/GoogleAuthButton';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
import { updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2';

const Registration = () => {
  const { createUserEmailPassword, auth } = use(AuthContext);
  const navigate = useNavigate();

  const handleCreateUser = (event)=>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.imageUrl.value;
    createUserEmailPassword(email, password)
      .then(() => {
        updateProfile(auth.currentUser, { displayName: name, photoURL: image })
          .then(() => {
            Swal.fire({
              title: "Account created successful",
              icon: "success",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/");
            form.reset();
          })
          .catch((err) => {
            Swal.fire({
              title: err.message,
              icon: "error",
            });
          });
      })
      .catch((err) =>
        Swal.fire({
          title: err.message,
          icon: "error",
        })
      );
  }
  return (
    <div className="min-h-[100dvh] flex items-center justify-center pt-20">
      <div className="linear-border-l p-[1px] rounded-2xl">
        <form onSubmit={handleCreateUser} className="bg-first flex flex-col items-center sm:w-2xl py-14 px-5 rounded-2xl">
          <h2 className="text-3xl mb-5">Join ProdDivine</h2>
          <p className="sm:text-xl font-light mb-8 text-center">
            Discover smarter choices. Share better alternatives.
          </p>
          <GoogleAuthButton />
          <p className="mt-8 mb-4 text-white/50">Or</p>
          <div className="sm:w-lg w-full">
            <fieldset className="fieldset mb-3">
              <legend className="fieldset-legend text-lg font-normal text-white">
                Your Name?
              </legend>
              <input
                type="text"
                className="input focus:outline-third border-[1px] border-third w-full bg-second"
                placeholder="Type here"
                name="name"
                required
              />
            </fieldset>
            <fieldset className="fieldset mb-3">
              <legend className="fieldset-legend text-lg font-normal text-white">
                Your Email?
              </legend>
              <input
                type="email"
                className="input focus:outline-third border-[1px] border-third w-full bg-second"
                placeholder="Type here"
                name="email"
                required
              />
            </fieldset>
            <fieldset className="fieldset mb-3">
              <legend className="fieldset-legend text-lg font-normal text-white">
                Your Password?
              </legend>
              <input
                type="password"
                className="input focus:outline-third border-[1px] border-third w-full bg-second"
                placeholder="Type here"
                name="password"
                required
              />
            </fieldset>
            <fieldset className="fieldset mb-3">
              <legend className="fieldset-legend text-lg font-normal text-white">
                Photo URL?
              </legend>
              <input
                type="url"
                className="input focus:outline-third border-[1px] border-third w-full bg-second"
                placeholder="Type here"
                name="imageUrl"
                required
              />
            </fieldset>
            <div className="btn-border mt-10">
              <button type='submit' className="primary-btn">Continue</button>
            </div>
            <p className="mt-5 text-white/50">
              Already have an account?{" "}
              <Link to="/login" className="text-white underline">
                Log in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;