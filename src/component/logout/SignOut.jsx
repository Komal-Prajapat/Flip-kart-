import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignOut = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
     localStorage.removeItem("accessToken");
  
    toast.success("You have been signed out.");

 
    navigate("/login");
  };

  return (
    <div>
      <h2>Sign Out</h2>
      <p>Are you sure you want to sign out?</p>
      <button onClick={handleSignOut}>Sign Out</button>
      <p>
        <Link to="/">Cancel</Link>
      </p>
    </div>
  );
};

export default SignOut;
