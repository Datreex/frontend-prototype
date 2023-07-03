import {useContext, useEffect} from "react";
import {FiltersContext} from "../contexts";
import {getQueryCallbackType} from "../types";


export const useFilter = (name: string, callback: getQueryCallbackType) => {
    const context = useContext(FiltersContext);
    // error checking
    if (!context) {
        throw new Error("useFilter must be used within a FilterSet");
    }

    // register the callback and cleanup when the component unmounts
    useEffect(() => {
        context.getters.set(name, callback);
        return () => {
            context.getters.delete(name);
        }
    }, [callback, context, name]);
}


