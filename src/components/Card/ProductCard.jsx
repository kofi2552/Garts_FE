import { useState, useEffect} from "react";
import "./ProductCard.css"
import { Link, useLocation } from "react-router-dom";
import { BiSolidLike } from "react-icons/bi";
import { HiOutlineFolderDownload } from "react-icons/hi";
import { PiTagChevronFill } from "react-icons/pi";
import { BsFileEarmarkImage } from "react-icons/bs";
import { BsFillFileEarmarkZipFill } from "react-icons/bs";



const ProductCard = ({gig}) => {
  let location = useLocation();
  const [isPaid, setPaid] = useState(false)
  const [isFileType, setFileType] = useState(false)

  const handleCardClick = () => {
    window.location.href = `${
      location.pathname === '/search' ? `/projects/${gig?._id}` : `/projects/${gig?._id}`
    }`; 
  };


  const fileType = gig?.filetype;
  const isPaidValue = gig?.isPaid;

  const determineFileType = () => {
    if (fileType === 'image') {
      setFileType(true);
    } else {
      setFileType(false);
    }
  };

  const determineIsPaid = () => {
    setPaid(isPaidValue);
  };

  useEffect(() => {
    determineFileType();
    determineIsPaid();
  }, [gig]);

  return (
    <>
    <div className="Project-Card" onClick={handleCardClick}>
        <div className="Custom-Card">
          <div className="on-hov-tf">
            <PiTagChevronFill className={isFileType ?"file-type-indicator-tile":"file-type-indicator-tile2"} size={60} color="#fff"/>
            {isFileType ? (<div className="ft-indicator"> <BsFileEarmarkImage /></div>):(<div className="ft-indicator"><BsFillFileEarmarkZipFill /></div>)}
          </div>
          <div className="imgCover">
          <img
            src={gig?.image}
            alt="Project"
          />
          </div>
          <div className="Card-Content">
            <div className="project-details">
              <div className="proj-dt-1">
              <a href="#">{gig?.title}</a>
              <p>@{gig?.brand}</p>
              </div>
              <div className="proj-dt-2">
              <p className="lkz-vw"><BiSolidLike size={14} color="#959595"/><span>{gig?.likes}</span></p>
              <p><HiOutlineFolderDownload size={15} color="#959595"/><span>57k</span></p>
              </div>
              </div>{
                isPaid ? (<p className="project-price"><sup>$</sup>{gig?.price}</p>):(<p className="project-price free">Free</p>)
              }
              
          </div>
        </div>
    </div>
    </>
  );
};

export default ProductCard;
