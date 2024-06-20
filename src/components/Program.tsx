import React from 'react';

const Program: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8 underline">PROGRAM JURUSAN</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 p-6">
        <div className="flex flex-col items-center">
          <img src="/Jurusan/Multimedia.png" alt="Multimedia" className="w-20 h-20 mb-2" />
          <p className="text-center">MULTIMEDIA</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/Jurusan/Mesin.png" alt="Mesin" className="w-20 h-20 mb-2" />
          <p className="text-center">MESIN</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/Jurusan/Perkantoran.png" alt="Perkantoran" className="w-20 h-20 mb-2" />
          <p className="text-center">PERKANTORAN</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/Jurusan/logo tkj.png" alt="TKJ" className="w-20 h-20 mb-2" />
          <p className="text-center">TKJ</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/Jurusan/hotel.png" alt="Perhotelan" className="w-24 h-20 mb-2" />
          <p className="text-center">PERHOTELAN</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/Jurusan/electro.png" alt="Elektro" className="w-20 h-20 mb-2" />
          <p className="text-center">ELEKTRO</p>
        </div>
      </div>
    </div>
  );
}

export default Program;
