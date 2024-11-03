import {Routes, Route } from "react-router-dom"
import {Samsung} from "../pages/inventarioPages/Samsung"
import { Huawey } from "../pages/inventarioPages/Huawei"
import {Oppo} from "../pages/inventarioPages/Oppo"
import {Xiaomi} from "../pages/inventarioPages/Xiaomi"
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
                    <Route path="/huawey" element = {
                        <Huawey />
                    }/>   
                    <Route path="/Oppo" element = {
                        <Oppo />
                    }/>   
                    <Route path="/xiaomi" element = {
                        <Xiaomi />
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