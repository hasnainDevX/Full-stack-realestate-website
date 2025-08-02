import React from "react";
import Slider from "../Components/Slider";
import Map from "../Components/Map";
import { singlePostData, userData } from "../lib/dummydata";

function SinglePage() {
  return (
    <div className="singlePage flex flex-col lg:flex-row h-full gap-6 lg:gap-0">
      <div className="details flex-3 lg:flex-[3] w-full lg:w-auto">
        <div className="wrapper lg:pr-12 pr-0">
          <Slider images={singlePostData.images} />
          <div className="info mt-6">
            <div className="top flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div className="post flex flex-col">
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-3">{singlePostData.title}</h1>
                <div className="address flex items-center gap-2 mb-3">
                  <img src="/pin.png" alt="" className="w-4 h-4" />
                  <span className="text-gray-600 text-sm">{singlePostData.address}</span>
                </div>
                <div className="price bg-yellow-400 text-black font-bold text-xl px-3 py-1 rounded inline-block w-fit">
                  $ {singlePostData.price}
                </div>
              </div>
              <div className="user flex items-center gap-3 bg-yellow-50 p-4 rounded-lg">
                <img className="w-12 h-12 rounded-full object-cover" src={userData.img} alt="" />
                <span className="font-semibold text-gray-800">{userData.name}</span>
              </div>
            </div>
            <div className="bottom text-gray-700 leading-relaxed text-sm lg:text-base">
              {singlePostData.description}
            </div>
          </div>
        </div>
      </div>
      
      <div className="features flex-2 lg:flex-[2] bg-[#fcf5f3] w-full lg:w-auto">
        <div className="wrapper py-6 px-5">
          
          {/* General Section */}
          <p className="title text-lg font-semibold mb-4 text-gray-800">General</p>
          <div className="listVertical space-y-4 mb-8">
            <div className="feature flex items-center gap-3">
              <img src="/utility.png" alt="" className="w-6 h-6" />
              <div className="featureText">
                <span className="font-medium text-gray-800 block">Utilities</span>
                <p className="text-sm text-gray-600">Renter is responsible</p>
              </div>
            </div>
            <div className="feature flex items-center gap-3">
              <img src="/pet.png" alt="" className="w-6 h-6" />
              <div className="featureText">
                <span className="font-medium text-gray-800 block">Pet Policy</span>
                <p className="text-sm text-gray-600">Pets Allowed</p>
              </div>
            </div>
            <div className="feature flex items-center gap-3">
              <img src="/fee.png" alt="" className="w-6 h-6" />
              <div className="featureText">
                <span className="font-medium text-gray-800 block">Property Fees</span>
                <p className="text-sm text-gray-600">Must have 3x the rent in total household income</p>
              </div>
            </div>
          </div>

          {/* Room Sizes Section */}
          <p className="title text-lg font-semibold mb-4 text-gray-800">Room Sizes</p>
          <div className="sizes flex flex-wrap gap-4 mb-8">
            <div className="size flex items-center gap-2 bg-white p-3 rounded-lg">
              <img src="/size.png" alt="" className="w-5 h-5" />
              <span className="text-sm font-medium">80 sqft</span>
            </div>
            <div className="size flex items-center gap-2 bg-white p-3 rounded-lg">
              <img src="/bed.png" alt="" className="w-5 h-5" />
              <span className="text-sm font-medium">2 beds</span>
            </div>
            <div className="size flex items-center gap-2 bg-white p-3 rounded-lg">
              <img src="/bath.png" alt="" className="w-5 h-5" />
              <span className="text-sm font-medium">1 bathroom</span>
            </div>
          </div>

          {/* Nearby Places Section */}
          <p className="title text-lg font-semibold mb-4 text-gray-800">Nearby Places</p>
          <div className="listHorizontal space-y-4 mb-8">
            <div className="feature flex items-center gap-3">
              <img src="/school.png" alt="" className="w-6 h-6" />
              <div className="featureText">
                <span className="font-medium text-gray-800 block">School</span>
                <p className="text-sm text-gray-600">250m away</p>
              </div>
            </div>
            <div className="feature flex items-center gap-3">
              <img src="/pet.png" alt="" className="w-6 h-6" />
              <div className="featureText">
                <span className="font-medium text-gray-800 block">Bus Stop</span>
                <p className="text-sm text-gray-600">100m away</p>
              </div>
            </div>
            <div className="feature flex items-center gap-3">
              <img src="/fee.png" alt="" className="w-6 h-6" />
              <div className="featureText">
                <span className="font-medium text-gray-800 block">Restaurant</span>
                <p className="text-sm text-gray-600">200m away</p>
              </div>
            </div>
          </div>

          {/* Location Section */}
          <p className="title text-lg font-semibold mb-4 text-gray-800">Location</p>
          <div className="mapContainer mb-6 h-48 lg:h-64 rounded-lg overflow-hidden">
            <Map items={[singlePostData]} />
          </div>

          {/* Action Buttons */}
          <div className="buttons flex flex-col sm:flex-row gap-3">
            <button className="flex items-center justify-center gap-2 bg-white hover:bg-gray-50 transition-colors duration-200 px-4 py-3 rounded-lg border border-gray-200 text-gray-700 font-medium flex-1">
              <img src="/chat.png" alt="" className="w-4 h-4" />
              Send a Message
            </button>
            <button className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 transition-colors duration-200 px-4 py-3 rounded-lg text-white font-medium flex-1">
              <img src="/save.png" alt="" className="w-4 h-4 filter brightness-0 invert" />
              Save the Place
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;