import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    count: 0
}

const counterSlice = createSlice({
    name: "counter",
    initialState,

    reducers: {
        increment: (state) => {
            state.count += 1
        },

         decrement: (state) => {
            state.count = Math.max(0, state.count - 1);
        },

        reset: (state) => {
            state.count = 0;
        },

        decrementByFive: (state) => {
            state.count = Math.max(0, state.count - 5);
        },

        incrementByTen: (state) => {
            state.count += 10;
        },

        multiplyByTwo: (state) => {
            state.count *= 2;
        },

        divideByTwo: (state) => {
            state.count /= 2;
        },
    },
});

export const {increment,decrement,reset,decrementByFive,incrementByTen,multiplyByTwo,divideByTwo} = counterSlice.actions;

export default counterSlice.reducer;