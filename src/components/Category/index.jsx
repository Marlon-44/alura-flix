import Title from "../Title";
import VideoCard from "../VideoCard";
import styles from "./Category.module.css";
import { useContext, useEffect, useState } from "react";
import { VideosContext } from "../../context/videosContext";
const Category = ({ name, color }) => {
    const { videos } = useContext(VideosContext);
    return (<>
        <Title text={name} BackgroundColor={color}></Title>
        <section className={styles.videos__list}>
            {
                videos.map((video) => {
                    if (video.categoria === name) {
                        return <VideoCard key={video.id}
                            urlImagen={video.url_imagen}
                            color={color}
                            titulo={video.titulo}
                            id={video.id}
                            video={video}>

                        </VideoCard>
                    }
                })
            }
        </section>

    </>

    )
}

export default Category;