import React, { use } from 'react';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../../context/AuthContext';

const GoogleAuthButton = () => {
  const { createOrLoginGoogle } = use(AuthContext);
  const handleGoogleSignIn = () =>{
    createOrLoginGoogle()
      .then(() =>{}).catch(err => console.log(err))
  }
  return (
    <div className="btn-border">
      <button onClick={handleGoogleSignIn} className="primary-btn gap-3">
        <FcGoogle size={25} /> Continue with Google
      </button>
    </div>
  );
};

export default GoogleAuthButton;