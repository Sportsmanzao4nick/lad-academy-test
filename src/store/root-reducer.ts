import {configureStore} from "@reduxjs/toolkit";
import cocktailsList from "./cocktails-list"
import cocktail from "./cocktail-item";
import searchCocktails from "./search-by-ingredient-cocktails-list";

export const store = configureStore({
    reducer: {
        cocktailsList: cocktailsList,
        cocktail: cocktail,
        searchCocktails: searchCocktails,
    }
})
