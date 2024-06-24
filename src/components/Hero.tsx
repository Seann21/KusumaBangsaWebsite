// src/components/HeroSection.tsx
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Hero: React.FC = () => {
  const [text] = useTypewriter({
    words: [
      "KUSUMA BANGSA",
      "BISA",
      "HEBAT",
      "SIAP KERJA",
      "SANTUN",
      "MANDIRI DAN KREATIF",
    ],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <div className="bg-neutral-200 w-full h-screen flex items-center mb-16">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="text-center md:text-left md:w-1/2">
          <p className="text-gray-500 mt-4 text-2xl md:3xl font-bold">
            <span style={{ color: "#1B4E6B" }}>
              The School <br />
              Vocational Education
            </span>
          </p>
          <h1 className="text-5xl md:text-5xl font-bold my-4 ">
            <span style={{ color: "#1B4E6B" }}>SMK </span>{" "}
            <span style={{ color: "#1B4E6B" }}>{text}</span>
            <span style={{ color: "red" }}>
              <Cursor cursorStyle="|" />
            </span>
          </h1>
          <p className="text-gray-500 mt-4 text-1xl md:3xl ">
            <span style={{ color: "#1B4E6B" }}>
              Mencetak Lulusan Yang Siap Kerja Dengan Kompetensi Unggul <br />
              dibidang Industri
            </span>
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
        <div className="md:w-1/2" data-aos="fade-left">
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
