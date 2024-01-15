import React, { useState } from "react";
import { Link, useNavigate,useLocation } from "react-router-dom";
import "./auth_Styles.css"
import newRequest from "../../utils/newRequest";
import logoclong from "../../assets/logo_2_color.png";
import Cookies from "js-cookie";

const Login = () => {
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      // console.log(email, password)
      const res = await newRequest.post("/auth/login", { email, password });
      const currentUser = res.data;

      const accessToken = Cookies.get("accessToken");
      console.log("Access Token:", accessToken);

      sessionStorage.setItem("user", JSON.stringify(currentUser));
      const redirectUrl = new URLSearchParams(location.search).get(
        "redirect"
      );
      // console.log("Redirect URL:", redirectUrl);

      if (currentUser.isAdmin) {
        // Redirect to admin profile
        navigate("/admin");
        // navigate(redirectUrl || "/");
      } else {
        // Redirect to the previous page or default page
        
        navigate(redirectUrl || "/");
      }
      
      // window.location.reload(); // Reload the page
    } catch (err) {
      setLoading(false)
      setError(err.response.data);
    }
  };


  return (
    
      <div className="login-wrapper">
        <div className="content-wrapper">
          <div className="login-main-content">
            <div className="logo">
              <a href="/"><img src={logoclong} alt="" width="15%" /></a>
            </div>
            <div className="login-card">
              <h6 className="title">Welcome Back!</h6>
              <form onSubmit={handleSubmit} className="form-group">
                <div className="mb-4">
                  <input 
                  type="text" 
                  className={error ? "form-control2": "form-control"}
                  name="email" 
                  placeholder="Email" 
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="current-username"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="password"
                    name="password"
                    className={error ? "form-control2": "form-control"}
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                  />
                </div>
                <div className="forgot-password">
                <Link
                  to="/forgot-password"
                  className="text-end small mb-3 text-col"
                >
                  Forgot Password?
                </Link>
                </div>
                <>{error && <div className="err-danger">{error}</div>}</>
                <div className="login-btn-container">
                  <button type="submit" className="button-login">
                    {loading ? "Connecting..":"Continue"}
                  </button>
                  <p>
                    Don’t you have an account?&nbsp;<Link to="/signup"> Sign Up</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Login;
