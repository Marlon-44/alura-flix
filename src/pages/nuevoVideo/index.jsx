import React from "react";
import styles from "./nuevoVideo.module.css"
import Form from "../../components/Form";


const NuevoVideo = () =>{
    return(<>

        <section className={styles.cabecera}>
            <h1>NUEVO VIDEO</h1>
            <p>Complete el formulario para crear una nueva tarjeta de video</p>
        </section>
        
        <section>
            <Form/>
        </section>
        
    </>

    
)
}

export default NuevoVideo;