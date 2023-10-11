import {ApplicationState} from "../types";

export const getCocktails = (state: ApplicationState) => state.cocktailsList;

export const getAlcoholicCocktails = (state: ApplicationState) => getCocktails(state).alcoholCocktailsList;

export const getNonAlcoholicCocktails = (state: ApplicationState) => getCocktails(state).nonAlcoholCocktailsList;

export const getCocktailsError = (state: ApplicationState) => getCocktails(state).hasError;