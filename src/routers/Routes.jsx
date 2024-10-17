import { BrowserRouter, Routes, Route } from "react-router-dom"
import {Samsung} from "../pages/Samsung"
import { Dashboard } from "../pages/dashboard"
import { Configuracion } from "../pages/Configuracion"
import { Salir } from "../pages/Salir"
import {Ventas} from "../pages/Ventas"


export function MyRoutes(){
    return(
        <>
                <Routes>
                    <Route path="/" element = {
                        <Dashboard />
                    }/>
                     <Route path="/ventas" element = {
                        <Ventas/>
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