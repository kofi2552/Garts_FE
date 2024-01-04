import { useState, useEffect} from "react"
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import "./SingleProduct.css"
import ProductCard from "../Card/ProductCard";
import { RiVipCrownLine } from "react-icons/ri";
import {
  AiOutlineHeart,
  AiOutlineDownload,
} from "react-icons/ai";
import { BsFileEarmark } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { HiOutlineCheckBadge } from "react-icons/hi2";
import Categories from "../categories/Categories";
import { HiMiniUserCircle } from "react-icons/hi2";
import { Grid } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import { initializeTransaction } from "../../pay/PaymentAPI";

const SingleProduct = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [project, setProject] = useState();
  const [allproject, setAllProject] = useState();
  const [showPhoneNumber, setShowPhoneNumber] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [OrderIntentid, setOrderIntentid] = useState();
  const [isPaid, setPaid] = useState(false)
  const [token, setToken] = useState("");


  const {  data, err } = useQuery({
    queryKey: ["projects"], 
    queryFn: () => newRequest.get("/lessons").then((res) => {
      setAllProject(res.data);
      return res.data;
    }
    ),
  });


  const {
    isLoading,
    error,
    data: gigData,
  } = useQuery({
    queryKey: ["gig", id],
    queryFn: () =>
      newRequest.get(`lessons/single/${id}`).then((res) => {
        setProject(res.data);
        return res.data;
      }),
  });

  // console.log("project data:", project);
  const userId = gigData?.userId;
  
  // console.log("userID:", userId);


  const {
  } = useQuery({
    queryKey: ["user", userId],
    queryFn: () =>
      newRequest.get(`users/user/${userId}`).then((res) => {
        const userPhoneNumber = res.data.phone;
        setPhoneNumber(userPhoneNumber);
        return res.data;
      }),
    enabled: !!userId,
  });

  useEffect(() => {
    const generateRandomOrderId = () => {
      // Function to generate a random alphanumeric string (orderId)
      const length = 10;
      const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let result = "";
      for (let i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * characters.length)
        );
      }
      return result;
    };
    const NewOrderId = generateRandomOrderId();
    setOrderIntentid(NewOrderId);
  }, []);

  // console.log("FRNT orderId:", OrderIntentid);
    const handleBookAndPay = async () => {
    console.log("button clicked!");
    try {
      const currentUser = JSON.parse(localStorage.getItem("currentUser"));

      // Check if the user is logged in
      if (!currentUser) {
        // Redirect to the login page with the current location as a query parameter
        navigate("/login?redirect=" + location.pathname);
        return;
      }

      // Fetch the necessary data for payment
      // const { data } = await newRequest.get(`lessons/single/${id}`);

      const username = currentUser.username;
      const phone = currentUser.phone;
      const amount = Lesson.price;
      const email = currentUser.email;
       const clientId = currentUser._id;
      // const orderId = generateRandomOrderId();

      // Store the orderId in the local storage
      localStorage.setItem("payment_intent", OrderIntentid);
      
      // Fetch the authorization token
      const tokenResponse = await newRequest.get("get-token");

      if (tokenResponse.status === 200) {
        // Call the Paystack API to initialize the transaction using your function
        const authorization_url = await initializeTransaction(
          email,
          amount,
          phone,
          username,
          tokenResponse.data.token
        );

        console.log("Token Response:", tokenResponse);
        console.log("FT payUrl:", authorization_url);

        if (authorization_url) {
          const headers = {
            Authorization: `Bearer ${tokenResponse.data.token}`,
          };
          // Create a new order
          await newRequest.post(
            `orders/create-payment-intent/${id}`,
            {
              orderId: OrderIntentid,
              buyerId: clientId,
            },
            { headers }
          );

          window.location.href = authorization_url;
        }
      }
    } catch (error) {
      // Handle any errors during the payment process
      console.log("Payment error:", error);
      setErrorMessage("Payment processing unsuccessful!");
    }
  };



  const handleTogglePhoneNumber = () => {
    setShowPhoneNumber((prevValue) => !prevValue);
  };


 
  const isPaidValue = project?.isPaid;

  const determineIsPaid = () => {
    setPaid(isPaidValue);
  };

  useEffect(() => {;
    determineIsPaid();
  }, [project]);



  return (
    <>
      <section className="product-section-wrapper">
      {errorMessage && <div className="error">{errorMessage}</div>}
      {isLoading ? (
        <p>Loading</p>
      ) : error ? (
        <div className="network-error">Network error. Try again!</div>
      ) : (
        <div className="product-container-fluid">
          <div className="detail-container">
            <div className="p-left-content">
              <img
                src={gigData.image || "https://images.unsplash.com/photo-1598770220477-cec551a23f53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXJ0aXN0aWN8ZW58MHx8MHx8&w=1000&q=80"}
                alt=""
                loading="lazy"
              />
              <div className="title-text">
                <div className="project-title">
                <p className="asset-name">
                {gigData.title || "Title"}
                </p>
                </div>
                <p className="prod-icon2 m-0">
                  <AiOutlineHeart size={20} />
                  &nbsp;Like
                </p>
              </div>
            </div>
            <div className="mobile-like">
              <p className="prod-icon2 m-0">
                <AiOutlineHeart size={20} />
                &nbsp;Like
              </p>
            </div>

            <div className="p-right-content">
              <div className="asset-details">
                  {isPaid ? (
                <div className="top-details">
                  <p className="free-paid">
                    <RiVipCrownLine className="mr-1" size={22} />
                    &nbsp;<strong>Paid Asset</strong>
                  </p>
                  <div className="notice-content">
                    <p className="asset-notice">
                      Access this file by clicking<br></br>on the download
                      button.
                      <br></br>
                    </p>

                    <Link to="/search" className="premium">
                      Explore More
                    </Link>

                    <div className="cta-Links">
                      <Link>Single file Purchase</Link> or&nbsp;
                      <Link>Subscribtion</Link>
                    </div>
                  </div>
                </div>
                ):(
                  <div className="top-details">
                  <p className="free-paid">
                    <RiVipCrownLine className="mr-1" size={22} />
                    &nbsp;<strong>Free Asset</strong>
                  </p>
                  <div className="notice-content">
                    <p className="asset-notice">
                      Download more free<br></br>digital assets
                      
                      <br></br>
                    </p>

                    <Link to="/search" className="premium">
                      Explore More
                    </Link>

                    <div className="cta-Links">
                      <Link>Single file Purchase</Link> or&nbsp;
                      <Link>Subscribtion</Link>
                    </div>
                  </div>
                </div>
                )}
                <div className="btm-details">
                  <div className="middle-details">
                    <Link to="#" className="btn-download" onClick={handleBookAndPay} >
                      <AiOutlineDownload size={20} />
                      &nbsp;Download
                    </Link>
                    <Link className="btn-download2" onClick={handleTogglePhoneNumber}>
                      <FaRegUserCircle size={20} />
                      &nbsp;{showPhoneNumber ? phoneNumber : "Contact Creator"}
                    </Link>
                  </div>
                  <div className="bottom-details">
                    <div className="lincensed-ornot mb-2">
                      <HiOutlineCheckBadge className="license-color" size={21} />
                      <span><strong>Commercial License</strong></span>
                    </div>
                    <div className="type-of-asset mb-0">
                      <BsFileEarmark
                        className="license-color2"
                        size={17}
                      />
                      <span><strong>File format:</strong>&nbsp;{gigData.filetype || "N/A"}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="middle-content">
            <div className="project-desc">
            <p className="topic-des pt-3 mb-1">Description</p>
            <div className="asset-description">
              { gigData.desc || "The Company may, at any moment, and without incurring in"}
             <br></br>
              <h4>Related Projects Areas</h4>
              <ul className="list-ptx">
                <li className="pntxs">Photoshop</li>
                <li className="pntxs">UXUI Design</li>
                <li className="pntxs">Developer</li>
                <li className="pntxs">Video Editing</li>
              </ul>
            </div>
            </div>
            <div className="XCreator-box">
              <HiMiniUserCircle size={100} color="#d3dfe9" className="avatar" />
              <div className="XCreator-info">
                <h1>{gigData.username || "admin"}</h1>
              <p>@{gigData.brand || "garts"}</p>
              </div>
            </div>
          </div>
          <div className="related-tags">
            <Categories />
          </div>
          <div className="related-content">
            <h5 className="mb-3">You may also like</h5>
            <div className="card-list">
            <Grid container spacing={3}>
              {allproject?.slice(0, 4).map((gig) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={gig._id}>
                  <ProductCard gig={gig} />
                </Grid>
              ))}
            </Grid>
            </div>
          </div>
        </div>
      )}
      </section>
    </>
  );
};

export default SingleProduct;
