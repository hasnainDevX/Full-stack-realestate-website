import { useState } from "react";
import React from "react";
function Chat() {
  const [chat, setChat] = useState(true);
  return (
    <div className="flex flex-col overflow-y-auto py-4">
      <div className="flex-1 flex flex-col gap-5">
        <h1 className="font-light">Messages</h1>
        <div className="bg-white p-5 rounded-xl flex items-center gap-5 cursor-pointer">
          <img
            className="w-10 h-10 rounded-full object-cover"
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span className="font-bold">John Doe</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="bg-white p-5 rounded-xl flex items-center gap-5 cursor-pointer">
          <img
            className="w-10 h-10 rounded-full object-cover"
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span className="font-bold">John Doe</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="bg-white p-5 rounded-xl flex items-center gap-5 cursor-pointer">
          <img
            className="w-10 h-10 rounded-full object-cover"
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span className="font-bold">John Doe</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="bg-white p-5 rounded-xl flex items-center gap-5 cursor-pointer">
          <img
            className="w-10 h-10 rounded-full object-cover"
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span className="font-bold">John Doe</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="bg-white p-5 rounded-xl flex items-center gap-5 cursor-pointer">
          <img
            className="w-10 h-10 rounded-full object-cover"
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span className="font-bold">John Doe</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="bg-white p-5 rounded-xl flex items-center gap-5 cursor-pointer">
          <img
            className="w-10 h-10 rounded-full object-cover"
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span className="font-bold">John Doe</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
      </div>
      {chat && (
        <div className="flex-1 bg-white flex flex-col justify-between">
          <div className="bg-yellow-200 bg-opacity-50 p-5 font-bold flex items-center justify-between">
            <div className="flex items-center gap-5">
              <img
                className="w-8 h-8 rounded-full object-cover"
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
              John Doe
            </div>
            <span className="cursor-pointer" onClick={() => setChat(null)}>
              X
            </span>
          </div>
          <div className="h-80 overflow-scroll p-5 flex flex-col gap-5">
            <div className="w-1/2">
              <p>Lorem ipsum dolor sit amet</p>
              <span className="text-xs bg-yellow-200 bg-opacity-25 px-1 rounded">
                1 hour ago
              </span>
            </div>
            <div className="w-1/2 self-end text-right">
              <p>Lorem ipsum dolor sit amet</p>
              <span className="text-xs bg-yellow-200 bg-opacity-25 px-1 rounded">
                1 hour ago
              </span>
            </div>
            <div className="w-1/2">
              <p>Lorem ipsum dolor sit amet</p>
              <span className="text-xs bg-yellow-200 bg-opacity-25 px-1 rounded">
                1 hour ago
              </span>
            </div>
            <div className="w-1/2 self-end text-right">
              <p>Lorem ipsum dolor sit amet</p>
              <span className="text-xs bg-yellow-200 bg-opacity-25 px-1 rounded">
                1 hour ago
              </span>
            </div>
          </div>
          <div className="border-t-2 border-yellow-200 border-opacity-50 h-14 flex items-center justify-between overflow-hidden">
            <textarea className="flex-[3] h-full border-none p-5 resize-none outline-none overflow-hidden"></textarea>
            <button className="flex-1 bg-yellow-200 bg-opacity-50 h-full border-none cursor-pointer">
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chat;