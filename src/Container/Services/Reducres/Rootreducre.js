import { createReducer } from "@reduxjs/toolkit";
const initialState = {
    c:0,
};
export const Myreducer = createReducer(initialState , {
    increment: (state) => {
        state.c += 1;
    },
    
    incrementByValue: (state, action) => {
        state.c += 1;
        state.c += action.payload;
    },
    decrement: (state) => {
        console.log(state,'gg');
        state.c -= 1;
    },

}) ; // 2nd objcet wihich is use for reducres and first one use for intial state //