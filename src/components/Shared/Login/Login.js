import React, { useEffect, useState } from "react";
import loginBanner from "../../../images/LoginRes/loginBanner.jpg";
import "./Login.css";
import userIcon from "../../../images/LoginRes/user.png";
import { Link } from "react-router-dom";
import googleLogo from "../../../images/LoginRes/google-logo.png";
import githubLogo from "../../../images/LoginRes/github-logo.png";
import facebookLogo from "../../../images/LoginRes/facebook-logo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  useSignInWithGoogle,
  useSignInWithGithub,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const Login = () => {
  // signInWithGoogle
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  // signInWithGithub
  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);
  // Email And password
  const [signInWithEmailAndPassword, user, loading, passwordError] =
    useSignInWithEmailAndPassword(auth);
    // show password
  const [showPass,setShowPass] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(email, password);
    
  };

  useEffect(()=>{
    if(passwordError){
      toast.warn(passwordError.message)
    }
  },[passwordError]);

  useEffect(()=>{
    if(googleError){
      toast.warn(googleError.message)
    }
  },[googleError]);
  
  useEffect(()=>{
    if(githubError){
      toast.warn(githubError.message)
    }
  },[githubError]);

  return (
    <div className="container my-5">
      <div className="row d-flex justify-content-between">
        <div className="col-12 col-md-6 nonImg">
          <img width={"105%"} src={loginBanner} alt="" />
        </div>
        <div className="col-12 col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="p-5 loginForm">
              <div>
                <img src={userIcon} alt="" />
              </div>
              <h1 className="mt-2">Welcome back</h1>
              <div className="mt-3">
                <input
                  className="mt-2 form-control"
                  type="text"
                  name="email"
                  placeholder="user name/email.."
                />
                <div className='position-relative'>
                <input
                  className="mt-3 form-control"
                  type={showPass ? "text":"password"}
                  name="password"
                  placeholder="password.."
                />
                <p className='me-2 mt-2 position-absolute top-0 end-0 user-select-none' onClick={()=>setShowPass(!showPass)}>👁️</p>
                </div>
                <div className="deco">
                  <p className="mt-1 fw-bold">
                    New In PureSmile?
                    <span className="text-warning ms-3">
                      {" "}
                      <Link className="link-clr" to="/signup">
                        Create an account
                      </Link>{" "}
                    </span>
                  </p>
                </div>
              </div>
              <button className="login_btn btn btn-primary">Login</button>
              <ToastContainer />
              <hr />
              <div className="d-flex logo-Img">
                <img
                  onClick={() => signInWithGoogle()}
                  src={googleLogo}
                  alt=""
                />
                <img
                  onClick={() => signInWithGithub()}
                  src={githubLogo}
                  alt=""
                />
                <img src={facebookLogo} alt="" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
