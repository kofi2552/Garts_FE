import { useState, useEffect} from "react"
import { Link, useParams, useLocation } from "react-router-dom";
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
import { FiMaximize2 } from "react-icons/fi";
import Modal from "../Modal/Modal";
import Social from "../socials/Social";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';

const SingleProduct = () => {

  const { id } = useParams();
  const location = useLocation();
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [userColor, setUserColor] = useState(null);
  const [creater, setCreator] = useState(null);
  const [project, setProject] = useState();
  const [allproject, setAllProject] = useState();
  const [showPhoneNumber, setShowPhoneNumber] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isPaid, setPaid] = useState(false)
  // const [OrderIntentid, setOrderIntentid] = useState();
  // const [token, setToken] = useState("");
  // const [payresult, setPayresult] = useState("");

  const [isModalOpen, setModalOpen] = useState(false);
  const [modalImageUrl, setModalImageUrl] = useState('');


  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage, {
        position: 'bottom-right',
        autoClose: 3000, // Adjust duration as needed
        hideProgressBar: false,
      });
    }
  }, [errorMessage]);



  const handleMaximize = () => {       
    setModalImageUrl(gigData?.image);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setModalImageUrl(''); // Optionally reset other state variables
  };



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
        // console.log(res.data)
        return res.data;
      }),
  });

  // console.log("project data:", project);
  const CreatorId = gigData?.userId;
  
  // console.log("userID:", userId);
  const {
  } = useQuery({
    queryKey: ["user", CreatorId],
    queryFn: () =>
      newRequest.get(`users/user/${CreatorId}`).then((res) => {
        const userPhoneNumber = res.data.phone;
        setPhoneNumber(userPhoneNumber);
        setUserColor(res.data?.iconColor)
        setCreator(res.data)
        // console.log(res.data)
        return res.data;
      }),
    enabled: !!CreatorId,
  });



 //paystack PAYMENT

    const getUserData = () => {
      let currentUser = JSON.parse(sessionStorage.getItem("user"));
      if (!currentUser) {
        currentUser = JSON.parse(localStorage.getItem("currentUser"));
      }
      return currentUser;
    };
      

    const handlePayBtn = async () => {
      const currentUser = getUserData();
    
      if (currentUser) {
        const { username, phone, email } = currentUser;
        let amount = project?.price;
        const unlockcode = project?.unlockcode;
        const isPaid = project?.isPaid;
    
        // Check if the project is free, set amount to 0
        if (!isPaid) {
          amount = 0;
        }
    
        // Check if user data is complete
        if (username && phone && email && unlockcode && isPaid) {
          try {
            const token = Cookies.get("accessToken");
              const transactionResponse = await initializeTransaction(
                email,
                amount,
                phone,
                username,
                unlockcode,
                token
              );
    
              // const { authorization_url, reference } = transactionResponse;
              const { authorization_url } = transactionResponse;
    
              // localStorage.setItem("paymentReference", reference);
    
              window.location.href = authorization_url;
            } 
           catch (error) {
            console.error("Error initializing transaction:", error);
            setErrorMessage("Payment processing unsuccessful!");
          }
        } else {
          console.error("Incomplete user data or project is not paid");
          setErrorMessage("Incomplete data! Try Again");
        }
      } else {
        console.error("Can not initiate transaction. User data not found!");
        setErrorMessage("User data not found!");
    
        if (!project?.isPaid) {
          window.location.href = `/verify_payment/${id}`;
        } else {
          window.location.href = `/login?redirect=${encodeURIComponent(
            location.pathname
          )}`;
        }
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
     
      {isLoading ? (
        <p>Loading</p>
      ) : error ? (
        <div className="network-error">Network error. Try again!</div>
      ) : (
        <div className="product-container-fluid">
          <div className="detail-container">
            <div className="p-left-content">
              <div className="pro-img-cover">
              <img
                src={project?.image || "https://images.unsplash.com/photo-1598770220477-cec551a23f53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXJ0aXN0aWN8ZW58MHx8MHx8&w=1000&q=80"}
                alt=""
                loading="lazy"
              />
              
              <div className="maximize" onClick={handleMaximize}>
              <FiMaximize2 color="#ffff" size={30}/>
              </div>
              </div>
              <div>
              <div className="title-text">
                <div className="project-brand">
                  <div className="users-name-icon" style={{ backgroundColor: userColor }}>
                  {creater?.username?.charAt(0).toUpperCase()}
                
                  </div>
                  <div className="creator-info">
                  <p>{creater?.username}</p>
                  <span className="desk-user-details">{creater?.role} | {isPaid ? `Asset selling At: ${ gigData?.price}`:"Asset is Free"}</span>
                  <span className="mob-user-details">{isPaid ? `Price: $${gigData?.price}`:"FREE"}</span>
                  </div>
                  </div>
                <p className="prod-icon2">
                  <AiOutlineHeart size={20} />
                  &nbsp;<span>Like</span>
                </p>
              </div>
              
                </div>
            </div>
          
            <div className="p-right-content">
              <div className="asset-details">
                  { isPaid ? (
                    <>
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
                 <div className="project-title pt-mob">
                 <h5 className="asset-title">
                   {gigData.title || "Project Title"}
                 {/* Lorem ipsum dolor, sit amet consectetur adipisicing elitum  */}
                 </h5>
                 </div>
                 </>
                ):(
                  <>
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
                <div className="project-title pt-mob">
                 <h5 className="asset-title">
                   {gigData.title || "Project Title"}
                 {/* Lorem ipsum dolor, sit amet consectetur adipisicing elitum  */}
                 </h5>
                 </div>
                </>
                )}
                <div className="btm-details">
                  <div className="middle-details">
                    <Link to="#" className="btn-download" onClick={handlePayBtn} >
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
                      <span><strong>File format:</strong>&nbsp;{gigData?.filetype || "N/A"}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* {errorMessage && <div className="error">{errorMessage}</div>} */}
          <div className="project-title pt-desk">
                <h5 className="asset-title">
                  {gigData?.title || "Project Title"}
                {/* Lorem ipsum dolor, sit amet consectetur adipisicing elitum  */}
                </h5>
                </div>
          <div className="middle-content">
            <div className="project-desc">
            <div className="asset-description">
              <p>{ gigData?.desc || "The Company may, at any moment, and without incurring in"}</p>
            </div>
            {/* <div className="more-proj-detail">
            <h4>Most curated project areas</h4>
              <ul className="list-ptx">
                <li className="pntxs">Photoshop</li>
                <li className="pntxs">UXUI Design</li>
                <li className="pntxs">Developer</li>
                <li className="pntxs">Video Editing</li>
              </ul>
              </div> */}
            </div>
            <div className="XCreator-box">
              <HiMiniUserCircle size={90} color="#d3dfe9" className="avatar" />
              <div className="XCreator-info">
                <h1>{creater?.brand || "admin"}</h1>
                <Social socials={creater?.socials} />
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
      <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar />
      <Modal isOpen={isModalOpen} title="Download" size="full" onClose={handleModalClose}>
        <div className="cc-content-hd">
            <img src={modalImageUrl} alt="Modal Image" loading="lazy" />
        </div>
      </Modal>
      </section>

      
    </>
  );
};

export default SingleProduct;
