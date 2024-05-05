import { Outlet } from "react-router-dom";
// import { Footer } from "../components/footer/Footer";
import SimpleFoot from "../components/simplefoot/SimpleFoot";

const LandMain = () => {
  return (
   <>
      <Outlet />
      <SimpleFoot />
      </>
  );
};

export default LandMain;
