
import { Link } from "react-router-dom";
import { Footer } from "../components/footer/Footer";
import { BsArrowLeft } from "react-icons/bs";
import CustomInput from "../components/CustomInput";

const Checkout = () => {
  return (
    <div>
      <div className="checkout-wrapper">
        <div className="container-xxl">
          <h1>Checkout</h1>
          <div className="row">
            <div className="l col-6">
              <h3>Contact Details</h3>
              <p className="small">
                Kindly provide a few details to help us process you your
                payment. Rest assured! Your data is save with us.
              </p>
              <form className="form-group">
                <div className="flex-grow-1">
                  <CustomInput type="text" placeholder="Full Name" />
                </div>
                <div className="flex-grow-1">
                  <CustomInput type="number" placeholder="Mobile" />
                </div>
                <div className="w-100">
                  <CustomInput type="text" placeholder="Address" />
                </div>
                <div className="flex-grow-1">
                  <CustomInput type="text" placeholder="Country" />
                </div>
                <div className="flex-grow-1">
                  <CustomInput type="text" placeholder="City" />
                </div>
              </form>
            </div>
            <div className="v-line"></div>
            <div className="r col-6">
              <h3>Payment Information</h3>
            </div>
          </div>
          <div className="btn-cont w-100 d-flex">
            <Link className="btn-left" to="">
              <BsArrowLeft />
              &nbsp;Back
            </Link>
            <Link className="btn-right" to="">
              Continue
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
