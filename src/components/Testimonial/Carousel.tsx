import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewCard from "./ReviewCard";
import { reviews } from "../mockData";
import { Box } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Colors } from "@/components/colors";
import { TestimonyStyle } from "./TestimonyStyles";

// function SamplePrevArrow(props: any) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//      className="slick-arrow slick-next"
//       style={{ ...style, display: "block", background: "green" }}
//       onClick={onClick}
//     />
//   );
// }
// function SampleNextArrow(props: any) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className="slick-arrow slick-next"
//       style={{ ...style, display: "block", background: "red " }}
//       onClick={onClick}
//     />
//   );
// }
function Carousel() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    arrows: false,
    // prevArrow:<SamplePrevArrow/>,
    // nextArrow:<SampleNextArrow/>
    responsive: [
      {
        breakpoint: 768, // Adjust breakpoint as needed for mobile screens
        settings: {
          slidesToShow: 1, // Number of slides to show on mobile screens
          slidesToScroll: 1, // Number of slides to scroll on mobile screens
        },
      },
    ],
  };
  const sliderRef = useRef<Slider >(null);
  const goToPrev = () => {
    (sliderRef.current) && sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    (sliderRef.current) && sliderRef.current.slickNext();
  };

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);

      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  if (windowWidth <= 768) {
    settings.slidesToShow = 1;
    settings.centerMode = false;
  } else {
    settings.slidesToShow = 2;
    // settings.centerMode = true;
  }
  
  return (
    <Box sx={{}}>
      <div className="slider-container">
        <Slider ref={sliderRef} {...settings}>
          {reviews.map((review) => {
            return (
              <div key={review.id}>
                <ReviewCard />
              </div>
            );
          })}
        </Slider>
        <Box
          className="custom-arrows"
          sx={TestimonyStyle.ArrowBox}
        >
          <Box
            className="prev-arrow"
            component="span"
            onClick={goToPrev}
            sx={TestimonyStyle.ArrowBtn}
            marginRight="2rem"
          >
            <ArrowBackIcon sx={{ color: Colors.BackroundOrTitle }} />
          </Box>
          <Box
            component="span"
            className="next-arrow"
            onClick={goToNext}
            sx={TestimonyStyle.ArrowBtn}
          >
            <ArrowForwardIcon sx={{ color: Colors.BackroundOrTitle }} />
          </Box>
        </Box>
      </div>
    </Box>
  );
}

export default Carousel;
