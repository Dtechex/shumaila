import Contact from "@/Components/Contact";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import React from "react";

const ContactUs = (props) => {
  return (
    <React.Fragment>
      <Navbar />
      <Contact />
      <Footer />
    </React.Fragment>
  );
};

export default ContactUs;
