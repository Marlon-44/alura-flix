import styled from 'styled-components';
import styles from './Banner.module.css'

const Overlay = styled.div`
    top: 0;
    left: 0;
    width: 100vw;
    height: 600px;
    background-color: #0012338F;
    display: flex;
    justify-content: space-between;
    color: #fff;
    @media screen and (max-width: 900px){
        height: 300px;
    }`;

const Title = styled.h1`
    text-align: center;
    font-size: 48px;
    padding: 10px;
    font-weight: bold; /* Usa 'bold' o un número (ej. 700) */
    background-color: #6BD1FF;
    border-radius: 10px;
    display: inline-block;
    width: 320px; /* Falta el punto y coma */
    
    @media screen and (max-width: 900px) { 
        font-size: 24px;
        padding: 5px;
        width: 160px;
    }
    
`;


const Subtitle = styled.h2`
    font-size: 46px;
    font-weight: 200;
    @media screen and (max-width: 900px) {
        font-size: 24px;
        font-weight: 200;
}
`;

const Information = styled.p`
    font-size: 16px;
    line-height: 1.5;
    @media screen and (max-width: 900px) {
        font-size: 8px;
    }
`;
const ImgContainer = styled.div`
    position: absolute; 
    width: 50%;
    height: 300px;
    display: inline-block;
    border-radius: 15px; /* Borde redondeado del contenedor */
    box-shadow: inset 0 0 30px #6BD1FF; /* Sombra interna en el contenedor */
    overflow: hidden; /* Asegura que la sombra no se salga del contenedor */
`;


const Banner = () => {

    return (
        <div className={styles.banner} style={{ backgroundImage: `url("img/bannerBackground.jpg")` }}>
            <Overlay>
                <section>
                    <Title>FRONT END</Title>
                    <Subtitle>Challenge React</Subtitle>
                    <Information>Este challenge es una forma de aprendizaje.
                        Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos
                        los conocimientos adquiridos en la formación React.</Information>

                </section>
                <section>


                    <div className={styles.bannerImage} style={{ backgroundImage: `url("img/bannerImage.jpg")` }}>

                    </div>

                </section>

            </Overlay>
        </div>
    )
}

export default Banner;