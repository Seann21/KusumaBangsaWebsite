import React from 'react';

const Program: React.FC = () => {
  return (
    <div id="program" className='bg-neutral-100 w-full py-16'>
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center mb-20">PROGRAM JURUSAN</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 p-6 font-bold text-lg">
          <div className="flex flex-col items-center">
            <img src="/Jurusan/Multimedia.png" alt="Multimedia" className="w-20 h-20 mb-2" />
            <p className="text-center  mt-3">MULTIMEDIA</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/Jurusan/Mesin.png" alt="Mesin" className="w-20 h-20 mb-2" />
            <p className="text-center mt-3">MESIN</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/Jurusan/Perkantoran.png" alt="Perkantoran" className="w-20 h-20 mb-2" />
            <p className="text-center mt-3">PERKANTORAN</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/Jurusan/logo tkj.png" alt="TKJ" className="w-20 h-20 mb-2" />
            <p className="text-center mt-3">RPL</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/Jurusan/hotel.png" alt="Perhotelan" className="w-24 h-20 mb-2" />
            <p className="text-center mt-3">PERHOTELAN</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/Jurusan/electro.png" alt="Elektro" className="w-20 h-20 mb-2" />
            <p className="text-center mt-3">ELEKTRO</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Program;