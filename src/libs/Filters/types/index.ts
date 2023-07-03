import {QueryStrategyType} from "../helpers";
import {useState} from "react";

export type getQueryCallbackType = (strategy: QueryStrategyType) => string;
export interface FilterContext {
    getters: Map<string,getQueryCallbackType>;
    submit: () => void;
            reset: () => void;
}

export type QueryStringContextType = ReturnType<typeof useState<string>> | null;