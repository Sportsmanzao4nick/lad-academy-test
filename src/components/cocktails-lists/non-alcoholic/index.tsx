import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../../store/cocktails-list";
import {Link} from "react-router-dom";
import {fetchNonAlcoholCocktails} from "../../../store/cocktails-list/thunk";
import {getCocktailsError, getNonAlcoholicCocktails} from "../../../store/cocktails-list/selectors";
import {CocktailsData} from "./types";
import CocktailCell from "../../cocktail-cell";
import styles from "../index.module.css";

function NonAlcoholicList() {
    const dispatch = useAppDispatch();
    const nonAlcoholicCocktailsList = useAppSelector(getNonAlcoholicCocktails);
    const hasError = useAppSelector(getCocktailsError);

    useEffect(() => {
        dispatch(fetchNonAlcoholCocktails());
    }, [dispatch]);

    if (hasError) {
        return <h2>An error has occurred, please try again</h2>
    }

    return (
        <div className={styles.wrapper}>
            {nonAlcoholicCocktailsList?.map((item: CocktailsData) => {
                return (
                    <Link className={styles.link} key={item.idDrink} to={`${item.idDrink}`}>
                        <CocktailCell
                            strDrink={item.strDrink}
                            strDrinkThumb={item.strDrinkThumb}
                        />
                    </Link>
                )
            })
            }
        </div>
    )
}

export default NonAlcoholicList;