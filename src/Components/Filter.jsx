import React from 'react'
import { FaMapPin, FaSearch } from 'react-icons/fa'

const Filter = () => {
  return (
    <div className='filter mb-4'>
      <h1 className='!w-full text-xl md:text-2xl text-gray-800 mb-3'>
        Search results for <span className='text-yellow-600'>{}</span>
      </h1>
      
      {/* Location Input */}
      <div className='mb-2'>
        <label className='block text-sm font-medium text-gray-700 mb-1'>
          <FaMapPin size={16} className='inline mr-2' />
          Location
        </label>
        <input 
          type="text" 
          placeholder='City Location'
          className='w-full p-1.5 border border-gray-300 rounded-sm focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none'
        />
      </div>
      
      {/* Filters Grid */}
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4'>
        {/* Type */}
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>Type</label>
          <select className='w-full p-1.5 border border-gray-300 rounded-sm focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none bg-white'>
            <option>any</option>
            <option>Buy</option>
            <option>Rent</option>
          </select>
        </div>
        
        {/* Property */}
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>Property</label>
          <select className='w-full p-1.5 border border-gray-300 rounded-sm focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none bg-white'>
            <option>any</option>
            <option>House</option>
            <option>Apartment</option>
            <option>Condo</option>
          </select>
        </div>
        
        {/* Min Price */}
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>Min Price</label>
          <input 
            type="text" 
            placeholder='any'
            className='w-full p-1 border border-gray-300 rounded-sm focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none'
          />
        </div>
        
        {/* Max Price */}
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>Max Price</label>
          <input 
            type="text" 
            placeholder='any'
            className='w-full p-1 border border-gray-300 rounded-sm focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none'
          />
        </div>
        
        {/* Bedrooms */}
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>Bedrooms</label>
          <input 
            type="text" 
            placeholder='any'
            className='w-full p-1 border border-gray-300 rounded-sm focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none'
          />
        </div>
        
        {/* Search Button */}
        <div className='flex items-end'>
          <button className='w-full bg-yellow-400 hover:bg-yellow-500 p-3 transition-colors cursor-pointer'>
            <FaSearch size={20} className='mx-auto text-white' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Filter