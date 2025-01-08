import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/inicio";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NuevoVideo from "./pages/nuevoVideo";

const AppRoutes = () =>{
    
    return(
            <BrowserRouter>
            
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/nuevoVideo" element={<NuevoVideo/>}></Route>
                </Routes>
                
                <Footer/>
            </BrowserRouter>
        )
}

export default AppRoutes;