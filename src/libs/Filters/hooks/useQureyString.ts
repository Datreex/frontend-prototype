import {useContext} from "react";

import {QueryStringContext} from "../contexts";

export const useQureyString=()=>{
    const context = useContext(QueryStringContext);
    if(context === null)
        throw new Error("useQureyString must be used within a FilterQueryStringContextProvider");
    return context;
}
