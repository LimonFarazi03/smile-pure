import React from "react";
import loginBanner from '../../../images/LoginRes/loginBanner.jpg';
import './Login.css'

const Login = () => {
  return (
    <div className="container d-flex d-flex justify-content-around align-items-center">
      <div className="row">
        <div className="col-12 col-md-6 logInImg">
          <img width={'100%'} src={loginBanner} alt="" />
        </div>
        <div className="col-12 col-md-6">
          <h1>Hi my name is limon farazi</h1>
        </div>
      </div>
    </div>
  );
};

export default Login;
