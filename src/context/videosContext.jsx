import { createContext, useContext, useEffect, useState } from "react";
import videosDb from "../data/db.json";
import { getVideos } from "../ConexionApi/conexionApi";
import { use } from "react";
import { BtnSubmitContext } from "./btnSubmitContext";

export const VideosContext = createContext();

export const VideosProvider = ({children}) => {
    const [videos, setVideos] =useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const {submitState} = useContext(BtnSubmitContext);
    const {deleteState} = useContext(BtnSubmitContext);
    useEffect(() =>{
        getVideos().then((data) => {
            setVideos(data);
        });
    },[submitState, deleteState]);
    

    return(
        <VideosContext.Provider value={{videos, setVideos, selectedVideo, setSelectedVideo}}>
            {children}
        </VideosContext.Provider>
    )
}
