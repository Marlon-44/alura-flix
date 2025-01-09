import { createContext, useState } from "react";



export const BtnSubmitContext = createContext();

export const BtnSubmitProvider = ({children}) => {
    const [submitState, setSubmitState] = useState(false);

    return(
        <BtnSubmitContext.Provider value={{submitState, setSubmitState}}>
            {children}
        </BtnSubmitContext.Provider>
    )
}
