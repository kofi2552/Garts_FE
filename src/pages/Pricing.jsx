import Banner from "../components/Banner";
import Nav2Home from "../components/navbar/Nav2Home";
import PricingComp from "../components/PricingComp";
// import { Link } from "react-router-dom";
// import Container from "../components/Container";

const Pricing = () => {
  return (
    <div>
      <Nav2Home />
      <section className="pricing-wrapper">
        <Banner />
      </section>
      <section className="p-body">
        <div className="container">
          <PricingComp />
        </div>
      </section>
    </div>
  );
};

export default Pricing;
