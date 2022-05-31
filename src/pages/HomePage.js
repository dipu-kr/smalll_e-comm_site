import React from "react";
import Header from "../components/Header";
import Featured from "../components/Featured";
import Featured1 from "../components/Featured1";
import Offer from "../components/Offer";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <div>
      <Header />
      <Featured />
      <Featured1 />
      <Offer />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default HomePage;
