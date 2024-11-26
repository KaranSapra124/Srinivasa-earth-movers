import React from "react";

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto  sm:px-6 lg:px-8 flex flex-col md:flex-row justify-center items-start px-4 py-20 ">
      {/* Left: Form Section */}
      <div className="w-full md:w-2/3 bg-white p-8 shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-4">
          We Love to Hear From You
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Please call or email contact form and we will be happy to assist you.
        </p>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="Name" className="border p-3 w-full" />
          <input
            type="email"
            placeholder="Email Address"
            className="border p-3 w-full"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="border p-3 w-full"
          />
          <input
            type="text"
            placeholder="Company Name"
            className="border p-3 w-full"
          />
          <textarea
            placeholder="Write your message here..."
            className="border p-3 w-full col-span-2 h-32"
          />

          {/* Captcha and Submit Button */}
          <div className="col-span-2 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <input type="checkbox" />
              <label className="text-sm">I'm not a robot</label>
            </div>
            <button className="bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600">
              SEND MESSAGE
            </button>
          </div>
        </form>
      </div>

      {/* Right: Office Address Section */}
      <div className="w-full md:w-1/3 mt-8 md:mt-0 md:ml-6 bg-white p-8 shadow-lg">
        <h3 className="text-xl font-bold mb-4">Our Office Address</h3>

        <div className="mb-6">
          <h4 className="font-semibold">Pune Office:</h4>
          <p className="text-gray-600">
            1215 Gera's Imperium Rise, Hinjewadi Phase II, Pune 411057
          </p>
        </div>

        <div className="mb-6">
          <h4 className="font-semibold">Baramati Office:</h4>
          <p className="text-gray-600">
            Jagdamba Nagar Bhigwan Road, MIDC Baramati, Baramati, Maharashtra
            413133
          </p>
        </div>

        <div className="mb-6">
          <h4 className="font-semibold">Talk to Us:</h4>
          <p className="text-gray-600">Email: info@kasturiearthmovers.com</p>
          <p className="text-gray-600">Phone: 962-338-2143</p>
          <p className="text-gray-600">999-912-4242</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
