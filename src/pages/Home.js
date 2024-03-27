import React from "react";
import Statusbar from "../layout/Statusbar";
import HomeCards from '../components/HomeCards'
import Footer from '../layout/Footer'
import Hero from "../components/Hero";
function Home() {
  return (
    <>
      <Statusbar />
      <Hero/>
      <HomeCards/>
      <Footer/>
    </>
  );
}

export default Home;
