
import {
  MdOutlineCategory,
  MdOutlineVideoLibrary,
  MdOutlineDraw,
} from "react-icons/md";
import { Link } from "react-router-dom";
import { BsArrowUpRight } from "react-icons/bs";

export const Sidebar = () => {
  return (
    <div className="side-bar">
      <div className="filter-side-cards">
        <div className="filter-card mb-2 pt-2">
          <h5 className="filter-title mt-3">Categories</h5>
          <div>
            <ul className="ps-0">
              <li>
                <Link to="/home">
                  Creative Assets
                  <BsArrowUpRight size={10} className="s-icon" />
                </Link>
              </li>
              <li>
                <Link to="/home">
                  Design Resources
                  <BsArrowUpRight size={10} className="s-icon" />
                </Link>
              </li>
              <li>
                <Link to="/home">
                  Video Resources
                  <BsArrowUpRight size={10} className="s-icon" />
                </Link>
              </li>
              <li>
                <Link to="/home">
                  Ui/Ux Templates
                  <BsArrowUpRight size={10} className="s-icon" />
                </Link>
              </li>
              <li>
                <Link to="/home">
                  Design Mockups
                  <BsArrowUpRight size={10} className="s-icon" />
                </Link>
              </li>
              <li>
                <Link to="/home">
                  Local Assets
                  <BsArrowUpRight size={10} className="s-icon" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="filter-card mb-3">
          <h5 className="filter-title">License</h5>
          <div className="d-flex">
            <h5 className="subtitle license">Free</h5>
            <h5 className="subtitle license">Premium</h5>
          </div>
        </div>
        <div className="filter-card mb-2">
          <h5 className="filter-title">Collections</h5>
          <div className="pb-2">
            <h5 className="subtitle">
              <MdOutlineCategory size={20} className="z-icon" />
              Featured Collections
            </h5>
            <h5 className="subtitle">
              <MdOutlineVideoLibrary size={20} className="z-icon" />
              Recently Added
            </h5>
            <h5 className="subtitle">
              <MdOutlineDraw size={20} className="z-icon" />
              Trending Assets
            </h5>
            <h5 className="subtitle">
              <MdOutlineCategory size={20} className="z-icon" />
              Featured Collections
            </h5>
            <h5 className="subtitle">
              <MdOutlineVideoLibrary size={20} className="z-icon" />
              Recently Added
            </h5>
            <h5 className="subtitle">
              <MdOutlineDraw size={20} className="z-icon" />
              Trending Assets
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};
