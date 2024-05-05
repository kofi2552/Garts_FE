import React from "react";
import { Link } from "react-router-dom";
import CustomInput from "../components/CustomInput";
import Nav2Home from "../components/navbar/Nav2Home";

const Contact = () => {
  return (
    <div>
      <Nav2Home />
      <section className="container">
        <div className="create-sell-account py-5 px-3">
          <div>
            <h3 className="heading">Get in touch with us</h3>
            <p className="faded-text py-2">
              Fill out the following form to message us.
            </p>
            <form action="" className="form-group">
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
                <textarea className="w-100" type="text" placeholder="Message" />
              </div>
              <div className="login-btn-container mb-3">
                <button type="submit" className="button-login">
                  Submit
                </button>
                <p className="faded-text">
                  Don't have an account?
                  <Link to="/signup" className="text-center">
                    Sign up
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
