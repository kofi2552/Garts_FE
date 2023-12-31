import React from "react";
import { Link } from "react-router-dom";
import CustomInput from "../components/CustomInput";

import logoclong from "../assets/logo_2_color.png";
const Signup = () => {
  return (
    <div>
      <div className="login-wrapper">
        <div className="art-wrapper">
          <img src="images/freepik-2-2000.webp" alt="getart" />
        </div>
        <div className="content-wrapper">
          <div className="main-content">
            <div className="logo">
              <img src={logoclong} alt="" width="15%" />
            </div>
            <div className="login-card mb-5">
              <h6 className="title">Create an account</h6>
              <form action="" className="form-group">
                <div className="mb-4">
                  <CustomInput type="text" name="name" placeholder="username" />
                </div>
                <div className="mb-4">
                  <CustomInput type="text" name="email" placeholder="Email" />
                </div>
                <div className="mb-4">
                  <CustomInput
                    type="tel"
                    name="mobile"
                    placeholder="Mobile Number"
                  />
                </div>
                <div className="mb-4">
                  <CustomInput
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                </div>

                <div className="login-btn-container mb-3">
                  <button type="submit" className="button-login">
                    Signup
                  </button>
                  <p>
                    Already have an account?
                    <Link to="/login">Log in</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
