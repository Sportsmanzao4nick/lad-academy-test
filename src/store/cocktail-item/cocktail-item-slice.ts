import {createSlice} from "@reduxjs/toolkit";
import {fetchCocktailById} from "./thunk";

const initialState = {
    isLoading: false,
    hasError: false,
    currentCocktail: null,
}

const cocktail = createSlice({
    name: "cocktail",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCocktailById.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchCocktailById.fulfilled, (state, action) => {
                state.isLoading = false;
                state.hasError = false;
                state.currentCocktail = action.payload;
            })
            .addCase(fetchCocktailById.rejected, (state) => {
                state.isLoading = false;
                state.hasError = true;
                state.currentCocktail = null;
            })
    }
})

export default cocktail.reducer;