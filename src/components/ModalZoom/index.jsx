
import { useContext } from 'react';
import styles from './ModalZoom.module.css'
import { VideosContext } from '../../context/videosContext';
import EditForm from '../EditForm';
import styled from 'styled-components';

const BtnClose = styled.button`
    align-self: flex-end;
    border-radius: 50%;
    padding: 20px;
`
const CloseIcon = styled.img`
    height: 35px;`

const ModalZoom = ({ video }) => {
    const { setSelectedVideo } = useContext(VideosContext)
    if (!!video) {
        console.log('video en modal zoom', video.titulo);
        return (<>
            <div className={styles.overlay}></div>
            <dialog open={!!video}>
                <BtnClose onClick={() => setSelectedVideo(null)}><CloseIcon className='btn__close' src="img/cancel.png" alt="" /></BtnClose>

                <EditForm method='dialog'/>
            </dialog>

        </>

        )
    } else {
        return (<></>)
    }


}

export default ModalZoom;