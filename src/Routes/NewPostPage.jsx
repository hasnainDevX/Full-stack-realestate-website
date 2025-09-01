import React from "react";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import apiRequest from "../lib/apiRequest";
import UploadWidget from "../Components/UploadWidget";
import { useNavigate } from "react-router-dom";

function NewPostPage() {
  const [value, setValue] = useState("");
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const inputs = Object.fromEntries(formData);

    try {
      const res = await apiRequest.post("/posts", {
        postData: {
          title: inputs.title,
          price: parseInt(inputs.price),
          address: inputs.address,
          city: inputs.city,
          bedroom: parseInt(inputs.bedroom),
          bathroom: parseInt(inputs.bathroom),
          type: inputs.type,
          property: inputs.property,
          latitude: inputs.latitude,
          longitude: inputs.longitude,
          images: images,
        },
        postDetail: {
          desc: value,
          utilities: inputs.utilities,
          pet: inputs.pet,
          income: inputs.income,
          size: parseInt(inputs.size),
          school: parseInt(inputs.school),
          bus: parseInt(inputs.bus),
          restaurant: parseInt(inputs.restaurant),
        },
      });
      navigate("/" + res.data.id);
    } catch (err) {
      console.log(err);
      setError(error);
    }
  };

  return (
    <div className="flex h-full">
      {/* Left form */}
      <div className="flex-[3] overflow-y-scroll">
        <h1 className="text-2xl font-bold p-6">Add New Post</h1>
        <div className="mx-0 mr-12 mb-24">
          <form
            onSubmit={handleSubmit}
            className="flex flex-wrap justify-between gap-5"
          >
            {/* Form Item */}
            <div className="flex flex-col gap-1 w-[30%]">
              <label htmlFor="title">Title</label>
              <input
                id="title"
                name="title"
                type="text"
                className="p-5 border border-gray-400 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-1 w-[30%]">
              <label htmlFor="price">Price</label>
              <input
                id="price"
                name="price"
                type="number"
                className="p-5 border border-gray-400 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-1 w-[30%]">
              <label htmlFor="address">Address</label>
              <input
                id="address"
                name="address"
                type="text"
                className="p-5 border border-gray-400 rounded-md"
              />
            </div>

            {/* Description */}
            <div className="flex flex-col gap-1 w-full h-[320px]">
              <label htmlFor="desc">Description</label>
              <ReactQuill
                theme="snow"
                onChange={setValue}
                value={value}
                className="h-[200px] text-base"
              />
            </div>

            <div className="flex flex-col gap-1 w-[30%]">
              <label htmlFor="city">City</label>
              <input
                id="city"
                name="city"
                type="text"
                className="p-5 border border-gray-400 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-1 w-[30%]">
              <label htmlFor="bedroom">Bedroom Number</label>
              <input
                min={1}
                id="bedroom"
                name="bedroom"
                type="number"
                className="p-5 border border-gray-400 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-1 w-[30%]">
              <label htmlFor="bathroom">Bathroom Number</label>
              <input
                min={1}
                id="bathroom"
                name="bathroom"
                type="number"
                className="p-5 border border-gray-400 rounded-md"
              />
            </div>

            <div className="flex flex-col gap-1 w-[30%]">
              <label htmlFor="latitude">Latitude</label>
              <input
                id="latitude"
                name="latitude"
                type="text"
                className="p-5 border border-gray-400 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-1 w-[30%]">
              <label htmlFor="longitude">Longitude</label>
              <input
                id="longitude"
                name="longitude"
                type="text"
                className="p-5 border border-gray-400 rounded-md"
              />
            </div>

            <div className="flex flex-col gap-1 w-[30%]">
              <label>Type</label>
              <select
                name="type"
                className="p-5 border border-gray-400 rounded-md"
              >
                <option value="rent" defaultChecked>
                  Rent
                </option>
                <option value="buy">Buy</option>
              </select>
            </div>

            <div className="flex flex-col gap-1 w-[30%]">
              <label>Property</label>
              <select
                name="property"
                className="p-5 border border-gray-400 rounded-md"
              >
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="condo">Condo</option>
                <option value="land">Land</option>
              </select>
            </div>

            <div className="flex flex-col gap-1 w-[30%]">
              <label>Utilities Policy</label>
              <select
                name="utilities"
                className="p-5 border border-gray-400 rounded-md"
              >
                <option value="owner">Owner is responsible</option>
                <option value="tenant">Tenant is responsible</option>
                <option value="shared">Shared</option>
              </select>
            </div>

            <div className="flex flex-col gap-1 w-[30%]">
              <label>Pet Policy</label>
              <select
                name="pet"
                className="p-5 border border-gray-400 rounded-md"
              >
                <option value="allowed">Allowed</option>
                <option value="not-allowed">Not Allowed</option>
              </select>
            </div>

            <div className="flex flex-col gap-1 w-[30%]">
              <label htmlFor="income">Income Policy</label>
              <input
                id="income"
                name="income"
                type="text"
                placeholder="Income Policy"
                className="p-5 border border-gray-400 rounded-md"
              />
            </div>

            <div className="flex flex-col gap-1 w-[30%]">
              <label htmlFor="size">Total Size (sqft)</label>
              <input
                min={0}
                id="size"
                name="size"
                type="number"
                className="p-5 border border-gray-400 rounded-md"
              />
            </div>

            <div className="flex flex-col gap-1 w-[30%]">
              <label htmlFor="school">School</label>
              <input
                min={0}
                id="school"
                name="school"
                type="number"
                className="p-5 border border-gray-400 rounded-md"
              />
            </div>

            <div className="flex flex-col gap-1 w-[30%]">
              <label htmlFor="bus">Bus</label>
              <input
                min={0}
                id="bus"
                name="bus"
                type="number"
                className="p-5 border border-gray-400 rounded-md"
              />
            </div>

            <div className="flex flex-col gap-1 w-[30%]">
              <label htmlFor="restaurant">Restaurant</label>
              <input
                min={0}
                id="restaurant"
                name="restaurant"
                type="number"
                className="p-5 border border-gray-400 rounded-md"
              />
            </div>

            <button
              className="w-[30%] p-4 bg-teal-600 text-white font-bold rounded-md cursor-pointer"
            >
              Add
            </button>
            {error && <span className="text-red-500">error</span>}
          </form>
        </div>
      </div>

      {/* Right side */}
      <div className="flex-[2] bg-[#fcf5f3] flex flex-col items-center justify-center gap-5">
        {images.map((image, index) => (
          <img
            src={image}
            key={index}
            alt=""
            className="w-1/2 h-44 object-cover rounded-md"
          />
        ))}
        <UploadWidget
          uwConfig={{
            multiple: true,
            cloudName: "dqkan4nnl",
            uploadPreset: "realestate1",
            folder: "posts",
          }}
          setState={setImages}
        />
      </div>
    </div>
  );
}

export default NewPostPage;
