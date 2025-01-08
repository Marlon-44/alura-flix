import React, { useState } from "react"; 
import { Link } from "react-router-dom";
import styles from './Header.module.css'

const Header = () =>{
    const [homeActive, setHomeActive] = useState(true)
    const [nuevoVideoActive, setNuevoVideoActive] = useState(false)

    const handleChangeHome = () =>{
        setHomeActive(true)
        setNuevoVideoActive(false)
    }
    const handleChangeNuevoVideo = () =>{
        setNuevoVideoActive(true)
        setHomeActive(false)
        
    }

    return(
        <header className={styles.header}>
            <Link to="/"><img src="img/logoIcon.png"></img></Link>
            <nav className={styles.header__nav}>
                <Link className={`${styles.nav__button} ${homeActive ? styles.dark:''}`} 
                    to="/"
                    onClick={() => handleChangeHome()}>Home</Link>
                <Link className={`${styles.nav__button} ${nuevoVideoActive ? styles.dark: '' }`} 
                to="/nuevoVideo"
                onClick={() => handleChangeNuevoVideo()}>Nuevo Video</Link>
            </nav>
            
            
        </header>
    )
}

export default Header;