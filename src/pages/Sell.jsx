import { Link } from "react-router-dom";
// import CustomInput from "../components/CustomInput";
import Container from "../components/Container";
import Nav2Home from "../components/navbar/Nav2Home";
import Banner from "../components/Banner";
import CustomInput from "../components/CustomInput";

const Sell = () => {
  return (
    <div>
      <Nav2Home />
      <section className="pricing-wrapper">
        <Banner />
      </section>
      <Container class1="sell-page-wrapper">
        <div className="main-content">
          <div className="sell-body">
            <div className="create-sell-account">
              <div>
                <h3 className="heading">Early Bird Offer</h3>
                <p className="faded-text">
                  Kindly enter your email to recieve our newsletter on time once
                  this feature is up and running.
                </p>
                <form action="" className="form-group">
                  <div className="mb-4">
                    <CustomInput
                      type="text"
                      name="name"
                      placeholder="Username"
                    />
                  </div>
                  <div className="mb-4">
                    <CustomInput type="text" name="email" placeholder="Email" />
                  </div>
                  <div className="mb-4">
                    <CustomInput
                      type="tel"
                      name="mobile"
                      placeholder="Mobile Number"
                    />
                  </div>
                  <div className="login-btn-container mb-3">
                    <button type="submit" className="button-login">
                      Submit
                    </button>
                    <div className="faded-text">
                      Don&apos;t have an account?
                      <Link to="/signup" className="text-center">
                        Sign up
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Sell;
