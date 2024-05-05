import { useState } from "react";
import "./test.css";

const Test = () => {
  const [scrollfx, setScrollfx] = useState(0);

  const onScrollT = () => {
    if (window.scrollY >= 400) {
      setScrollfx(true);
    } else {
      setScrollfx(false);
    }
  };

  window.addEventListener("scroll", onScrollT);

  return (
    <div>
      <div className="main-box">
        <div className="box-container">
          <div className="top-box"></div>
          <div className="mid-box">
            <div className={scrollfx ? "left-box" : "left-fixed"}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Mauris nunc congue nisi vitae. Dolor sed viverra ipsum nunc
                aliquet bibendum enim. Ac auctor augue mauris augue neque
                gravida in. Turpis in eu mi bibendum neque egestas congue
                quisque egestas. Pretium quam vulputate dignissim suspendisse
                in. In iaculis nunc sed augue lacus viverra vitae. Ut sem nulla
                pharetra diam sit amet nisl suscipit adipiscing. Varius morbi
                enim nunc faucibus a pellentesque sit. Egestas diam in arcu
                cursus. In eu mi bibendum neque egestas congue quisque. Neque
                sodales ut etiam sit amet nisl purus in. Ac tortor dignissim
                convallis aenean. Sed arcu non odio euismod lacinia at quis
                risus. Ultricies mi eget mauris pharetra et ultrices neque
                ornare. Habitasse platea dictumst quisque sagittis purus. Risus
                commodo viverra maecenas accumsan lacus vel. Arcu felis bibendum
                ut tristique. Sed faucibus turpis in eu mi bibendum neque.
                Condimentum vitae sapien pellentesque habitant morbi tristique
                senectus et netus. Semper quis lectus nulla at volutpat diam ut.
                Orci ac auctor augue mauris augue neque gravida in fermentum.
              </p>
            </div>
            <div className="right-box"></div>
          </div>
          <div className="bottom-box"></div>
        </div>
      </div>
    </div>
  );
};

export default Test;
