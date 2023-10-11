import React, {useEffect} from "react";
import {useParams} from "react-router";
import {useAppDispatch, useAppSelector} from "../../store/cocktails-list";
import {getCocktail} from "../../store/cocktail-item/selectors";
import {fetchCocktailById} from "../../store/cocktail-item/thunk";
import {CocktailData} from "./types";
import {getIngredients, getMeasures} from "../../utils/functions";
import styles from "./index.module.css";

function CocktailCard() {
    const {id} = useParams<{ id: string | undefined }>()
    const dispatch = useAppDispatch()
    const cocktail = useAppSelector<CocktailData | null>(getCocktail);

    useEffect(() => {
        dispatch(fetchCocktailById(id))
    }, [dispatch, id]);

    if (!cocktail) {
        return null;
    }

    const {strAlcoholic, strCategory, strDrink, strDrinkThumb, strGlass, strInstructions} = cocktail;

    return (
        <div className={styles.wrapper}>
            <img className={styles.image} src={strDrinkThumb} alt={strDrink}/>
            <div className={styles.infoContainer}>
                <div className={styles.describe}>
                    <h4>Describe</h4>
                    <div className={styles.infoItem}>
                        <span>Type</span>
                        {strAlcoholic}
                    </div>
                    <div className={styles.infoItem}>
                        <span>Category</span>
                        {strCategory}
                    </div>
                    <div className={styles.infoItem}>
                        <span>Glass</span>
                        {strGlass}
                    </div>
                </div>
                <div className={styles.ingredientsContainer}>
                    <h4>Necessary ingredients</h4>
                    <div className={styles.ingredients}>
                        <div className={styles.ingredientsContainer}>
                            {getIngredients(cocktail).map((item) => {
                                return (
                                    <div key={item[0]}>
                                        {item[1]}
                                    </div>
                                )
                            })}
                        </div>
                        <div className={styles.measuresContainer}>
                            {getMeasures(cocktail).map((item) => {
                                return (
                                    <div key={item[0]}>
                                        {item[1]}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className={styles.instructionsContainer}>
                    <h4>Instructions</h4>
                    <div className={styles.instructions}>
                        {strInstructions}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CocktailCard;