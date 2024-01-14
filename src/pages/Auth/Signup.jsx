import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./auth_Styles.css"
import logoclong from "../../assets/logo_2_color.png";
import newRequest from "../../utils/newRequest";
import { HiUser } from "react-icons/hi2";


const Signup = () => {
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [loading, setLoading] = useState(false)

  const BRIGHT_COLORS_KEY = "brightColors";

  // const shuffleArray = (array) => {
  //   const shuffledArray = array.slice();
  //   for (let i = shuffledArray.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  //   }
  //   return shuffledArray;
  // };

  const getRandomHue = () => Math.floor(Math.random() * 360);

  const generateComplementaryColor = (hue) => (hue + 180) % 360;

  const generateSupplementaryColor = (hue) => (hue + 30) % 360;

  const generateColors = () => {
    const baseHue = getRandomHue();
    const complementaryHue = generateComplementaryColor(baseHue);
    const supplementaryHue = generateSupplementaryColor(baseHue);

    return [
      `hsl(${baseHue}, 100%, 50%)`,
      `hsl(${complementaryHue}, 100%, 50%)`,
      `hsl(${supplementaryHue}, 100%, 50%)`
    ];
  };

  // const brightColors = ["#FF5733", "#FFC300", "#36DBCA"];

  const [selectedColor, setSelectedColor] = useState("");

  const [user, setUser] = useState({
    username: "",
    fullname: "",
    email: "",
    password: "",
    iconColor: "",
    socials: {
      platform: "",
      username: "",
    },
    role:"",
    address: "",
    country: "",
    phone: "",
    brand: "",
    assetsId:[],
    isSeller: false,
    isAdmin: false,
    isSubscribed: false,
  });


  const handleChange = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  // const handleColorChange = (color) => {
  //   setSelectedColor(color);
  //   setUser((prev) => {
  //     return { ...prev, iconColor: color };
  //   });
  // };

  const handleRefreshColors = () => {
    const newColors = generateColors();

    setSelectedColor(newColors[0]);
    setUser((prev) => {
      return { ...prev, iconColor: newColors[0] };
    });
  };


  useEffect(() => {
    const storedColors = localStorage.getItem(BRIGHT_COLORS_KEY);

    if (storedColors) {
      const parsedColors = JSON.parse(storedColors);
      setSelectedColor(parsedColors[0]);
      setUser((prev) => {
        return { ...prev, iconColor: parsedColors[0] };
      });
    } else {
      const initialColors = generateColors();
      setSelectedColor(initialColors[0]);
      setUser((prev) => {
        return { ...prev, iconColor: initialColors[0] };
      });
      localStorage.setItem(BRIGHT_COLORS_KEY, JSON.stringify(initialColors));
    }
  }, []);


  // const unselectedColors = brightColors.filter((color) => color !== selectedColor);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      console.log("frt",user);
      await newRequest.post("/auth/register", {
        ...user
      });
      setIsSuccess(true);
      setMessage("User has been created.");
      // navigate("/login");
    } catch (err) {
      console.log(err);
      setLoading(false)
      setIsSuccess(false);
      setMessage(
        "Your Email is registered with another account. Login instead!"
      );
    }
  };


  const handleSocialsChange = (e) => {
    const selectedPlatform = e.target.value;
    setUser((prevUser) => ({
      ...prevUser,
      socials: {
        ...prevUser.socials,
        platform: selectedPlatform,
      },
    }));
  };

  const handleUsernameChange = (e) => {
    const username = e.target.value;
    setUser((prevUser) => ({
      ...prevUser,
      socials: {
        ...prevUser.socials,
        username: username,
      },
    }));
  };
  

  return (
    <div>
      <div className="login-wrapper">
        <div className="content-wrapper">
          <div className="login-main-content signup">
            <div className="logo">
            <a href="/"><img src={logoclong} alt="" width="15%" /></a>
            </div>
            <div className="login-card signup-card">
              <h6 className="title">Start your creative journey</h6>
              <div className="user-style">
                <div className="user-Avatar">
                  <div className="rounded-icon" style={{ backgroundColor: selectedColor }}>
                  <HiUser size={100} color="#fff"/>
                  </div>
                  <div className="color-control">
                  <h3>Profile color</h3>
                  <button onClick={handleRefreshColors} style={{ backgroundColor: selectedColor }}>Change Color</button>
                  </div>
                </div>
              </div>
              <form onSubmit={handleSubmit} className="form-group">
              
              <div className="col-group">
                <div className="mb-4">
                  <label>Username:</label>
                  <input 
                    type="text" 
                    className="form-control"
                    required
                    name="username" 
                    placeholder="username" 
                    onChange={handleChange} />
                </div>
                <div className="mb-4">
                  <label>Fullname:</label>
                  <input
                    type="text" 
                    className="form-control"
                    required
                    name="fullname" 
                    placeholder="fullname" 
                    onChange={handleChange} />
                </div>
                </div>
                <div className="col-group">
                <div className="mb-4">
                  <label>Phone:</label>
                  <input
                    type="tel"
                    className="form-control"
                    required
                    name="phone"
                    placeholder="Mobile Number"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                <label htmlFor="">Country:</label>
                  <input
                    name="country"
                    type="text"
                    required
                    className="form-control"
                    placeholder="e.g Ghana"
                    onChange={handleChange}
                  />
                </div>
                </div>
                <div className="col-group">
                <div className="mb-4">
                <label htmlFor="">Address:</label>
                  <input
                    name="address"
                    className="form-control"
                    required
                    type="text"
                    placeholder="e.g No.3 Hillview, Accra"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                <label htmlFor="">Role:</label>
                  <input
                    name="role"
                    type="text"
                    required
                    className="form-control"
                    placeholder="e.g position"
                    onChange={handleChange}
                  />
                </div>
                </div>
                <div className="col-group">
                <div className="mb-4">
                <label htmlFor="">Your Brand Name:</label>
                  <input
                    name="brand"
                    type="text"
                    required
                    className="form-control"
                    placeholder="e.g business name"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="socials">Active Socials Handle:</label>
                  <div>
                    <select
                      name="socials"
                      id="socials"
                      required
                      className="form-control"
                      onChange={handleSocialsChange}
                      value={user.socials.platform}
                    >
                      <option value="">Favourite platform</option>
                      <option value="Facebook">Facebook</option>
                      <option value="Youtube">Youtube</option>
                      <option value="Instagram">Instagram</option>
                      <option value="Twitter">Twitter(Now X)</option>
                      <option value="Tiktok">Tiktok</option>
                      <option value="Threads">Threads</option>
                      <option value="Snapchat">Snapchat</option>
                      <option value="Vimeo">Vimeo</option>
                    </select>
                    <input
                      type="text"
                      className="form-control"
                      placeholder={`Your ${user.socials.platform} Username`}
                      onChange={handleUsernameChange}
                      value={user.socials.username}
                    />
                  </div>
                </div>
                </div>
                <div className="col-group">
                <div className="mb-4">
                  <label>Email:</label>
                  <input 
                    type="text" 
                    name="email" 
                    className={message ? "form-control2": "form-control"}
                    placeholder="Email" 
                    autoComplete="off"
                    onChange={handleChange} />
                </div>
                <div className="mb-4">
                  <label>Password:</label>
                  <input
                    type="password"
                    className={message ? "form-control2": "form-control"}
                    name="password"
                    placeholder="Password"
                    autoComplete="off"
                    onChange={handleChange}
                  />
                </div>
                </div>
                <div className="error-display">
                  {message && (
                    <div className={`message ${isSuccess ? "success" : "error"}`}>
                      {message}
                    </div>
                  )}
                </div>
                <div className="login-btn-container mb-3">
                  <button type="submit" className="button-login">
                    Signup
                  </button>
                  <p>
                    Already have an account?&nbsp;<Link to="/login">Log in</Link>
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
