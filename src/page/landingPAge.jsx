import React, { useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Tabs from "../components/Tabs";
import Hero from "../components/Hero";
import Refer from "../components/Refer";
import Benefits from "../components/Benefits";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Register from "../components/auth/Signup";
import Login from "../components/auth/Login";
import ReferNow from "../components/auth/Refer";

const LandingPage = () => {
  const [formModal, setFormModel] = useState(false);
  const [signupModel, setSignupModel] = useState(false);
  const referRef = useRef(null);
  const benefitRef = useRef(null);
  const faqRef = useRef(null);
  const supportRef = useRef(null);

  const [openReferal,setOpenReferal] = useState(false)
    const divRef = useRef(null);


  const handleClose = (event) => {
  if (divRef.current && !divRef.current.contains(event.target)) {
    setOpenReferal(false);
  }
  }

  const handleOpen =() => {
    setOpenReferal(true)
  }

  const scrollToRef = (ref) => {
       ref.current.scrollIntoView({ behavior: "smooth" });

  }

  // console.log(referRef,benefitRef,faqRef);

  return (
    <>
      <p className="bg-secondaryBlue w-full bg-opacity-15 text-xs text-center p-3">
        Navigate your ideal career path with tailored expert advice.
        <span className="text-secondaryBlue mx-2">Contact Expert</span>
      </p>

      {formModal && (
        <Login setFormModel={setFormModel} setSignupModel={setSignupModel} />
      )}

      {signupModel && (
        <Register setFormModel={setFormModel} setSignupModel={setSignupModel} />
      )}

      {openReferal && (
        <ReferNow divRef={divRef} handleClose={handleClose} setOpenReferal={setOpenReferal} />
      )}

      <Navbar setFormModel={setFormModel}  />
      <Tabs scrollToRef={scrollToRef} referRef={referRef} benefitsRef={benefitRef} faqRef={faqRef} />
      <Hero handleOpen={handleOpen} />
      <Refer referRef={referRef} handleOpen={handleOpen} />
      <Benefits benefitRef={benefitRef} handleOpen={handleOpen} />
      <Faq faqRef={faqRef} />
      <Footer />
    </>
  );
};

export default LandingPage;
