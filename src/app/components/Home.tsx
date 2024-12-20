import React from "react";

const Home = () => {
  return (
    <div
      className="relative bg-cover bg-center min-h-screen flex items-center text-white"
      style={{
        backgroundImage: "url('bg_house.jpg')", // Background image path
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-white opacity-90"></div>

      {/* Content Section */}
      <div className="relative z-10 px-6 md:px-20 space-y-4 md:space-y-6">
        <h1 className="text-3xl md:text-6xl font-extrabold text-blue-900 leading-snug">
          Governor Sindh <br />
          <span className="text-2xl md:text-5xl font-normal text-blue-800">
            Kamran Khan Tessori
          </span>
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold text-[#60b5ff]">
          Certified Cloud <br /> 
          <span className="">
          Applied Generative AI <br />
          </span>
          <span>
          Engineer (GenEng)
          </span>
        </h2>
        <p className="text-lg md:text-2xl font-extrabold text-blue-900">
          Earn up to{" "}
          <span className="text-blue-900 font-extrabold">$5,000/month</span>
        </p>
        <p className="text-lg md:text-2xl font-extrabold text-blue-900">
          Now admissions are open in <br />
          <span>Hyderabad</span>
        </p>
        <div className="flex items-center space-x-6">
  {/* Apply Button */}
  <button className="bg-blue-900 hover:bg-blue-700 text-white py-2 px-6 md:py-4 md:px-10 rounded-lg text-lg md:text-xl font-semibold shadow-lg">
    APPLY NOW
  </button>

  {/* Applications Count */}
  <div className="flex flex-col items-start">
    <span className="text-3xl md:text-4xl font-extrabold text-blue-900">
      562,143
    </span>
    <span className="text-sm md:text-base font-normal text-blue-900">
      Accepted Applications
    </span>
  </div>
</div>

      </div>

      {/* Governor Image */}
      <div className="absolute bottom-0 right-0 mr-auto w-1/2 md:w-auto">
        <img
          src="/kamran tessori.png"
          alt="Governor Photo"
          className="w-full md:h-[700px] md:w-auto"
        />
      </div>
    </div>
  );
};

export default Home;
