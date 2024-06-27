import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { About } from './components/About';
import Program from './components/Program';
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <> <Navbar />
     <Hero />
     <About />
     <Program />
      <Contact />
       <br></br>
      <Footer />
    </>
  )
}

export default App;