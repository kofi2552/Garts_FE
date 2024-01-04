import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./auth_Styles.css"
import newRequest from "../../utils/newRequest";
import logoclong from "../../assets/logo_2_color.png";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(email, password)
      const res = await newRequest.post("/auth/login", { email, password });
      const currentUser = res.data;
     
      sessionStorage.setItem("user", JSON.stringify(currentUser));

      if (currentUser.isAdmin) {
        // Redirect to admin profile
        navigate("/admin");
      } else {
        // Redirect to the previous page or default page
        const redirectUrl = new URLSearchParams(location.search).get(
          "redirect"
        );
        navigate(redirectUrl || "/");
      }

      // window.location.reload(); // Reload the page
    } catch (err) {
      setError(err.response.data);
    }
  };


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
              <form onSubmit={handleSubmit} className="form-group">
                <div className="mb-4">
                  <input 
                  type="text" 
                  name="email" 
                  placeholder="Email" 
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="current-username"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                  />
                </div>
                <>{error && <div className="err-danger">{error}</div>}</>
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
