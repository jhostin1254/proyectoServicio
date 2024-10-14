import { BrowserRouter } from 'react-router-dom'
import { MyRoutes } from './routers/Routes'
import { Sidebar } from './componentes/Sidebar'
import { useState } from 'react'
import './index.css'

export function App() {
    //para cambiar tema
    const [tema, setTema] = useState(true)
 
    //para cambiar de estilo al sidebar
    const [sidebarOpen, setSidebarOpen] = useState(true)

    return (
        <>
            <BrowserRouter>
                <main className={sidebarOpen ? 'sidebarBig' : 'sidebarLittle'}>
                    <Sidebar setTema={setTema} temas={tema} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                    
                    <MyRoutes />
                </main>

            </BrowserRouter>

        </>
    )
}