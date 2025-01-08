import { useEffect, useState } from 'react';
import styles from './InputText.module.css'


const InputText = ({label__, placeholder__, borderColor__,value, onChange, }) => {

    return (
    <div className={styles.input__container}>
        <label>{label__}</label>
        <input type="text" 
        style={{border:`1px solid ${borderColor__}`}} 
        className={styles.input} 
        placeholder={placeholder__} 
        onChange={(e) => onChange(e.target.value)} 
        value={value}
        />

    </div>
    )
}

export default InputText;