import {createContext} from "react";
import {FilterContext} from "../types";




export const FiltersContext = createContext<FilterContext | null>(null);
