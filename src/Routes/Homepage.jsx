import React from "react";
import SearchBar from "../Components/SearchBar";
import { FaHome, FaUsers, FaChartLine, FaHandshake } from "react-icons/fa";

const Homepage = () => {
  return (
    <div className="homepage flex flex-1 flex-col h-full">
      
    <div className="homesection flex flex-col lg:flex-row h-full
    ">
      <div className="text-container flex-3 md:mt-12 lg:mt-6 mt-1 self-start ">
        <div className="wrapper md:pr-[100px] flex flex-col justify-center gap-4 h-full ">
          <div className="badge mb-2 rounded-3xl bg-[#f0e007] p-1 flex items-center justify-center w-[100px]">
            <span className="text-xl font-semibold">Realtors</span>
          </div>
          <h1 className="text-4xl font-bold">Find Your Dream Home Now</h1>
          <p className="text-lg">
            We help you find the perfect place to call home. A better life
            awaits you. The journey begins here. Start your search today! Key in
            your preferences and let us do the rest.
          </p>
          <SearchBar />
          <div className="boxes flex justify-between mt-5 ">
            <div className="box">
              <h1 className="md:text-3xl text-2xl font-semibold">16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1 className="md:text-3xl text-2xl font-semibold">1000+</h1>
              <h2>Happy Customers</h2>
            </div>
            <div className="box">
              <h1 className="md:text-3xl text-2xl font-semibold">500+</h1>
              <h2>Properties Listed</h2>
            </div>
          </div>
          
        </div>
      </div>
      <div className="img-container lg:flex hidden relative flex-2 bg-[#fcf5f3] justify-end">
        <img
          className="absolute right-0"
          src="/bg.png"
          alt="background"
        />
      </div>
      
    </div>

     {/* About Section */}
      <div className="about py-20 px-4 bg-white mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About Realterzz
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your trusted partner in finding the perfect property
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                With over 16 years of experience in the real estate market, Realterzz has established itself as a leading platform connecting buyers, sellers, and renters across the region.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We understand that real estate decisions are among life's most important investments. Our platform combines market expertise with cutting-edge technology to deliver results that matter.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg">
                  <FaHome className="text-yellow-500 text-xl" />
                  <span className="text-gray-700 font-medium">500+ Properties</span>
                </div>
                <div className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg">
                  <FaUsers className="text-yellow-500 text-xl" />
                  <span className="text-gray-700 font-medium">1000+ Clients</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <FaChartLine className="text-yellow-500 text-xl mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Market Expertise</h4>
                    <p className="text-gray-600">Deep understanding of local market trends and pricing</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <FaHandshake className="text-yellow-500 text-xl mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Trusted Service</h4>
                    <p className="text-gray-600">Professional guidance throughout your property journey</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    </div>
  );
};

export default Homepage;
