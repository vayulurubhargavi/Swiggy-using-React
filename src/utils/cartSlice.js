import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items:[]
    },
    reducers: {
        // redux toolkit --we can only mutate the state--uses immer behind the scenes where immer is a library
        // vanilla redux-we dont mutate the state,take copy of state and return new state
        addItems: (state,action) => {
            state.items.push(action.payload)
        },
        removeItem: (state) => {
            state.items.pop()
        },
        // original state=['pizza','sandwich']
        clearCart: (state) => {
            //RTK-- either mutate the existing state or return a new state
            // state.items.length = 0
             return {items:[]};//this new [] will replace the original state
        }
    }
})

export default cartSlice.reducer;

export const { addItems, removeItem, clearCart } = cartSlice.actions;