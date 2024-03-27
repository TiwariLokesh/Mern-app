import React from "react";
import Statusbar from "../layout/Statusbar";
import HomeCards from '../components/HomeCards'
import Footer from '../layout/Footer'
function Home() {
  return (
    <>
      <Statusbar />
      <HomeCards/>
      <Footer/>
    </>
  );
}

export default Home;
