import React from 'react';

export const About: React.FC = () => {
  return (
    <div id="about" className='bg-neutral-100 w-full py-16'>
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/3 flex justify-center mb-4 md:mb-0">
            <img src="/logoAbout.png" alt="about section" className="w-3/4 md:w-full h-auto" />
          </div>
          <div className="w-full md:w-2/3 md:ml-6">
            <h2 className="text-4xl font-bold mb-4 text-center md:text-left py-6">ABOUT US</h2>
            <p className="text-gray-700 mb-4 text-center md:text-left font-poppins font-semibold">
              SMK Kusuma Bangsa Adalah Lembaga Pendidikan Vokasi Yang Berkomitmen Untuk Mencetak Lulusan Yang Siap Kerja Dengan Kompetensi Unggul Di Berbagai Bidang Industri. Berdiri Sejak Tahun 1995, SMK Kusuma Bangsa Telah Menjadi Salah Satu Sekolah Menengah Kejuruan Terkemuka Di Indonesia, Dengan Fasilitas Modern Dan Tenaga Pengajar Profesional. Kami Berfokus Pada Pengembangan Keterampilan Praktis Dan Pengetahuan Teori Yang Relevan Dengan Kebutuhan Dunia Kerja, Memastikan Setiap Siswa Siap Menghadapi Tantangan Di Masa Depan.
            </p>
            <p className="text-gray-700 text-center md:text-left font-poppins font-semibold">
              Misi Kami Adalah Untuk Mendidik Dan Melatih Generasi Muda Menjadi Profesional Yang Beretika, Kreatif, Dan Berdaya Saing Tinggi Di Pasar Global. Dengan Pendekatan Pembelajaran Yang Holistik Dan Berbasis Proyek, Kami Memastikan Bahwa Setiap Siswa Mendapatkan Pengalaman Belajar Yang Menyeluruh Dan Aplikatif.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
