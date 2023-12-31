import Container from "../components/Container";
import { Link } from "react-router-dom";

const Community = () => {
  return (
    <div>
      <Container class1="sell-page-wrapper">
        <div className="main-content">
          <div className="sell-body">
            <div className="gif-container">
              <img
                src="https://media.tenor.com/fBaZ3C9nTfAAAAAC/dance-cartoon.gif"
                alt="coming soon"
              />
            </div>
            <h1 className="heading text-center faded-text">Coming Soon!</h1>

            <div className="sell-account-links">
              <p className="text-center faded-text">
                <Link to="/login">Log in</Link> now or{" "}
                <Link to="/signup">Sign up</Link> with us and start selling your
                creative works.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Community;
