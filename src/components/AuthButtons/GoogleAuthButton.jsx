import React from 'react';
import { FcGoogle } from "react-icons/fc";

const GoogleAuthButton = () => {
  return (
    <div className="btn-border">
      <button className="primary-btn gap-3">
        <FcGoogle size={25} /> Continue with Google
      </button>
    </div>
  );
};

export default GoogleAuthButton;