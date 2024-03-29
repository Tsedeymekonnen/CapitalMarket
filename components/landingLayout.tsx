import React from "react";
import Header from "./header";
import News from "./news";
import Navbar from "./navbar";
import About from "./about";

const LandingPageLayout = () => {
  return (
    <div className="px-8 md:px-14 text-poppins">
      <Header />
      <News />
    </div>
  );
};

export default LandingPageLayout;
