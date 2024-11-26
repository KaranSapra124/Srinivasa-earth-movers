import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer
      className="text-gray-300 py-10"
      style={{
        backgroundImage:
          "url(https://kasturiearthmovers.com/wp-content/uploads/2023/07/kasturi-earthmovers-footer-new.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-wrap justify-between">
          {/* kasturi earth movers Section */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h2 className="text-white text-xl font-bold ">
              Srinivasa earth movers
            </h2>
            <hr className="w-[20%] mb-10  bg-[#f97316] h-[3px] border-none" />
            <p className="mb-4">
              At Srinivasa earth movers, we are a leading provider of
              comprehensive services in earth movers, infrastructure
              development, and land development.
            </p>
            <img
              src={logo}
              alt="kasturi earth movers Logo"
              className="h-12"
            />{" "}
            {/* Replace logo_url with your logo URL */}
          </div>

          {/* Quick Links Section */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h2 className="text-white text-xl font-bold ">Quick Links</h2>
            <hr className="w-[20%] mb-10  bg-[#f97316] h-[3px] border-none" />
            <div className="flex gap-20">
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    {">>"} Earth Movers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    {">>"} Breakwater
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    {">>"} Land Development
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    {">>"} Excavators
                  </a>
                </li>
              </ul>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    {">>"} Earth Movers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    {">>"} Breakwater
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    {">>"} Land Development
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    {">>"} Excavators
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Get In Touch Section */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h2 className="text-white text-xl font-bold ">Get In Touch</h2>
            <hr className="w-[20%] mb-10  bg-[#f97316] h-[3px] border-none" />
            <ul className="space-y-2">
              <li className="text-gray-300">
                <span className="font-bold">Address: </span>62, Lakshmipura, Thatguni post , Kanakapura Main Road, Bengaluru-560062 
              </li>
              <li className="text-gray-300">
                <span className="font-bold">Phone: </span>+919035379994
              </li>
              <li className="text-gray-300">
                <span className="font-bold">Email: </span>
                info@srinivasaearthmovers.com
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p className="text-gray-500">
            Copyright © 2024 srinivasa earth movers. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
