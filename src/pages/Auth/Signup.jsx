import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./auth_Styles.css"
import logoclong from "../../assets/logo_2_color.png";
import newRequest from "../../utils/newRequest";
import { HiOutlineUserCircle } from "react-icons/hi";


const Signup = () => {
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  // const [usernameOnPlatform, setUsernameOnPlatform] = useState("");
  const [usernames, setUsernames] = useState({});

  const BRIGHT_COLORS_KEY = "brightColors";

  const shuffleArray = (array) => {
    const shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

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

  const brightColors = ["#FF5733", "#FFC300", "#36DBCA"];

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

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
    setUser((prev) => {
      return { ...prev, iconColor: color };
    });
  };

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


  const unselectedColors = brightColors.filter((color) => color !== selectedColor);


  const handleSubmit = async (e) => {
    e.preventDefault();
 
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
      setIsSuccess(false);
      setMessage(
        "Your Email is registered with another account. Sign in instead!"
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
              <form onSubmit={handleSubmit} className="form-group">
              <div className="mb-4">
                <div className="user-Avatar">
                <div className="rounded-icon" style={{ backgroundColor: selectedColor }}>
                <HiOutlineUserCircle size={40} color="#fff"/>
              </div>
                </div>
              <label>Select Icon Background Color:</label>
              <div className="color-picker">
                <div
                  className={`color-option selected`}
                  style={{ backgroundColor: selectedColor }}
                  onClick={() => handleColorChange(selectedColor)}
                ></div>
                {unselectedColors.map((color, index) => (
                  <div
                    key={index}
                    className={`color-option`}
                    style={{ backgroundColor: color }}
                    onClick={() => handleColorChange(color)}
                  ></div>
                ))}
              </div>
              <button onClick={handleRefreshColors}>Refresh Colors</button>
              </div>
                <div className="mb-4">
                  <label>Username:</label>
                  <input 
                    type="text" 
                    name="username" 
                    placeholder="username" 
                    onChange={handleChange} />
                </div>
                <div className="mb-4">
                  <label>Fullname:</label>
                  <input
                    type="text" 
                    name="fullname" 
                    placeholder="fullname" 
                    onChange={handleChange} />
                </div>
                
                <div className="mb-4">
                  <label>Phone:</label>
                  <input
                    type="tel"
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
                    placeholder="e.g Ghana"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                <label htmlFor="">Address:</label>
                  <input
                    name="address"
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
                    placeholder="e.g position"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                <label htmlFor="">Your Brand Name:</label>
                  <input
                    name="brand"
                    type="text"
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
                      onChange={handleSocialsChange}
                      value={user.socials.platform}
                    >
                      <option value="">Favourite platform</option>
                      <option value="Facebook">Facebook</option>
                      <option value="Youtube">Youtube</option>
                      <option value="Instagram">Instagram</option>
                      <option value="Twitter(Now X)">Twitter(Now X)</option>
                      <option value="Tiktok">Tiktok</option>
                      <option value="Threads">Threads</option>
                      <option value="Snapchat">Snapchat</option>
                      <option value="Vimeo">Vimeo</option>
                    </select>
                    <input
                      type="text"
                      placeholder={`Your ${user.socials.platform} Username`}
                      onChange={handleUsernameChange}
                      value={user.socials.username}
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label>Email:</label>
                  <input 
                    type="text" 
                    name="email" 
                    placeholder="Email" 
                    autoComplete="off"
                    onChange={handleChange} />
                </div>
                <div className="mb-4">
                  <label>Password:</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    autoComplete="off"
                    onChange={handleChange}
                  />
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
