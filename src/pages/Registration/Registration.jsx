import React from 'react';
import GoogleAuthButton from '../../components/AuthButtons/GoogleAuthButton';

const Registration = () => {
  return (
    <div className="min-h-[100dvh] flex items-center justify-center pt-20">
      <div className="linear-border-l p-[1px] rounded-2xl">
        <form className="bg-first flex flex-col items-center sm:w-2xl py-20 px-5 rounded-2xl">
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
                name='name'
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
                name='email'
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
                name='password'
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
                name='imageUrl'
              />
            </fieldset>
            <div className="btn-border">
              <button className="primary-btn">Continue</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;