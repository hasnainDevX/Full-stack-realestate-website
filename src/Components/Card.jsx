import React from "react";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <div className="card bg-white flex sm:flex-row flex-col gap-5 my-6">
      <Link to={`/listing/${item.id}`}  className="imageContainer flex-2 md:h-[200px] ">
        <img
          src={item.img}
          alt="property-image"
          className="object-cover w-full h-full rounded-sm max-w-[]"
        />
      </Link>
      <div className="textContainer flex flex-col justify-center gap-3 flex-3">
        <h2 className="title text-xl font-semibold text-[#292929e7] transition-all delay-100 ease-in-out hover:text-[#000] hover:scale-[101%]">
          <Link to={`/listing/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="flex items-center text-slate-600 gap-2 ">
          <img className="w-4 h-4" src="/pin.png" alt="pin-image" />
          <span className="text-[14px]">{item.address}</span>
        </p>
        <p className="price text-[20px] font-light p-2 rounded-sm bg-[#ffc40093] w-max">${item.price}</p>
        <div className="bottom flex justify-between items-center">
          <div className="features">
            <div className="feature flex justify-center items-center gap-2 mb-2">
              <img className="w-4 h-4" src="/bed.png" alt="bed image" />
              <span>{item.bedroom} Bedrooms</span>
            </div>
            <div className="feature flex justify-center items-center gap-2 mb-2">
              <img className="w-4 h-4" src="/bath.png" alt="bathroom image" />
              <span>{item.bathroom} Bathrooms</span>
            </div>
          </div>
          <div className="icons flex gap-5">
            <div className="icon border px-[2px] py-[5px] rounded-sm cursor-pointer flex items-center justify-center hover:bg-slate-200">
              <img className="w-4 h-4 " src="/save.png" alt="save image" />
            </div>
            <div className="icon border px-[2px] py-[5px] rounded-sm cursor-pointer flex items-center justify-center hover:bg-slate-200">
              <img className="w-4 h-4" src="/chat.png" alt="chat image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
