import React from "react";
import Navbar from "../components/Navbar";
import Tabs from "../components/Tabs";
import Hero from "../components/Hero";
import Refer from "../components/Refer";
import Benefits from "../components/Benefits";
import Faq from "../components/Faq";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <>

    <p className="bg-secondaryBlue w-full bg-opacity-15 text-xs text-center p-3">
      Navigate your ideal career path with tailored expert advice.
      <span className="text-secondaryBlue mx-2">Contact Expert</span>
    </p>

    <Navbar />
    <Tabs />
    <Hero />
    <Refer />
    <Benefits />
    <Faq />
    <Footer />
    </>
  );
};

export default LandingPage;
