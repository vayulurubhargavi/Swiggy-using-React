import React from "react";
import { useState } from "react";
import RestaurantItems from "./RestaurantItems";

// import RestaurantItems from "./RestaurantItems";
const RestaurantCategory = ({ data,showItems,setShowIndex}) => {

    // console.log(data.itemCards);
    
    const handleToggle = () => {
        setShowIndex();
    }
    return (
        <div >
            {/* header */}
            <div className="w-full my-3 mx-0 shadow-lg p-4 flex flex-row justify-between items-center cursor-pointer" onClick={handleToggle}>
                <div className="font-bold ">{data.title}({data.itemCards.length})</div>
                <div>⬇️</div>
            </div>
            {/* body */}
            <div className='flex flex-col'>
                {showItems && <RestaurantItems itemCards={data.itemCards} />}
            </div>
            <hr  className='my-2 mx-auto h-4 bg-zinc-200 rounded-sm  ' />
          
        </div>
    )
}

export default RestaurantCategory;