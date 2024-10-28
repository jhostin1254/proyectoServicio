import { BrowserRouter } from 'react-router-dom'
import { MyRoutes } from './routers/Routes'
import { Sidebar } from './componentes/Sidebar'
import { createContext, useContext, useState } from 'react'
import './index.css'
import { Navbar } from 'react-bootstrap'

const sidebarStateContex = createContext();

export function useSidebarStateContex(){
   return useContext(sidebarStateContex);
}

export function App() {

    const [sidebarOpen, setSidebarOpen] = useState(true)


    return (
        <>
           <sidebarStateContex.Provider value={{sidebarOpen, setSidebarOpen}}>
                <BrowserRouter>
                    <div>
                        <main className={sidebarOpen ? 'sidebarBig' : 'sidebarLittle'}>
                            <Sidebar />
                            <MyRoutes />
                        </main>
                    </div>
                </BrowserRouter>

            </sidebarStateContex.Provider>


        </>
    )
}