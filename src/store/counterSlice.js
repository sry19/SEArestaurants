import { createSlice } from '@reduxjs/toolkit'

var dict = new Object();

const initialState = {
    value: dict
}

export const counterSlice = createSlice({
    name: 'orderCounter',
    initialState,
    reducers: {
        increment: (state, action) => {
            const [foodName, restaurantName, number] = action.payload;
            if (Object.hasOwn(state.value[restaurantName], foodName)) {
                state.value[restaurantName][foodName] = number
            } else {
                // state.value[restaurantName][foodName] = 1
            }
            console.log('increment food:',foodName,state.value[restaurantName][foodName])
        },
        decrement: (state, action) => {
            const [foodName, restaurantName, number] = action.payload;
            if (Object.hasOwn(state.value[restaurantName], foodName)) {
                state.value[restaurantName][foodName] = number
            } else {
                // state.value[restaurantName][foodName] = 0
            }
            console.log('decrement food:',foodName,state.value[restaurantName][foodName])
        },
        initializeOrder: (state, action) => {
            const [payload, foodList] = action.payload;
            const obj = state.value;
            if (!obj.hasOwnProperty(payload)) {
                state.value[payload] = {};
                for (let i=0; i<foodList.length; i++) {
                    let foodName = foodList[i].foodName;
                    state.value[payload] = {
                        ...state.value[payload],
                        [foodName]: 0
                    }
                }
            }
            console.log('initialize order:',state.value[payload])
        },
        initializeOrderFood: (state, action) => {
            const [foodName, restaurantName] = action.payload;
            const obj = state.value[restaurantName];
            if (Object.hasOwn(obj, foodName)) {
                state.value[restaurantName][foodName] = 0;
            }
        },
    }
})

export const {increment, decrement, initializeOrder, initializeOrderFood} = counterSlice.actions;
export default counterSlice.reducer;