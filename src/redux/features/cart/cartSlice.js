import { createSlice } from '@reduxjs/toolkit'
import { number } from 'framer-motion'


const initialState = {
    products: [],
    selectedItem: 0,
    totalPrice: 0,
    tex: 0,
    texRate: 0.05,
    grandTotal: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const isExsist = state.products.find((product) => product.id === action.payload.id)

            if (!isExsist) {
                alert("!!Product added to the cart successfully!!")
                state.products.push({
                    ...action.payload, quantity: 1
                    
                })
            } else {
                alert("!!Product is already in the cart!!")
            }
            state.selectedItem = setSelectedItems(state);
            state.totalPrice = setTotalPrice(state);
            state.tex = setTax(state);
            state.grandTotal = setGrandTotal(state);
        }
    }

})

export const setSelectedItems = (state) => state.products.reduce((total, product) => {
    return Number(total + product.quantity)
})
export const setTotalPrice = (state) => state.products.reduce((total, product) => {
    return Number(total + product.quantity * product.price)
})
export const setTax = (state) => setTotalPrice(state)*state.texRate;
export const setGrandTotal = (state)=> {
    return setTotalPrice(state)+setTotalPrice(state)*state.texRate;
}

export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;