import React, { useState } from 'react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState<string>('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <div className="bg-blue-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center md:items-start lg:items-start mt-4">
            <img 
              src="/logoinov.png"
              alt="SMK Kusuma Bangsa"
              className="w-48 h-auto mb-4 lg:w-64"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-white pb-2">Quick Links</h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li><a href="#Home" className="hover:text-white transition duration-300">Home</a></li>
              <li><a href="#about" className="hover:text-white transition duration-300">About</a></li>
              <li><a href="#program" className="hover:text-white transition duration-300">Program</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-white pb-2">Location</h3>
            <p className="text-gray-400 text-sm mb-2">Jl. Wijaya Kusuma No.82, Surabaya,</p>
            <p className="text-gray-400 text-sm mb-2">Jawa Timur</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-white pb-2">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">
               Find updates about events at SMK Kusuma Bangsa
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="SMKKusumaBangsa@yahoo"
                value={email}
                onChange={handleEmailChange}
                className="bg-white text-gray-800 text-sm py-2 px-3 rounded-md w-full"
              />
              <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm py-2 px-4 rounded-md transition duration-300">
                Email
              </button>
            </div>
          </div>
        </div>

        <hr className="my-8 border-gray-700 " />

        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <div className="text-center md:text-left mb-4 md:mb-0 md:w-1/3">
            &copy; 2024. SMK KUSUMA BANGSA
          </div>
          <div className="flex justify-center space-x-6 md:w-1/3 mb-4 md:mb-0">
            <a href="#" className="text-orange-500 hover:text-white transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.859 2H8.051zm-.002 1.063-.14.001c-.742.003-4.6.025-5.532.285a.937.937 0 0 0-.662.661c-.092.346-.158.794-.2 1.3l-.012.151-.021.26-.007.104A29.83 29.83 0 0 0 1.48 7.6v.801c0 .179.008 1.035.074 1.957l.008.104.021.26.012.151c.041.506.108.954.2 1.3a.937.937 0 0 0 .662.66c.38.1 1.419.193 2.705.244l.169.006.17.006.086.003.171.006c1.282.046 2.546.051 2.845.052h.12c.51-.002 4.982-.028 5.804-.292a.937.937 0 0 0 .662-.66c.092-.346.159-.794.2-1.3l.012-.151.021-.26.008-.104c.064-.912.072-1.768.073-1.956v-.076a29.69 29.69 0 0 0-.074-1.957l-.008-.104-.021-.26-.012-.151c-.041-.506-.108-.954-.2-1.3a.937.937 0 0 0-.662-.661c-.732-.197-4.387-.28-5.324-.285l-.13-.001zm-2.004 2.52 3.803 2.132-3.803 2.13v-4.26z" />
              </svg>
            </a>
            <a href="#" className="text-orange-500 hover:text-white transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                <path d="M8 0c2.173 0 2.453.008 3.31.048.858.04 1.443.175 1.946.37.448.168.823.38 1.193.75.37.37.582.745.75 1.193.195.503.33 1.088.37 1.946.04.857.048 1.137.048 3.31s-.008 2.453-.048 3.31c-.04.858-.175 1.443-.37 1.946a3.686 3.686 0 0 1-.75 1.193 3.686 3.686 0 0 1-1.193.75c-.503.195-1.088.33-1.946.37-.857.04-1.137.048-3.31.048s-2.453-.008-3.31-.048c-.858-.04-1.443-.175-1.946-.37a3.686 3.686 0 0 1-1.193-.75 3.686 3.686 0 0 1-.75-1.193c-.195-.503-.33-1.088-.37-1.946C.008 10.453 0 10.173 0 8s.008-2.453.048-3.31c.04-.858.175-1.443.37-1.946.168-.448.38-.823.75-1.193.37-.37.745-.582 1.193-.75.503-.195 1.088-.33 1.946-.37C5.547.008 5.827 0 8 0zm0 1.438c-2.16 0-2.42.007-3.274.047-.79.037-1.217.166-1.5.276-.378.147-.648.324-.933.609a2.247 2.247 0 0 0-.609.933c-.11.283-.239.71-.276 1.5-.04.855-.047 1.115-.047 3.274s.007 2.42.047 3.274c.037.79.166 1.217.276 1.5.147.378.324.648.609.933.285.285.555.462.933.609.283.11.71.239 1.5.276.855.04 1.115.047 3.274.047s2.42-.007 3.274-.047c.79-.037 1.217-.166 1.5-.276.378-.147.648-.324.933-.609.285-.285.462-.555.609-.933.11-.283.239-.71.276-1.5.04-.855.047-1.115.047-3.274s-.007-2.42-.047-3.274c-.037-.79-.166-1.217-.276-1.5a2.247 2.247 0 0 0-.609-.933 2.247 2.247 0 0 0-.933-.609c-.283-.11-.71-.239-1.5-.276-.855-.04-1.115-.047-3.274-.047zM8 3.89a4.11 4.11 0 1 1 0 8.22 4.11 4.11 0 0 1 0-8.22zm0 1.4a2.71 2.71 0 1 0 0 5.42 2.71 2.71 0 0 0 0-5.42zm5.2-.26a.98.98 0 1 1-1.96 0 .98.98 0 0 1 1.96 0z" />
              </svg>
            </a>
            <a href="#" className="text-orange-500 hover:text-white transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14-.004-.282-.01-.423A6.667 6.667 0 0 0 16 3.542a6.656 6.656 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.084.793 3.301 3.301 0 0 0-5.623 3.007A9.344 9.344 0 0 1 1.112 2.1a3.301 3.301 0 0 0 1.018 4.403A3.273 3.273 0 0 1 .64 6.575v.045a3.301 3.301 0 0 0 2.645 3.233 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.621-.057 3.301 3.301 0 0 0 3.067 2.279 6.588 6.588 0 0 1-4.862 1.36 9.286 9.286 0 0 0 5.034 1.475" />
              </svg>
            </a>
          </div>
          <div className="text-center md:text-right md:w-1/3">
            Created with passion and dedication by SI UNP Kediri student 👨🏻‍💻
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
