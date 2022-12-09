
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    arry: [],


}

const Mytodo = createSlice({
    name: 'Mytodo',
    initialState: initialState,
    reducers: {
        Add_todo: (state, action) => {
            state.arry.push(action.payload)
        },

        del_todo: (state, action) => {
            const delitem = state.arry.filter((item, index) => {
                return index !== action.payload
            });
            state.arry = delitem;
        },

        update_todo: (state, action) => {
            state.arry = action.payload
        },

    }
})


export const { Add_todo, del_todo, edit_todo, update_todo } = Mytodo.actions;
export default Mytodo.reducer;






