import { useState } from "react";
import { Link } from "react-router-dom";
import { CgTab } from "react-icons/cg";
import mbag from "../assets/mbag.png";
import mbag2 from "../assets/mbg.png";

const PricingComp = () => {
  const [tab, setTab] = useState(1);

  const ToggleTab = (index) => {
    setTab(index);
  };

  return (
    <section className="about-section">
      <div className="section-2">
        <p className="text-center page-small-text">Design A Great Business</p>
        <div className="first-container">
          <h2 className="text-center">High Quality Creative Assets for Less</h2>
          <div className="tabs-container">
            <div className="t-button">
              <Link
                to=""
                className={tab === 1 ? "active" : ""}
                id="Per"
                onClick={() => ToggleTab(1)}
              >
                <CgTab size={23} />
                &nbsp;Pay Per Asset
              </Link>
              <Link
                to=""
                className={tab === 2 ? "active" : ""}
                id="Once"
                onClick={() => ToggleTab(2)}
              >
                <CgTab size={23} />
                &nbsp;Subscription
              </Link>
            </div>
            <div className="tabs-content-box">
              <div
                className={
                  tab === 1 ? "package-1 activate-package" : "package-1"
                }
              >
                <div>
                  <h3>Pay for each download</h3>
                  <p>
                    Created for all those teams who want access to unlimited
                    creative assets. Designed to facilitate collaborative work
                    and an inexhaustible source of inspiration with the easiest
                    management structure. All the benefits of a Premium plan A
                    single administrator account to manage everything from it
                    Personalized plan according to your needs Technical and
                    legal advice The greater number of seats, the greater the
                    discount
                  </p>
                </div>
                <img src={mbag} alt="" />
              </div>

              <div
                className={
                  tab === 2 ? "package-2 activate-package" : "package-2"
                }
              >
                <div>
                  <h3>Subscribe and Pay Monthly</h3>
                  <p>
                    Created for all those teams who want access to unlimited
                    creative assets. Designed to facilitate collaborative work
                    and an inexhaustible source of inspiration with the easiest
                    management structure.
                    <div className="d-flex align-items-center">
                      <div className="pt-4">
                        <ul>
                          <li>
                            <p>&#x2713;</p>&nbsp;Premium vectors
                          </li>
                          <li>
                            <p>&#x2713;</p>&nbsp;HD stock photos
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <p>&#x2713;</p>&nbsp;Premium PSD files
                          </li>
                          <li>
                            <p>&#x2713;</p>&nbsp;Presets and LUTs
                          </li>
                        </ul>
                      </div>
                      <div className="pt-4 mx-auto">
                        <h5 className="d-flex align-items-center">
                          <p className="star-icon m-0">&#x272A;</p>
                          &nbsp;Unlimited Downloads
                        </h5>
                      </div>
                    </div>
                  </p>
                </div>
                <img src={mbag2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingComp;
