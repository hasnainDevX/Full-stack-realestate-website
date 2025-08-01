import React from 'react'

const Filter = () => {
  return (
    <div className='filter'>
        <h1>Search Result for <b>London</b> </h1>
        <div className="top">
            <div className="item">
                <label htmlFor="city">Location</label>
                <input type="text" id='city' name='city' placeholder='city location'/>
            </div>
        </div>
        <div className="bottom">
            <div className="item">
                <label htmlFor="type">Type</label>
                <select name="type" id="type">
                    <option value="">All</option>
                    <option value="buy">Buy</option>
                    <option value="rent">Rent</option>
                </select>
            
            </div>
            <div className="item">
                <label htmlFor="property">Property</label>
                <select name="property" id="property">
                    <option value="">All</option>
                    <option value="house">House</option>
                    <option value="apartment">Apartment</option>
                    <option value="condo">Condo</option>
                    <option value="land">Land</option>
                </select>
            </div>
            <div className="item">
                <label htmlFor="minPrice">Min Price</label>
                <input type="text" id='minPrice' name='minPrice' placeholder='any'/>
            </div>
            <div className="item">
                <label htmlFor="maxPrice">Max Price</label>
                <input type="text" id='maxPrice' name='maxPrice' placeholder='any'/>
            </div>
            <div className="item">
                <label htmlFor="bedrooms">Bedroom</label>
                <input type="text" id='bedrooms' name='bedrooms' placeholder='any'/>
            </div>
            <button><img src="/search.png" alt="" /></button>
        </div>
    </div>
  )
}

export default Filter