import React from "react";
import { Form } from "react-bootstrap";
import loginBanner from "../../../images/LoginRes/loginBanner.jpg";
import "./Login.css";

const Login = () => {
  return (
    <div className="container my-5">
      <div className="row d-flex justify-content-between">
        <div className="col-12 col-md-6 nonImg">
          <img width={"105%"} src={loginBanner} alt="" />
        </div>
        <div className="col-12 col-md-6">
          <div className="w-75 ms-5">
            <form className='text-center' action="">
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>User Name/Email</Form.Label>
              <input className='form-control rounded-3' type="email" name="email" placeholder="email.."/>
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Password</Form.Label>
              <input className='form-control rounded-3' type="password" name="password" placeholder="password.."/>
            </Form.Group>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
