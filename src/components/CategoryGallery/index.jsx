import { useContext } from "react";
import Category from "../Category";

import styles from "./CategoryGallery.module.css"
import { CategoryContext } from "../../context/categoryContext";
const CategoryGallery = ()=> {
    const {categories} = useContext(CategoryContext);

    return(<>
    <section className={styles.category__gallery}>
            {
                categories.map((category) =>(
                    
                    <Category key={category.id} name={category.name} color={category.color}/>
                ))
            }
        </section>
    </>
        
    )
}

export default CategoryGallery;