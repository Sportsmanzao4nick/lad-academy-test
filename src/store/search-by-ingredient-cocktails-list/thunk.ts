import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchCocktailsByIngredient = createAsyncThunk(
    "cocktails/fetchByIngreidient",
    async(ingredient: string | undefined, {rejectWithValue}) => {
        try {
            const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`);

            if (response.status !== 200) {
                throw new Error("Error!");
            }

            return  response.data.drinks;
        } catch (e) {
            return rejectWithValue(e);
        }
    }
);