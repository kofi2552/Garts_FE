import React, { useState } from "react";
import "./Filter.css"
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup  } from "react-icons/io";
import { MdRemoveCircle } from "react-icons/md";

const Filter = ({ applyFilter, applySort  }) => {
  const [openFilter2, setOpenFilter2] = useState(false)
  const [openFilter3, setOpenFilter3] = useState(false)

  const [sort, setSort] = useState("sales");
  const [minValue, setMinValue] = useState("");
  const [maxValue, setMaxValue] = useState("");

  const applyFilterHandler = () => {
    applyFilter({ min: minValue, max: maxValue });
    setOpenFilter2(false);
  };

  const cleanFilterHandler = () => {
    applyFilter({ min: "", max: ""});
    setMinValue("")
    setMaxValue("")
    setOpenFilter2(false);
  };

  const applySortHandler = (type) => {
    setSort(type);
    applySort(type);
    setOpenFilter3(false);
  };

  return (
              <div className="filter-fields-section">
                <div className="fields">

                  <div className="filter" onClick={() => setOpenFilter2(!openFilter2)}> 
                  <label><span>Budget</span>
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
                    {/* <li><a href="#">Lorem Ipsum</a></li> 
                    <li><a href="#">Lorem Ipsum</a></li> */}
                   <li> <input
                      type="number"
                      placeholder=" min"
                      className="input-size"
                      value={minValue}
                      onChange={(e) => setMinValue(e.target.value)}
                      onClick={(e) => e.stopPropagation()}
                    /></li>
                    <li><input
                      type="number"
                      placeholder=" max"
                      className="input-size"
                      value={maxValue}
                      onChange={(e) => setMaxValue(e.target.value)}
                      onClick={(e) => e.stopPropagation()}
                    />
                    </li>
                    <div className="control-filter">
                    <button onClick={applyFilterHandler}>Apply</button>
                    <MdRemoveCircle size={35} onClick={cleanFilterHandler}/>
                    </div>
                  </ul>
                  </div>

                </div>

                  <div className="fields f-end">
                  <div className="filter mob-xs" onClick={() => setOpenFilter3(!openFilter3)}> 
                  <label><span>{sort === "sales" ? "Popular" : "Newest"}</span>
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
                
                    {sort === "sales" ? (
                      <li onClick={() => applySortHandler("createdAt")}>Newest</li>
                    ) : (
                      <li onClick={() => applySortHandler("sales")}>Popular</li>
                    )}
            
                  </ul>
                  </div>
                  </div>
              </div>
  );
};

export default Filter;








{/* <div className="filter no-mob-xs" onClick={() => setOpenFilter(!openFilter)} > 
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
                  </div> */}