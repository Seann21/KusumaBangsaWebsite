import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Implement form submission logic here
  };

  return (
    <div className='bg-neutral-200'>
    <div id="contact" className="max-w-4xl mx-auto py-14">
      <h1 className="text-4xl font-bold mb-6 text-center p-10">CONTACT</h1>
      <div className="bg-white rounded-lg shadow-2xl p-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-4">Leave Us A Message</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full border rounded-md px-3 py-2 mb-3"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full border rounded-md px-3 py-2 mb-3"
                value={formData.email}
                onChange={handleChange}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                className="w-full border rounded-md px-3 py-2 mb-3 h-32 resize-none"
                value={formData.message}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition-colors"
              >
                Send
              </button>
            </form>
          </div>
          <div className="flex-1">
            <div className="mb-4">
              <div className="flex items-start mb-2">
                <svg className="w-5 h-5 text-orange-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p>Jl. Wijaya Kusuma. No.82, Surabaya, Jawa Timur</p>
              </div>
              <div className="flex items-center mb-2">
                <svg className="w-5 h-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <p>+234 081-1234-1234</p>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p>SMKKusumaBangsa@yahoo.com</p>
              </div>
            </div>
            <div className="w-full h-60 rounded-md overflow-hidden shadow-2xl">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.8645364142967!2d112.74381217046727!3d-7.256254276728133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7f96f8820ac15%3A0x6a69b8a080950fd8!2sJl.%20Wijaya%20Kusuma%20No.82%2C%20Ketabang%2C%20Kec.%20Genteng%2C%20Surabaya%2C%20Jawa%20Timur%2060272!5e0!3m2!1sid!2sid!4v1719154805533!5m2!1sid!2sid" width="100%" height="100%"></iframe>
        </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Contact;