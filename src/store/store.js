import { configureStore } from "@reduxjs/toolkit";
import counter from "./slices/counter.js";
import cartArray from "./slices/Card.js";
export default configureStore({
    reducer:{
        counter,
       cartArray

    }


})
