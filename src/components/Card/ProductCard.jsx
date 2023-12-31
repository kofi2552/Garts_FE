import { useState} from "react";
import "./ProductCard.css"
import { Link, useLocation } from "react-router-dom";
import { BiSolidLike } from "react-icons/bi";
import { HiOutlineFolderDownload } from "react-icons/hi";
import { PiTagChevronFill } from "react-icons/pi";
import { BsFileEarmarkImage } from "react-icons/bs";
import { BsFillFileEarmarkZipFill } from "react-icons/bs";



const ProductCard = () => {
  let location = useLocation();
  const [isPaid, setPaid] = useState(false)
  const [isFileType, setFileType] = useState(false)

  const handleCardClick = () => {
    window.location.href = `${
      location.pathname === '/search' ? 'search/product/:id' : '/search/product/:id'
    }`; 
  };

  return (
    <>
    <div className="Project-Card" onClick={handleCardClick}>
        <div className="Custom-Card">
          <div className="on-hov-tf">
            <PiTagChevronFill className="file-type-indicator-tile" size={60} color="#fff"/>
            <div className="ft-indicator">{isFileType ? (<BsFileEarmarkImage />):(<BsFillFileEarmarkZipFill />)}</div>
          </div>
          <div className="imgCover">
          <img
            src="images/img_4.jpg"
            alt="Project"
          />
          </div>
          <div className="Card-Content">
            <div className="project-details">
              <div className="proj-dt-1">
              <a href="">Newest Listing Product New</a>
              <p>@Business</p>
              </div>
              <div className="proj-dt-2">
              <p className="lkz-vw"><BiSolidLike size={14} color="#959595"/><span>344</span></p>
              <p><HiOutlineFolderDownload size={15} color="#959595"/><span>57k</span></p>
              </div>
              </div>{
                isPaid ? (<p className="project-price free">Free</p>):(<p className="project-price"><sup>$</sup>20</p>)
              }
              
          </div>
        </div>
    </div>
    </>
  );
};

export default ProductCard;
