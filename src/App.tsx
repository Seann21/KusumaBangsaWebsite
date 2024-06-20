import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { About } from './components/About';
import Program from './components/Program';

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
       <About/>
      <Program/>
    </div>
  );
};

export default App;
