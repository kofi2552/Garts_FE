import { useState} from "react"
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
import Modal from "../Modal/Modal";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";

const ConfirmProDownload = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();


  const [isModalOpen, setModalOpen] = useState(false);
  const [modalImageUrl, setModalImageUrl] = useState('');


//   const {
//     isLoading,
//     error,
//     data: gigData,
//   } = useQuery({
//     queryKey: ["gig", id],
//     queryFn: () =>
//       newRequest.get(`lessons/single/${id}`).then((res) => {
//         setProject(res.data);
//         return res.data;
//       }),
//   });

  // console.log("lesson:", Lesson);
  const userId = gigData?.userId;

  const {
    isLoading: isLoadingUser,
    error: errorUser,
    data: userData,
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



  const handleDownloadButtonClick = () => {
    // Set the image URL and open the modal       
    setModalImageUrl(
      'https://images.unsplash.com/photo-1598770220477-cec551a23f53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXJ0aXN0aWN8ZW58MHx8MHx8&w=1000&q=80'
    );
    setModalOpen(true);
  };

  const handleModalClose = () => {
    // Reset the state to allow opening the modal again
    setModalOpen(false);
    setModalImageUrl(''); // Optionally reset other state variables
  };

  return (
    <>
      <section className="product-section-wrapper">
        <div className="product-container-fluid">
          <div className="detail-container">
            <div className="p-left-content">
              <img
                src="https://images.unsplash.com/photo-1598770220477-cec551a23f53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXJ0aXN0aWN8ZW58MHx8MHx8&w=1000&q=80"
                alt=""
                loading="lazy"
              />
              <div className="title-text">
                <div className="project-title">
                <p className="asset-name">
                Simple white background with smooth lines in light colors
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

                    <Link to="" className="premium">
                      Explore More
                    </Link>

                    <div className="cta-Links">
                      <Link>Single file Purchase</Link> or&nbsp;
                      <Link>Subscribtion</Link>
                    </div>
                  </div>
                </div>
                <div className="btm-details">
                  <div className="middle-details">
                    <Link to="#" className="btn-download" onClick={handleDownloadButtonClick} >
                      <AiOutlineDownload size={20} />
                      &nbsp;Download
                    </Link>
                    <Link to="/checkout" className="btn-download2">
                      <FaRegUserCircle size={20} />
                      &nbsp;Contact Creator
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
                      <span><strong>File format:</strong> JPG</span>
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
              The Company may, at any moment, and without incurring in any
              responsibility towards the User, modify the content of the Website
              or the Services, limit or modify the conditions or cease to
              provide some or all the Services and features available or
              deactivate and delete.
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
                <h1>Username</h1>
              <p>@Social handle</p>
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
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                      <ProductCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                      <ProductCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                      <ProductCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                      <ProductCard />
                    </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </section>
      <Modal isOpen={isModalOpen} title="Download" size="full" onClose={handleModalClose}>
        <div className="cc-content-hd">
        <div className="Modal-content">
          <div className="left-cNt">
            <img src={modalImageUrl} alt="Modal Image" loading="lazy" />
          </div>
          <div className="right-cNt">

          </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ConfirmProDownload;
