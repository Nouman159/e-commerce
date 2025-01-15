import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: [
        // { id: 1, name: 'Product 1', price: 100, quantity: 1 , price : 5.25}
    ],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.cart.push(action.payload)
        },
        updateItemQuantity: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload.id)
            if (item && (item.quantity + action.payload.quantity) > 0) {
                item.quantity += action.payload.quantity
            }
        },
        removeItem: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload)
        }
    },
})

// Action creators are generated for each case reducer function
export const { addItem, updateItemQuantity, removeItem } = cartSlice.actions

export default cartSlice.reducer
