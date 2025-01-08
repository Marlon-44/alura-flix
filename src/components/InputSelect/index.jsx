import { useContext } from 'react';
import styles from './InputSelect.module.css'
import { CategoryContext } from '../../context/categoryContext';


const InputSelect = ({value, onChange, borderColor__}) =>{
    
    const {categories} = useContext(CategoryContext);
    return(
        <div className={styles.input__container}>
            <label>Categorias</label>
            <select className={styles.input}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            style={{border: `1px solid ${borderColor__}`}}
            >
                <option value="" defaultValue="" hidden disabled>SELECCIONA UNA CATEGORIA</option>
                {
                    categories.map((category) => (
                        <option key={category.id} value={category.name}>
                            {category.name}
                        </option>
                    ))
                }
                
            </select>
        </div>
    )
}

export default InputSelect;