import Contact from "@/Components/Contact";
import Fotter from "@/Components/Fotter";
import Navbar from "@/Components/Navbar";
import React from "react";

const ContactUs = (props) => {
  return (
    <React.Fragment>
      <Navbar />
      <Contact />
      <Fotter />
    </React.Fragment>
  );
};

export default ContactUs;
