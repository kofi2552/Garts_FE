import React, { useState } from "react";
import "./Filter.css"
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup  } from "react-icons/io";

const Filter = () => {
  const [openFilter, setOpenFilter] = useState(false)
  const [openFilter2, setOpenFilter2] = useState(false)
  const [openFilter3, setOpenFilter3] = useState(false)

  return (
              <div className="filter-fields-section">
                <div className="fields">

                  <div className="filter no-mob-xs" onClick={() => setOpenFilter(!openFilter)} > 
                  <label><span>Categories</span>
                    {openFilter ? (
                    <IoMdArrowDropdown 
                    className="icon-dwn" 
                    color="#191919"
                    size={20}
                    onClick={() => setOpenFilter(false)} 
                    />
                  ) : (
                    <IoMdArrowDropup
                      className="icon-dwn" 
                      color="#191919"
                      size={20}
                      onClick={() => setOpenFilter(true)} 
                      />
                  )}
                    </label>
                    <ul className={openFilter ? "slide": "no-slide"}>
                    <li><a href="#">Lorem Ipsum</a></li> 
                    <li><a href="#">Lorem Ipsum</a></li>
                    <li><a href="#">Lorem Ipsum</a></li>
                    <li><a href="#">Lorem Ipsum</a></li>
                  </ul>
                  </div>
                  <div className="filter" onClick={() => setOpenFilter2(!openFilter2)}> 
                  <label><span>Prices</span>
                    {openFilter2 ? (
                    <IoMdArrowDropdown 
                    className="icon-dwn" 
                    color="#191919"
                    size={20}
                    onClick={() => setOpenFilter2(false)} 
                    />
                  ) : (
                    <IoMdArrowDropup
                      className="icon-dwn" 
                      color="#191919"
                      size={20}
                      onClick={() => setOpenFilter2(true)} 
                      />
                  )}
                    </label>
                    <ul className={openFilter2 ? "slide": "no-slide"}>
                    <li><a href="#">Lorem Ipsum</a></li> 
                    <li><a href="#">Lorem Ipsum</a></li>
                    <li><a href="#">Lorem Ipsum</a></li>
                    <li><a href="#">Lorem Ipsum</a></li>
                  </ul>
                  </div>

                </div>

                  <div className="fields f-end">
                  <div className="filter mob-xs" onClick={() => setOpenFilter3(!openFilter3)}> 
                  <label><span>Newest</span>
                    {openFilter3 ? (
                    <IoMdArrowDropdown 
                    className="icon-dwn" 
                    color="#191919"
                    size={20}
                    onClick={() => setOpenFilter3(false)} 
                    />
                  ) : (
                    <IoMdArrowDropup
                      className="icon-dwn" 
                      color="#191919"
                      size={20}
                      onClick={() => setOpenFilter3(true)} 
                      />
                  )}
                    </label>
                    <ul className={openFilter3 ? "slide Rt": "no-slide"}>
                    <li><a href="#">Lorem</a></li> 
                    <li><a href="#">Lorem Ips</a></li>
                    <li><a href="#">Lorem gff</a></li>
                    <li><a href="#">Lorem Ipsum</a></li>
                  </ul>
                  </div>
                  </div>
              </div>
  );
};

export default Filter;
