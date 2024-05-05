import React, { useState, useEffect, useRef } from "react";
import "./SimpleSearch.css"
import { Tooltip } from "antd";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function SimpleSearch() {
  const [input, setInput] = useState("");
  const [showTooltip, setShowTooltip] = useState(false);

  const navigate = useNavigate();
  const searchbarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchbarRef.current &&
        !searchbarRef.current.contains(event.target)
      ) {
        setShowTooltip(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSubmit = () => {
    if (input.trim() === "") {
      setShowTooltip(true);
      return;
    }
    setShowTooltip(false);
    navigate(`/projects?search=${input}`);
  };

  return (
    <div className="simple-search-bar">
      <div className="simple-search" ref={searchbarRef}>
        <div className="simple-searchInput">
          <Tooltip
            title={showTooltip && "Please fill out the search field"}
            color="cyan"
            open={showTooltip}
            placement="bottom"
          >
            <input
              type="text"
              placeholder='Search'
              onBlur={() => setShowTooltip(false)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSubmit();
                }
              }}
              onChange={(e) => setInput(e.target.value)}
            />
          </Tooltip>
        </div>
        <FiSearch className="search-icon" onClick={handleSubmit} />
      </div>
    </div>
  );
}

export default SimpleSearch;
