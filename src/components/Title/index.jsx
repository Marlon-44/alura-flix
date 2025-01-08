import styles from './Title.module.css'

const Title = ({BackgroundColor, text}) =>{

    return(
        <h1 className={styles.title} style={{backgroundColor: BackgroundColor}}>{text}</h1>
    )
}

export default Title;