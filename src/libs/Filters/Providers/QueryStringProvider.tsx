import {PropsWithChildren, useState} from "react";
import {QueryStringContext} from "../contexts";

export const QueryStringProvider = ({children}: PropsWithChildren) => {
    const stateContext = useState<string | undefined>("");
    return (
        <QueryStringContext.Provider value={stateContext}>
            {children}
        </QueryStringContext.Provider>);
}