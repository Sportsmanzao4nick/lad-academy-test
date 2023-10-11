import React from "react";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import RootLayout from "./root-layout";
import MainPage from "../../pages/main-page";
import AlcoholicCocktailsPage from "../../pages/alcoholic-cocktails-page";
import CocktailPage from "../../pages/cocktail-page";
import NonAlcoholicCocktailsPage from "../../pages/non-alcoholic-cocktails-page";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="lad-academy-test" element={<RootLayout/>}>
            <Route index element={<MainPage/>}/>
            <Route path="alcoholic" element={<AlcoholicCocktailsPage/>}/>
            <Route path="non_alcoholic" element={<NonAlcoholicCocktailsPage/>}/>
            <Route path="alcoholic/:id" element={<CocktailPage/>}/>
            <Route path="non_alcoholic/:id" element={<CocktailPage/>}/>
        </Route>
    )
);

function RoutesComp() {
    return <RouterProvider router={router}/>
}

export default RoutesComp;