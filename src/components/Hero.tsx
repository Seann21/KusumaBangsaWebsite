// src/components/HeroSection.tsx
import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="bg-slate-300 w-full h-screen flex items-center">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="text-center md:text-left md:w-1/2">
          <p className="text-gray-500 mt-4 text-lg">welcome</p>
          <h1 className="text-blue-900 font-bold mt-2 text-4xl md:text-5xl">
            SMK KUSUMA BANGSA
          </h1>
          <p className="text-gray-500 mt-2 text-lg">
            SMK Bisa, SMK Hebat, Siap Kerja, Santun, Mandiri dan Kreatif.
          </p>
          <div className="mt-8 flex flex-wrap justify-center md:justify-start space-x-4">
            <a
              href="#"
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
            >
              About
            </a>
            <a
              href="#"
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="md:w-1/2">
          <img
            src="/home2.png"
            alt="Logo SMK KUSUMA BANGSA"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
