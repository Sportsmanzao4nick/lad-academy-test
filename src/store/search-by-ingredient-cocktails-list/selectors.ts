import {ApplicationState} from "../types";

export const getSearchByIngredientsCocktails = (state: ApplicationState) => state.searchCocktails;

export const getSearchByIngredientsCocktailsList = (state: ApplicationState) => getSearchByIngredientsCocktails(state).cocktailsList;

export const getSearchByIngredientsCocktailsError = (state: ApplicationState) => getSearchByIngredientsCocktails(state).hasError;