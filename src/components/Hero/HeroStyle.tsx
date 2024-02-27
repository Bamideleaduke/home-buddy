// import heroImg from "../../..//public/hero-image.svg";

export const HeroStyle = {
  Container: {
    // backgroundImage: `url(${heroImg})`,
    backgroundImage: {md:`url(/hero-image.svg)`},
  
    width: "100%",
    height: "100%" /* Set the height as per your requirement */,
    // objectFit: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right bottom",
    backgroundSize: "contain",

    // background-repeat: no-repeat;
    /* Add other styles as needed */
  },
};
