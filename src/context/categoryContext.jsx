import { Children, createContext, useState } from "react";

export const CategoryContext  = createContext();

export const CategoryProvider = ({children}) =>{

    const [categories, setCategories] = useState([
        {id:1,name: "FRONT END",color: "#6BD1FF"},
        {id:2,name: "BACK END", color: "#00C86F"},
        {id:3,name: "INNOVACION Y GESTION", color: "#FFBA05"}
    ])

    return(
        <CategoryContext.Provider value={{categories, setCategories}}>
            {children}
        </CategoryContext.Provider>
    )
}