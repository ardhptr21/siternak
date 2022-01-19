import React, { useEffect, useState } from "react";
import "./style.css";
import { animated, useSpring } from "react-spring";

const Carrousel = () => {
  const [animateToggle, setAnimateToggle] = useState(true);
  const styles = useSpring({
    to: {
      opacity: animateToggle ? 1 : 0,
      marginLeft: animateToggle ? 0 : -500,
    },
    from: { opacity: 0, marginLeft: -500 },
  });

  const bannerList = ["/assets/4598416.jpg", "/assets/4598407.jpg"];

  const [bannerLength] = useState(bannerList.length);
  const [bannerActive, setBannerActive] = useState(0);

  const changeImage = (e) => {
    if (e === "next") {
      if (bannerActive + 1 === bannerLength) {
        return;
      }
      setAnimateToggle(false);
      setTimeout(() => {
        setBannerActive(bannerActive + 1);
      }, 300);
    } else {
      if (bannerActive <= 0) {
        return;
      }
      setAnimateToggle(false);
      setTimeout(() => {
        setBannerActive(bannerActive - 1);
      }, 300);
    }
  };

  useEffect(() => {
    if (!animateToggle) {
      setTimeout(() => {
        setAnimateToggle(true);
      }, 300);
    }
  }, [animateToggle]);

  return (
    <div>
      <div
        className="relative rounded-lg block items-center bg-gray-100 shadow-xl"
        style={{ minHeight: "25rem" }}
      >
        <div
          className="relative w-full h-full overflow-hidden rounded-lg __animate-slider"
          style={{ minHeight: "25rem" }}
        >
          {
            <animated.img
              className="absolute inset-0 w-full h-full object-cover object-center"
              src={bannerList[bannerActive]}
              alt="banner"
              style={styles}
            />
          }
        </div>

        <button
          className={`${
            bannerActive <= 0 ? "text-gray-400" : "text-gray-600 "
          } absolute top-0 mt-40 left-0 bg-white rounded-full shadow-md h-12 w-12 text-2xl hover:text-gray-400 focus:text-gray-400 -ml-6 focus:outline-none focus:shadow-outline`}
          onClick={() => changeImage("prev")}
        >
          <span className="block" style={{ transform: "scale(-1)" }}>
            &#x279c;
          </span>
        </button>
        <button
          className={`${
            bannerActive + 1 === bannerLength
              ? "text-gray-400"
              : "text-gray-600"
          } absolute top-0 mt-40 right-0 bg-white rounded-full shadow-md h-12 w-12 text-2xl hover:text-gray-400 focus:text-gray-400 -mr-6 focus:outline-none focus:shadow-outline`}
          onClick={() => changeImage("next")}
        >
          <span className="block" style={{ transform: "scale(1)" }}>
            &#x279c;
          </span>
        </button>
      </div>
    </div>
  );
};

export default Carrousel;
