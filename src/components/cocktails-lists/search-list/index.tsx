import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../../store/search-by-ingredient-cocktails-list";
import {
    getSearchByIngredientsCocktailsError,
    getSearchByIngredientsCocktailsList
} from "../../../store/search-by-ingredient-cocktails-list/selectors";
import {useParams} from "react-router";
import {fetchCocktailsByIngredient} from "../../../store/search-by-ingredient-cocktails-list/thunk";
import {Link} from "react-router-dom";
import CocktailCell from "../../cocktail-cell";
import {SearchCocktailsData} from "./types";
import styles from "../index.module.css";

function SearchList() {
    const {ingredient} = useParams<{ ingredient: string | undefined }>()
    const dispatch = useAppDispatch();
    const searchByIngredientList = useAppSelector(getSearchByIngredientsCocktailsList);
    const hasError = useAppSelector(getSearchByIngredientsCocktailsError);

    useEffect(() => {
        dispatch(fetchCocktailsByIngredient(ingredient));
    }, [dispatch, ingredient]);

    if (hasError || !searchByIngredientList) {
        return null;
    }

    return (
        <div className={styles.wrapper}>
            {searchByIngredientList?.map((item: SearchCocktailsData) => {
                return (
                    <Link className={styles.link} key={item.idDrink} to={`${item.idDrink}`}>
                        <CocktailCell
                            strDrink={item.strDrink}
                            strDrinkThumb={item.strDrinkThumb}
                        />
                    </Link>
                )
            })}
        </div>
    )
}

export default SearchList;