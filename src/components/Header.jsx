import { useState} from "react";
import "./Header.css"
import Navbar from "./navbar/Navbar";
import Categories from "./categories/Categories";
import Filter from "./filter/Filter";

const Header = ({categories, onApplyFilter, applySort}) => {
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
      <Navbar categories={categories}/>
        <header className={searchbar ? "header-fixed" : "header-unfixed"}>
          <div className="header-container">
                <div className= "content-category-filter" >
                  <Categories categories={categories}/>
              </div>
              <> <Filter applyFilter={onApplyFilter} applySort={applySort}/> </>
              </div>
        </header>
    </div>
  );
};

export default Header;
