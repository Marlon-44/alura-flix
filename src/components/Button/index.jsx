import styles from './Button.module.css'

const Button = ({ text__, dark__ , onClick}) => {
    let color__ = ''
    let boxShadow__ = '';
    let background__ = ''

    if (dark__ === true) {
        color__ = '#2271D1'
        boxShadow__ = `inset 0 0 15px #2271D1`
        background__ = '#000'
    } else {
        color__ = '#fff'
        boxShadow__=' 0 0 20px transparent'
        background__ = 'transparent'

    }
    return (
        <button style={{
            color: color__,
            border: `3px solid ${color__}`,
            boxShadow: boxShadow__,
            backgroundColor: background__
            }}
            className={styles.btn}
            onClick={onClick}>
            {text__}
            
        </button>
    )
}

export default Button;