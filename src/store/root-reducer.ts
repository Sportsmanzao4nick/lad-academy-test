import {configureStore} from "@reduxjs/toolkit";
import cocktailsList from "./cocktails-list"
import cocktail from "./cocktail-item";

export const store = configureStore({
    reducer: {
        cocktailsList: cocktailsList,
        cocktail: cocktail,
    }
})
