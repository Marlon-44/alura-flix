import styled from "styled-components";
import styles from "./Form.module.css"
import InputText from "../InputText";
import InputSelect from "../InputSelect";
import TextArea from "../TextArea";
import Button from "../Button";
import { addVideo } from "../../ConexionApi/conexionApi";
import { useContext, useEffect, useState } from "react";
import { BtnSubmitContext } from "../../context/btnSubmitContext";

const FormTitle = styled.h3`
    color: #fff;
    font-size: 36px;
    border-top: 1px solid darkgray;
    border-bottom: 1px solid darkgray;
    padding: 16px 0;
`
const LongInputs = styled.div`
    display: flex;
    width: 100%;
    gap: 10px;
    justify-content: space-between;

    @media (max-width: 700px) {
    gap: 20px;
    flex-direction: column;
    width: 100%;
    
}
`
const ShortInputs = styled.div`
    display: flex;
    width: 80%;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: space-between;

    @media (max-width: 700px) {
        flex-direction: column;
        width: 100%;
        gap: 20px;
    }
`
const ButtonSection = styled.div`
    display: flex;
    gap: 30px;
    width: 40%;

    @media (max-width: 700px) {
        width: 100%;
        gap: 20px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
`



const Form = () => {
    const [formState, setFormState] = useState({
        titulo: "",
        categoria: "",
        url_imagen: "",
        url_video: "",
        descripcion: ""
    });

    const {submitState, setSubmitState} = useContext(BtnSubmitContext);

    const [errors, setErrors] = useState({
        titulo: false,
        categoria: false,
        url_imagen: false,
        url_video: false,
        descripcion: false
    });

    const handleChange = (field, value) => {
        setFormState((prev) => ({
            ...prev,
            [field]: value,
        }));
        // Limpiar errores en tiempo real
        if (value.trim() !== "") {
            setErrors((prev) => ({
                ...prev,
                [field]: false,
            }));
        }
    };

    const validateFields = () => {
        const newErrors = {
            titulo: formState.titulo.trim() === "",
            categoria: formState.categoria.trim() === "",
            url_imagen: formState.url_imagen.trim() === "",
            url_video: formState.url_video.trim() === "",
            descripcion: formState.descripcion.trim() === ""
        };
        setErrors(newErrors);
        // Retorna si hay errores
        return Object.values(newErrors).some((error) => error);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateFields()) {
            console.log("Errores en el formulario.");
            return;
        }

        const newVideo = { ...formState };
        await addVideo(newVideo);
        console.log("Nuevo Video: ", newVideo);
        setFormState({
            titulo: "",
            categoria: "",
            url_imagen: "",
            url_video: "",
            descripcion: ""
        });
        setSubmitState(!submitState);

    };

    const cleanForm = (e) => {
        console.log("Limpiando formulario",e);
        e.preventDefault();
        setFormState({
            titulo: "",
            categoria: "",
            url_imagen: "",
            url_video: "",
            descripcion: ""
        });
        setErrors({
            titulo: false,
            categoria: false,
            url_imagen: false,
            url_video: false,
            descripcion: false
        });
    };

    return (
        <div className={styles.register__form__container}>
            <form onSubmit={(e) => handleSubmit(e)}>
                <FormTitle>Crear Tarjeta</FormTitle>
                <LongInputs>
                    <InputText
                        label__="Titulo"
                        placeholder__={errors.titulo ? "El titulo es obligatorio" : "Ingrese el titulo"}
                        borderColor__={errors.titulo ? "red" : "darkgrey"}
                        value={formState.titulo}
                        onChange={(value) => handleChange("titulo", value)}
                    />

                    <InputSelect
                        value={formState.categoria}
                        placeholder__={errors.categoria ? "La categoria es obligatoria" : "Seleccione una categoría"}
                        borderColor__={errors.categoria ? "red" : "darkgrey"}
                        onChange={(value) => handleChange("categoria", value)}
                    />
                </LongInputs>
                <ShortInputs>
                    <InputText
                        label__="Imagen"
                        placeholder__={errors.url_imagen ? "El enlace de la imagen es obligatorio" : "Ingrese el enlace de la imagen"}
                        borderColor__={errors.url_imagen ? "red" : "darkgrey"}
                        value={formState.url_imagen}
                        onChange={(value) => handleChange("url_imagen", value)}
                    />
                    <InputText
                        label__="Video"
                        placeholder__={errors.url_video ? "El enlace del video es obligatorio" : "Ingrese el enlace del video"}
                        borderColor__={errors.url_video ? "red" : "darkgrey"}
                        value={formState.url_video}
                        onChange={(value) => handleChange("url_video", value)}
                    />
                </ShortInputs>
                <TextArea
                    label__="Descripcion"
                    placeholder__={errors.descripcion ? "Este campo es obligatorio" : "¿De qué se trata este vídeo?"}
                    borderColor__={errors.descripcion ? "red" : "darkgrey"}
                    value={formState.descripcion}
                    onChange={(value) => handleChange("descripcion", value)}
                />
                <ButtonSection>
                    <Button text__="Guardar" dark__ type="submit" />
                    <Button text__="Limpiar" type="button" onClick={(e) => cleanForm(e)} />
                </ButtonSection>
            </form>
            
        </div>
    );
};

export default Form;
