import React from "react";
import Hero from "../HeroSection/Hero";
import Header from "../Header";

function Landing() {
  return (
    <section className="landing py-2  ">
     <div style={{zIndex:"3"}}>
     <Header />
     <Hero />
     </div>
    </section>
  );
}

export default Landing;
