import {CocktailData} from "../components/cocktail-card/types";

export const getIngredients = (object: CocktailData) => {
    return Object.entries(object).filter(item => item[0].includes('strIngredient'));

}

export const getMeasures = (object: CocktailData) => {
    return Object.entries(object).filter(item => item[0].includes('strMeasure'));

}