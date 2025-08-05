import React from "react";
import Card from "./Card";
import { listData } from "../lib/dummydata"; // Adjust path as needed

const List = () => {
  return (
    <div className="flex flex-col gap-12">
      {listData && listData.length > 0 ? (
        listData.map((item) => (
          <Card key={item.id} item={item} />
        ))
      ) : (
        <div className="text-center py-8 text-gray-500 ">
          <p>No properties found</p>
        </div>
      )}
    </div>
  );
};

export default List;