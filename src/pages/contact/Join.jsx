import { Link } from "react-router-dom";
import "./Join.css";
const Join = () => {
  return (
    <div>
      <section className="section--join">
        <div className="container">
          <div className="content-wrapper">
            <h3 className="title">
              Join Our <strong>Community</strong>
            </h3>
            <p>
              Behind every stock image, there’s a creative mind. You<br></br>{" "}
              can also create content and sell it on Freepik
            </p>
            <Link className="button" to="">
              Sell Content
            </Link>
            <picture className="join-image">
              <img src="images/community.png" alt="" title="Join GetArt" />
            </picture>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Join;
