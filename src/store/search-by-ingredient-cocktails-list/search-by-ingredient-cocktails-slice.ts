import {createSlice} from "@reduxjs/toolkit";
import {fetchCocktailsByIngredient} from "./thunk";

const initialState = {
    isLoading: false,
    hasError: false,
    cocktailsList: [],
}

const searchCocktails = createSlice({
    name: "searchCocktails",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCocktailsByIngredient.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchCocktailsByIngredient.fulfilled, (state, action) => {
                state.isLoading = false;
                state.hasError = false;
                state.cocktailsList = action.payload;
            })
            .addCase(fetchCocktailsByIngredient.rejected, (state) => {
                state.isLoading = false;
                state.hasError = true;
                state.cocktailsList = [];
            })
    }
})

export default searchCocktails.reducer;