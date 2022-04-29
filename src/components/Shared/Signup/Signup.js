import React from 'react';
import userIcon from "../../../images/LoginRes/user.png";
import { Link } from "react-router-dom";
import loginBanner from "../../../images/LoginRes/loginBanner.jpg";
import googleLogo from '../../../images/LoginRes/google-logo.png';
import githubLogo from '../../../images/LoginRes/github-logo.png';
import facebookLogo from '../../../images/LoginRes/facebook-logo.png';
import './Signup.css';

const Signup = () => {
  const handleSignUp = (event)=>{
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;
  }
  return (
    <div className="container my-5">
      <div className="row d-flex justify-content-between">
        <div className="col-12 col-md-6 nonImg">
          <img width={"105%"} src={loginBanner} alt="" />
        </div>
        <div className="col-12 col-md-6">
          <form onSubmit={handleSignUp}>
            <div className="p-5 loginForm">
              <div>
                <img src={userIcon} alt="" />
              </div>
              <h1 className="mt-2">Register Now</h1>
              <div className="mt-3">
                <input
                  className="mt-2 form-control"
                  type="text"
                  name="email"
                  placeholder="user name/email.."
                />
                <input
                  className="mt-3 form-control"
                  type="password"
                  name="password"
                  placeholder="password.."
                />
                <input
                  className="mt-3 form-control"
                  type="password"
                  name="password"
                  placeholder="confirmPassword.."
                />
                <div className="deco">
                  <p className="mt-1 fw-bold">
                    Already have and account?
                    <span className="text-warning ms-3">
                      {" "}
                      <Link to="/login">Login</Link>{" "}
                    </span>
                  </p>
                </div>
              </div>
              <button className="login_btn btn btn-primary">Login</button>
              <hr/>
              <div className="d-flex logo-Img">
                <img src={googleLogo} alt="" />
                <img src={githubLogo} alt="" />
                <img src={facebookLogo} alt="" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;