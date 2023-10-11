import {ApplicationState} from "../types";

export const getCocktailObject = (state: ApplicationState) => state.cocktail;

export const getCocktail = (state: ApplicationState) => getCocktailObject(state).currentCocktail;