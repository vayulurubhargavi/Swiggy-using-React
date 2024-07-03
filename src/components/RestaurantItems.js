import React from 'react';
import { CDN_URL } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addItems } from '../utils/cartSlice';

const RestaurantItems = ({itemCards}) => {
  console.log(itemCards);
  
  const dispatch = useDispatch();
  const handleAddItems = (itemCard) => {
    console.log(itemCard);
    dispatch(addItems(itemCard));
    
  }
  return (
          <>
          {itemCards.map((itemCard) => {
            //   console.log( itemCard?.card?.info);
              const { name, ratings, description, defaultPrice ,imageId} = itemCard?.card?.info;
              return (
                  <>
                  <div key={itemCard.card.info.id} className='flex flex-row mb-3 items-center justify-between  '>
                      <div className=' w-3/4 flex flex-col flex-wrap'>
                        <h3 className='font-bold '>{name}</h3>
                         {defaultPrice && <p className='font-medium' >💰{defaultPrice / 100}</p>}
                          {ratings && <p className='font-medium'>⭐{ratings.aggregatedRating.rating}</p>}
                          <p>{description}</p>
                       </div>
                          <div className='relative'>                            
                                  <img className='h-32 w-32 rounded-md object-cover' src={CDN_URL + imageId} alt="item-image" />                             
                      <button onClick={()=>handleAddItems(itemCard) } className='font-bold absolute -bottom-1.5 left-1/3 translate-x--1/2 bg-gray-200 text-green-600 font-bolder p-1.5 rounded-md'>ADD</button>
                          </div>                       
                  </div>
                    <hr style={{margin:5}}/>
                  </>
              )
              
          })}
        </>
  )
}

export default RestaurantItems