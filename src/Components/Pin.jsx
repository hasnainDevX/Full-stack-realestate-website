import React from "react";
import { Marker, Popup } from 'react-leaflet';
import { Link } from "react-router-dom";

const Pin = ({item}) => {
  return (
    <>
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <div className="PopupContainer flex gap-4 p-3 min-w-[280px] bg-white rounded-lg shadow-lg border-0 animate-fadeIn">
            <img 
              src={item.img} 
              alt={item.title} 
              className="w-[64px] h-[48px] object-cover rounded-md shadow-sm hover:scale-105 transition-transform duration-200 flex-shrink-0" 
            />
            <div className="textcontainer flex flex-col justify-between flex-1 min-w-0">
                <Link 
                  to={`/list/${item.id}`} 
                  className="title text-sm font-semibold text-gray-800 hover:text-yellow-500 transition-colors duration-200 line-clamp-2 leading-tight mb-1"
                >
                    {item.title}
                </Link>
                <span className="text-xs text-gray-600 mb-1">{item.bedroom} bedrooms</span>
                <h2 className="text-lg font-bold text-green-600">${item.price}</h2>
            </div>
        </div>
      </Popup>
    </Marker>
    </>
  );
};

export default Pin;