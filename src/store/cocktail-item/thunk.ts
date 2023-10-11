import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchCocktailById = createAsyncThunk(
    "cocktails/fetchById",
    async (id: string | undefined, {rejectWithValue}) => {
        try {
            const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)

            if (response.status !== 200) {
                throw new Error("Error!");
            }

            return response.data.drinks[0];
        } catch (e) {
            return rejectWithValue(e);
        }
    }
)
