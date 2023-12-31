import { useState} from "react";
import "./Header.css"
import Navbar from "./navbar/Navbar";
import Categories from "./categories/Categories";
import Filter from "./filter/Filter";

const Header = () => {
  const [searchbar, setSearchbar] = useState(false);

  const FixSearchbar = () => {
    if (window.scrollY >= 80) {
      setSearchbar(true);
    } else {
      setSearchbar(false);
    }
  };

  window.addEventListener("scroll", FixSearchbar);

  return (
    <div id="store">
      <Navbar/>
        <header className={searchbar ? "header-fixed" : "header-unfixed"}>
          <div className="header-container">
                <div className= "content-category-filter" >
                  <Categories />
              </div>
              <> <Filter/> </>
              </div>
        </header>
    </div>
  );
};

export default Header;
