import { createContext, useEffect, useState } from "react";
import videosDb from "../data/db.json";
import { getVideos } from "../ConexionApi/conexionApi";
import { use } from "react";
export const VideosContext = createContext();

export const VideosProvider = ({children}) => {
    const [videos, setVideos] =useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    
    useEffect(() =>{
        getVideos().then((data) => {
            setVideos(data);
        });
    },[]);
    

    return(
        <VideosContext.Provider value={{videos, setVideos, selectedVideo, setSelectedVideo}}>
            {children}
        </VideosContext.Provider>
    )
}
