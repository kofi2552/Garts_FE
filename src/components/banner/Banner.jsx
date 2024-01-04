import { Link } from "react-router-dom";
import "./Banner.css";
const Banner = () => {
  return (
    <div>
      <section className="banner--join">
        <div className="container-fluid">
          <div className="content-wrapper">
            <h3 className="title text-white">
              <strong className="text-white">Get Unlimited Downloads</strong>
            </h3>
            <p className="text-white">Checkout our billing info.</p>
            <Link className="button" to="">
              Go Premium
            </Link>
            <picture className="banner-image">
              <img src="images/community.png" alt="" title="Go Premium" />
            </picture>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
