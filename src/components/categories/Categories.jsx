import {React} from "react";
import "./Categories.css";
import { Link } from "react-router-dom";
import { BiImages } from "react-icons/bi";
import {
  MdOutlineCategory,
  MdOutlineVideoLibrary,
  MdOutlineDraw,
} from "react-icons/md";
import { CgDesignmodo } from "react-icons/cg";
import { HiOutlineTemplate } from "react-icons/hi";
import { RiPaintLine } from "react-icons/ri";


const Categories = ({categories}) => {


  const categoryIcons = [
    <MdOutlineCategory className="icon" />,
    <MdOutlineVideoLibrary className="icon" />,
    <MdOutlineDraw className="icon" />,
    <CgDesignmodo className="icon" />,
    <HiOutlineTemplate className="icon" />,
    <RiPaintLine className="icon" />,
  ];

  return (
    <div className="tags-container">
      <div className="mainfilterbox">
        <ul className="tag-list">
          <li>
            <Link className="item cat-links" to="/projects">
              <BiImages className="icon" />
              All Assets
            </Link>
          </li>
         
          {categories &&
              categories.map((card, index) => (
                <li key={index}>
                <Link to={`/projects?cat=${card._id}`} className="cat-links">
                {index < categoryIcons.length && categoryIcons[index]}
                  {card.name}
                </Link>
              </li>
              ))}
        </ul>
      </div>
    </div>
  );
};

export default Categories;















{/* <li>
            <Link className="item" to="/product-type/assets">
              <MdOutlineCategory className="icon" />
              Creative Assets
            </Link>
          </li>
          <li>
            <Link className="item" to="/product-type/video">
              <MdOutlineVideoLibrary className="icon" />
              Video Presets
            </Link>
          </li>
          <li>
            <Link className="item" to="/product-type/graphics">
              <CgDesignmodo className="icon" />
              Graphics Design
            </Link>
          </li>
          <li>
            <Link className="item" to="/product-type/ui">
              <HiOutlineTemplate className="icon" />
              Ui/Ux Design
            </Link>
          </li>
          <li>
            <Link className="item" to="/product-type/craft">
              <RiPaintLine className="icon" />
              Artist Paintings
            </Link>
          </li>
          <li>
            <Link className="item" to="/product-type/african">
              <MdOutlineDraw className="icon" />
              African Assets
            </Link>
          </li>
          <li>
            <Link className="item" to="/product-type/african">
              <MdOutlineDraw className="icon" />
              African Assets
            </Link>
          </li> */}