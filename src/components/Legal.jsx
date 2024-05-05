import { Outlet } from "react-router-dom";
import { Footer2 } from "./footer/Footer2";
import NavLegal from "./navbar/NavLegal";

const Legal = () => {
  return (
    <div>
      <section className="company-section-wrapper">
        <div className="container-xxl">
          <div className="main-container">
            <div className="left-content">
              <NavLegal />
            </div>
            <div className="right-content">
              <Outlet />
            </div>
          </div>
        </div>
      </section>
      <Footer2 />
    </div>
  );
};

export default Legal;
