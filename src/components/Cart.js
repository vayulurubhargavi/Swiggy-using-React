import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import RestaurantItems from './RestaurantItems';
import { clearCart } from '../utils/cartSlice';


const Cart = () => {
    //  to display the cart items we need to subscribe to store
    const cartItems = useSelector(store => store.cart.items);
    const dispatch = useDispatch();

    const handleClearCart = () => {      
        dispatch(clearCart());
    }

  return (
      <div className='text-center m-4 p-4 '>
          <h1 className='font-bold text-2xl'>Cart</h1>
          <div className='w-1/2 m-auto'>
              <button className='p-2 bg-blue-400 m-2 rounded text-white' onClick={handleClearCart}>ClearCart</button>
              {cartItems.length === 0 ? <h1>Cart is Empty ...Add few items to cart now !! </h1> :
                  <RestaurantItems itemCards={cartItems} />}
           </div>
      </div>
  )
}

export default Cart;