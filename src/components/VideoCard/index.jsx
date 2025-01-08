import styled from 'styled-components'
import styles from './VideoCard.module.css'
import { deleteVideo } from '../../ConexionApi/conexionApi'
import { useContext, useEffect } from 'react'
import { VideosContext } from '../../context/videosContext'
import ModalZoom from '../ModalZoom'

const ButtonSection = styled.section`
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`


const LabelIcon = styled.p`
    color: #fff;
    font-size: 18px;
`


const VideoCard = ({ urlImagen, color, id , video}) => {
    const {selectedVideo, setSelectedVideo} = useContext(VideosContext);

    const handleDelete = async()=>{
        const sucess = await deleteVideo(id);
        if(sucess){
            alert('Video eliminado correctamente');
        } else {
            alert('Error al eliminar el video');
        }
    }

    return (
        <div className={styles.video__card} 
            style={{
                backgroundImage: `url(${urlImagen})`,
                backgroundSize: 'cover',
                border: `3px solid ${color}`,
                boxShadow: `inset 0 0 20px  ${color}`
            }}
            >

            <div className={styles.video__card__image}>

            </div>
            <section className={styles.video__card__buttons}
                style={{ borderTop: `3px solid ${color}`, boxShadow: `inset 0 0 20px  ${color}` }}>

                <ButtonSection className='delete__button__section' onClick={() => handleDelete(id)}>
                    <img src="img/deleteIcon.svg" alt="" id='edit' />
                    <LabelIcon>Borrar</LabelIcon>
                </ButtonSection>
                <ButtonSection className='edit__button__section'
                onClick={() => setSelectedVideo(video)}>
                    <img src="img/editIcon.svg" alt="" />
                    <LabelIcon>Editar</LabelIcon>
                </ButtonSection>
            </section>
        </div>
    )
}

export default VideoCard