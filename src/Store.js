import { configureStore } from "@reduxjs/toolkit";

import Mytodo from "./Container/Services/Reducres/Todoreducer"
const store =  configureStore({
    reducer:{
todo:Mytodo, 
    },
});
export default store;

