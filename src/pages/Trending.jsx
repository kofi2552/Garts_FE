import Meta from "../components/Meta";
import PorpularProd from "../components/PorpularProd";

const Trending = () => {
  return (
    <div>
      <Meta title="Trending" />
      <section className="home-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="product-card-lists">
              <h3 className="text-center section-heading">
                Showing results for Trending
              </h3>
              <div className="card-list">
                <PorpularProd />
                <PorpularProd />
                <PorpularProd />
                <PorpularProd />
                <PorpularProd />
                <PorpularProd />
                <PorpularProd />
                <PorpularProd />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Trending;
