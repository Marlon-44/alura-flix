import styles from './ModalEditCard.module.css'

const ModalEditCard = () => {
    return (
        <dialog className={styles.modal__edit__card}>
            <h2>Editando tarjeta</h2>
            <button onClick={() => console.log('Cerrando modal')}>Cerrar</button>
        </dialog>
    )
}

export default ModalEditCard;