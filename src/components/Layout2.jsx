import { Outlet } from "react-router-dom";
// import { Footer3 } from "./footer/Footer3";
import "./navbar/NavL2";
import NavL2 from "./navbar/NavL2";
const Layout2 = () => {
  return (
    <div>
      <NavL2 />
      <Outlet />
    </div>
  );
};

export default Layout2;
