import { BrowserRouter, Routes, Route } from "react-router-dom"
import {Samsung} from "../pages/Samsung"
import { Dashboard } from "../pages/dashboard"
import { Configuracion } from "../pages/Configuracion"
import { Salir } from "../pages/Salir"


export function MyRoutes(){
    return(
        <>
                <Routes>a
                    <Route path="/" element = {
                        <Dashboard />
                    }/>
                    <Route path="/samsung" element = {
                        <Samsung />
                    }/>    
                    <Route path="/configuracion" element = {
                        <Configuracion/>
                    }/>    
                    <Route path="/salir" element = {
                        <Salir />
                    }/>    
                        
                </Routes>
        </>
    )
}