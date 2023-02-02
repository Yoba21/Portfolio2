import React from "react";
import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar";
import About from "./Components/About";
import Service from "./Components/Service";
import Contact from "./Components/Contact";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";


function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Service />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
