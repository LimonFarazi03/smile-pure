import React from "react";
import loginBanner from "../../../images/LoginRes/loginBanner.jpg";
import "./Login.css";
import userIcon from "../../../images/LoginRes/user.png";
import { Link } from "react-router-dom";
import googleLogo from '../../../images/LoginRes/google-logo.png';
import githubLogo from '../../../images/LoginRes/github-logo.png';
import facebookLogo from '../../../images/LoginRes/facebook-logo.png';

const Login = () => {
  return (
    <div className="container my-5">
      <div className="row d-flex justify-content-between">
        <div className="col-12 col-md-6 nonImg">
          <img width={"105%"} src={loginBanner} alt="" />
        </div>
        <div className="col-12 col-md-6">
          <form>
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
                <input
                  className="mt-3 form-control"
                  type="password"
                  name="password"
                  placeholder="password.."
                />
                <div className="deco">
                  <p className="mt-1 fw-bold">
                    New In PureSmile?
                    <span className="text-warning ms-3">
                      {" "}
                      <Link to="/signup">Create an account</Link>{" "}
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

export default Login;
