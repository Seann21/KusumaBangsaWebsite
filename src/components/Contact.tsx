import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start p-5 bg-white shadow rounded-md shadow-2xl">
      <div className="w-full md:w-1/2 md:pr-8 mb-6 md:mb-0">
        <h2 className="text-2xl font-bold mb-4">Leave Us A Message</h2>
        <input
          type="text"
          placeholder="Name"
          className="w-full py-2 px-4 mb-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-orange-500"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="w-full py-2 px-4 mb-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-orange-500"
        />
        <textarea
          placeholder="Your Message"
          rows={5}
          className="w-full py-2 px-4 mb-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-orange-500"
        />
        <button className="bg-orange-500 text-white py-2 px-8 md:px-40 rounded-2xl hover:bg-orange-600 transition duration-300">
          Send
        </button>
      </div>
      <div className="w-full md:w-2/5 bg-gray-50 p-4 rounded-md flex flex-col items-start">
        <div className="mb-4 flex items-start">
          <svg
            className="w-6 h-6 mr-2 text-orange-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <p className="text-gray-700">
            Information technologies building.
          </p>
        </div>
        <div className="mb-4 flex items-start">
          <svg
            className="w-6 h-6 mr-2 text-orange-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <p className="text-gray-700">+234 081-1236-1234</p>
        </div>
        <div className="mb-4 flex items-center">
          <svg
            className="w-6 h-6 mr-2 text-orange-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <p className="text-gray-700">SMKKusumaBangsa@yahoo</p>
        </div>
      
        <div className="w-full h-48 rounded overflow-hidden shadow-2xl">
          <iframe
            className="w-full h-full border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354346434867!2d-122.4473032846812!3d37.76776217975856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085816c06b1a9e1%3A0xa8ef0ad24b9b2ae1!2sHayes%20Valley%2C%20San%20Francisco%2C%20CA%2094102%2C%20USA!5e0!3m2!1sen!2sin!4v1625563627096!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
