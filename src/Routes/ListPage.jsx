import React from 'react'
import { listData } from '../lib/dummydata'
import Filter from '../Components/Filter';
import Card from '../Components/Card';
import Map from '../Components/Map';

const ListPage = () => {
    const data = listData;
  return (
    <div className='listpage flex h-[calc(100vh-100px)] md:flex-row flex-col'>
        <div className="listContainer flex-3 h-full">
          <div className="pb-5 wrapper h-full md:pr-[50px] flex-col gap-20 overflow-y-auto">
            <Filter/>
            {data.map((item)=> (
              <Card key={item.id} item={item} className="card m" />
            ))}
          </div>
        </div>
        <div className="mapcontainer flex-2 bg-[#fcf5f3]">
          <div className="h-full">
            <Map items={data} />
          </div>
        </div>
    </div>
  )
}

export default ListPage