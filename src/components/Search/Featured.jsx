import React, { useState, useEffect, useRef } from "react";
import "./Featured.css";
import { Tooltip } from "antd";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function Featured() {
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
    navigate(`/lessons?search=${input}`);
  };

  return (
    <div className="search-bar">
      <div className="search" ref={searchbarRef}>
        <div className="searchInput">
          <FiSearch className="search-icon" />
          <Tooltip
            title={showTooltip && "Please fill out the search field"}
            color="cyan"
            open={showTooltip}
            placement="bottom"
          >
            <input
              type="text"
              placeholder='Try "singing lessons"'
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
        <button onClick={handleSubmit}>Search</button>
      </div>
    </div>
  );
}

export default Featured;
