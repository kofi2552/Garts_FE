import { Link } from "react-router-dom";
import CustomInput from "../components/CustomInput";

import logoclong from "../assets/logo_2_color.png";

const Login = () => {
  return (
    <div>
      <div className="login-wrapper">
        <div className="art-wrapper">
          <img src="images/freepik-2-2000.webp" alt="getarts" />
        </div>
        <div className="content-wrapper">
          <div className="main-content">
            <div className="logo">
              <img src={logoclong} alt="" width="15%" />
            </div>
            <div className="login-card">
              <h6 className="title">Welcome Back!</h6>
              <form action="" className="form-group">
                <div className="mb-4">
                  <CustomInput type="text" name="email" placeholder="Email" />
                </div>
                <div className="mb-2">
                  <CustomInput
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                </div>
                <Link
                  to="/forgot-password"
                  className="text-end small mb-3 text-col"
                >
                  Forgot Password?
                </Link>
                <div className="login-btn-container mb-3">
                  <button type="submit" className="button-login">
                    Login
                  </button>
                  <p>
                    Don’t you have an account?
                    <Link to="/signup">Sign Up</Link>
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

export default Login;
