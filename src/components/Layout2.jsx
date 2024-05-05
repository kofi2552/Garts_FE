import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar"
import SimpleFoot from "./simplefoot/SimpleFoot";

const Layout2 = () => {
  return (
    <div>
      <div className="nav2-tile">
        <Navbar />
          </div>
            <Outlet />
        <SimpleFoot/>
    </div>
  );
};

export default Layout2;
