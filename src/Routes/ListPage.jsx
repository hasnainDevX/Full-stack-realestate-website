import React from 'react'
import { listData } from '../lib/dummydata'
import Filter from '../Components/Filter';
import Card from '../Components/Card';

const ListPage = () => {
    const data = listData;
  return (
    <div className='listpage flex h-full '>
        <div className="listContainer flex-3">
          <div className="wrapper pr-[50px]">
            <Filter />
            {data.map((item)=> (
              <Card key={item.id} className="card">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
        <div className="mapcontainer flex-2 bg-[#fcf5f3]">Map</div>
    </div>
  )
}

export default ListPage