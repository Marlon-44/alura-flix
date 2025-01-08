import { Link } from "react-router-dom";
import styled from "styled-components";
import styles from './Footer.module.css'

const FooterSection = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000;
    padding: 30px 0;
    border-top: 3px solid #2271d1;
    box-shadow: 0px 4px 15px #2271d1;
    
    @media screen and (max-width: 480px) {
    padding: 30px;
    gap: 60px;
}
    
    `

const IconLabel = styled.h3`
    color:  #2271d1
`
const AluraIcon = styled.img`
    @media screen and (max-width: 480px) {
        display: none;
    }
`
const Footer = () => {
    return (
        <FooterSection >
            <AluraIcon src="img/logoIcon.png" alt="" />
            <Link to="/" 
                className={styles.homeBtn__container}>
                <img src="img/homeIcon.svg" alt="" />
                <IconLabel>Home</IconLabel>
            </Link>
            <Link className={styles.newBtn__container} 
                to="/nuevoVideo" >
                <img src="img/newIcon.svg" alt="" />
            </Link>
        </FooterSection>
    )
}

export default Footer;