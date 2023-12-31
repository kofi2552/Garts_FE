
import { Link } from "react-router-dom";
import { MdOutlineFavoriteBorder } from "react-icons/md";

const PorpularProd = () => {
  return (
    <div className="product-card">
      <img src="images/img_4.jpg" className="img-fluid" alt="" loading="lazy" />
      <Link to="product/:id">
        <div className="product-details">
          <div className="animate">
            <h3 className="description">Newest Listing Product</h3>
            <div className="top-details">
              <div className="top-content">
                <div className="price-container">
                  <p className="salesprice">$200</p>
                  <p className="discountrate">-18.2%</p>
                </div>
                <div className="download">
                  <MdOutlineFavoriteBorder className="icon fs-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PorpularProd;
