import { createSlice } from "@reduxjs/toolkit";
import { fetchAlcoholCocktails, fetchNonAlcoholCocktails } from "./thunk";

const initialState = {
    isLoading: false,
    hasError: false,
    alcoholCocktailsList: [],
    nonAlcoholCocktailsList: [],
};

const cocktails = createSlice({
    name: "cocktails",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAlcoholCocktails.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchAlcoholCocktails.fulfilled, (state, action) => {
                state.isLoading = false;
                state.hasError = false;
                state.alcoholCocktailsList = action.payload;
            })
            .addCase(fetchAlcoholCocktails.rejected, (state) => {
                state.isLoading = false;
                state.hasError = true;
                state.alcoholCocktailsList = [];
            })
            .addCase(fetchNonAlcoholCocktails.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchNonAlcoholCocktails.fulfilled, (state, action) => {
                state.isLoading = false;
                state.hasError = false;
                state.nonAlcoholCocktailsList = action.payload;
            })
            .addCase(fetchNonAlcoholCocktails.rejected, (state) => {
                state.isLoading = false;
                state.hasError = true;
                state.nonAlcoholCocktailsList = [];
            });
    },
});

export default cocktails.reducer;