import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { About } from './components/About';
import Program from './components/Program';
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <About />
      <Program />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;