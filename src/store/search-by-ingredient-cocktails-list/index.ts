import reducer from "./search-by-ingredient-cocktails-slice";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, ApplicationState} from "../types";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<ApplicationState> = useSelector;

export default reducer;