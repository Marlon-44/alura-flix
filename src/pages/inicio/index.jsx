import styled from "styled-components";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import "./index.modules.css";
import Footer from "../../components/Footer";
import CategoryGallery from "../../components/CategoryGallery";
import ModalZoom from "../../components/ModalZoom";
import { useContext, useEffect, useState } from "react";
import { VideosContext } from "../../context/videosContext";
import { use } from "react";



const Home = () =>{
    const {selectedVideo} = useContext(VideosContext);
    return(<>
        
        <Banner/>
        <ModalZoom video={selectedVideo}/>
        <CategoryGallery/>
        
    </>
        
    )
}

export default Home;