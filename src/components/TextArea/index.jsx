import { useRef } from 'react';
import styles from './TextArea.module.css'

const TextArea = ({ label__, placeholder__, borderColor__, value, onChange}) => {
    let widthSize =''

    
    return (<div className={styles.TA_container} >
        <label>{label__}</label>
        <textarea name="description"
            style={{ border: `1px solid ${borderColor__}`}}
            id="description"
            cols="30"
            rows="10"
            className={styles.description}
            placeholder={placeholder__}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            >

        </textarea>
    </div>)

}

export default TextArea;