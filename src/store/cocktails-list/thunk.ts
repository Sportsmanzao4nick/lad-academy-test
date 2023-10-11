import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchAlcoholCocktails = createAsyncThunk(
    "cocktails/alcohol",
    async (_, {rejectWithValue}) => {
        try {
            const response = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic");

            if (response.status !== 200) {
                throw new Error("Error!");
            }

            return response.data.drinks;

        } catch (e) {
            return rejectWithValue(e);
        }

    }
)

export const fetchNonAlcoholCocktails = createAsyncThunk(
    "cocktails/nonAlcohol",
    async (_, {rejectWithValue}) => {
        try {
            const response = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic");

            if (response.status !== 200) {
                throw new Error("Error!");
            }

            return response.data.drinks;

        } catch (e) {
            return rejectWithValue(e);
        }

    }
)