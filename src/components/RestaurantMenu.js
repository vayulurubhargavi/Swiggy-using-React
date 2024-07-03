import React, { useState } from 'react'
import Shimmer from './Shimmer';
import RestaurantCategory from './RestaurantCategory';
import { useParams } from 'react-router-dom';
import RestaurantItems from './RestaurantItems';
import useFetch from '../utils/useFetch';

const RestaurantMenu = () => {
   
  const [showIndex, setShowIndex] = useState(null);

  const { resid } = useParams();//hook used to retrive dynamic url segments from URL
  console.log(resid);

  const resInfo = useFetch(resid);

  if (resInfo === null) {
     return <Shimmer />
  }

    // console.log( resInfo?.cards[2]?.card?.card?.info);
  const tabs = resInfo?.cards[1]?.card?.card.tabs;
  const {name,avgRating,costForTwoMessage,cuisines,areaName,sla,feeDetails}= resInfo?.cards[2]?.card.card.info;
  // const { title ,itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => 
    c.card?.['card']?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
  )
  // console.log(categories);


  return (
    <div className='res-menu'>
      <h2 className='text-lg font-semibold'>{name}</h2>
      <div className='m-1  flex flex-row  text-base font-bold p-4' > 
      {tabs.map((item) => {
        return (       
              <div key={item.id}>{item.title}</div>
        )
      })}
      </div>
      <hr />
        {/* ----------------restaurant info------------ */}
      <div className=' shadow-3xl flex flex-col p-4 rounded-md h-1/3' >       
        <div className='text-base font-bold'>{avgRating}/5<span>&nbsp; &nbsp; &bull;</span>{costForTwoMessage}</div>
        <div><a href='/'><span>{cuisines.join(',')}</span></a></div>
        <div className='flex flex-row font-bold text-base mb-0 '>
        <div className='mb-0 '>{areaName}</div>
        <div className='mt-0'>{sla.slaString}</div>
        </div>
        <hr className='m-2 h-0.5 bg-zinc-500'/>
        <div className='text-gray-600'>{feeDetails.message}</div> 
        </div>
      {/* ---------------------------- */}
      <div  className='flex flex-col m-5 items-center justify-center  w-full '>
        <div className='font-bold text-lg'>🍽️🍴 MENU 🍽️🍴</div>   
       <input type='text' placeholder='Search for Dishes ' className='p-2 mt-2 rounded-lg border-2 w-9/12 text-center'/>
      </div>
      <hr  className='m-2 h-4 bg-zinc-200 rounded-sm' />
      
      {/* ---------------------display item cards--------- */}
       
      {/* accordian creatings */}
      {categories.map((category,index) => {
        // console.log(category);//controlled component where its state is controlled by parent now
        return <RestaurantCategory data={category.card.card}
            key={category.card.card.title}
            showItems={index===showIndex?true :false}
            setShowIndex={()=> setShowIndex(index)}
          
          />
      })}
      
    </div>
  )
}

export default RestaurantMenu;