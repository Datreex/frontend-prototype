import {getQueryCallbackType} from "../types";
import {useQureyString} from "../hooks";
import {PropsWithChildren, useCallback, useMemo} from "react";
import {queryStrategy} from "../helpers";
import {FiltersContext} from "../contexts";

export const FilterSet = ({children}: PropsWithChildren) => {
    const [, setQueryString] = useQureyString();
    const getters = useMemo(() => new Map<string, getQueryCallbackType>(), []);

    const submit = useCallback(() => {
        setQueryString(Array.from(getters.values()).map(
            (callback) => callback(queryStrategy)
        ).join("&"));
    }, [getters, setQueryString]);

    const reset = useCallback(() => {
        /* Todo: in the future this may be form.reset() or it may include a more complex reset
        *   but at the moment let's just keep an empty implementation until we need it */
    }, []);
    return <FiltersContext.Provider value={{getters, submit, reset}} children={children}/>;
}