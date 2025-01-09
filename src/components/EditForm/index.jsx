import styled from 'styled-components'
import styles from './EditForm.module.css'
import InputText from '../InputText'
import InputSelect from '../InputSelect'
import TextArea from '../TextArea'
import Button from '../Button'
import { useContext, useState } from 'react'
import { VideosContext } from '../../context/videosContext'
import { updateVideo } from '../../ConexionApi/conexionApi'
import { BtnSubmitContext } from '../../context/btnSubmitContext'
const FormTitle = styled.h3`
    color: #2271D1;
    font-size: 36px;
    padding: 16px 0;
`
const LongInputs = styled.div`
    display: flex;
    width: 100%;
    gap: 10px;
    justify-content: space-between;
    gap: 20px;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
`
const ShortInputs = styled.div`
    display: flex;
    width: 80%;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    gap: 20px;
    @media (max-width: 480px) {
    
        
        justify-content: center;
        align-items: center;
        }
    
`
const ButtonSection = styled.div`
    display: flex;
    gap: 30px;
    width: 40%;
    width: 100%;
    justify-content: space-between;
    
    @media screen and (max-width: 480px) {
    
        flex-direction: column;
        justify-content: center;
        align-items: center;}
    
`

const EditForm = () => {
    const {selectedVideo, setSelectedVideo } = useContext(VideosContext);
    const [editFormState, setEditFormState] = useState({
        "titulo": selectedVideo.titulo,
        "categoria": selectedVideo.categoria,
        "url_imagen": selectedVideo.url_imagen,
        "url_video": selectedVideo.url_video,
        "descripcion": selectedVideo.descripcion
    })

    const {submitState, setSubmitState} = useContext(BtnSubmitContext);

    const [errors, setErrors] = useState({
        titulo: false,
        categoria: false,
        url_imagen: false,
        url_video: false,
        descripcion: false
    });

    const handleChange = (field, value) => {
        setEditFormState((prev) => ({
            ...prev,
            [field]: value,
        }));
        if (value.trim() !== "") {
            setErrors((prev) => ({
                ...prev,
                [field]: false,
            }));
        }
    }

    const validateFields = () => {
        const newErrors = {
            titulo: editFormState.titulo.trim() === "",
            categoria: editFormState.categoria.trim() === "",
            url_imagen: editFormState.url_imagen.trim() === "",
            url_video: editFormState.url_video.trim() === "",
            descripcion: editFormState.descripcion.trim() === ""
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
        const updatedVideo = editFormState;
        await updateVideo(selectedVideo.id, updatedVideo);
        setSelectedVideo(null);
        setSubmitState(!submitState);
        console.log('Video Editado: ', updatedVideo);
    }
    const cleanForm = (e) => {
        console.log("Limpiando formulario", e);
        e.preventDefault();
        setEditFormState({
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
    }

    return (
        <div className={styles.edit__form__container}>
            <form onSubmit={(e) => handleSubmit(e)}>
                <FormTitle>EDITAR CARD</FormTitle>
                <LongInputs>

                    <InputText label__='Titulo'
                        placeholder__={errors.titulo ? "El titulo es obligatorio" : "Ingrese el titulo"}
                        borderColor__={errors.titulo ? "red" : '#2271D1'}
                        value={editFormState.titulo}
                        onChange={(value) => handleChange('titulo', value)}
                    />

                    <InputSelect borderColor__={errors.categoria ? "red" : "#2271D1"}
                        placeholder__={errors.categoria ? "La categoria es obligatoria" : "Seleccione una categoría"}
                        value={editFormState.categoria}
                        onChange={(value) => handleChange('categoria', value)} />
                </LongInputs>
                <ShortInputs>
                    <InputText label__='Imagen'
                        placeholder__={errors.url_imagen ? "El enlace de la imagen es obligatorio" : "Ingrese el enlace de la imagen"}
                        borderColor__={errors.url_imagen ? "red" : "#2271D1"}
                        value={editFormState.url_imagen}
                        onChange={(value) => handleChange('url_imagen', value)}
                    />
                    <InputText label__='Video'
                        placeholder__={errors.url_video ? "El enlace del video es obligatorio" : "Ingrese el enlace del video"}
                        borderColor__={errors.url_video ? "red" : "#2271D1"}
                        value={editFormState.url_video}
                        onChange={(value) => handleChange('url_video', value)}
                    />
                </ShortInputs>
                <TextArea label__='Descripcion'
                    placeholder__={errors.descripcion ? "Este campo es obligatorio" : "¿De qué se trata este vídeo?"}
                    borderColor__={errors.descripcion ? "red" : "#2271D1"}
                    value={editFormState.descripcion}
                    onChange={(value) => handleChange('descripcion', value)}
                    
                />

                <ButtonSection>
                    <Button text__='Guardar'
                        dark__
                        type='submit' />
                    <Button text__='Limpiar'
                        type='button'
                        onClick={(e) => cleanForm(e)}
                    />
                </ButtonSection>


            </form>
        </div>
    )

}

export default EditForm;