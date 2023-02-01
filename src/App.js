import React from "react";
import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar";
import About from "./Components/About";
import Service from "./Components/Service";
import Contact from "./Components/Contact";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
import WebDesign from "./Components/WebDesign";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Service />
      <Routes>
        <Route path="/webDesign" element={<WebDesign />} />
      </Routes>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
