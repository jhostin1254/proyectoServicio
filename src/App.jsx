import { BrowserRouter } from 'react-router-dom'
import { MyRoutes } from './routers/Routes'
import { Sidebar } from './componentes/Sidebar'
import { createContext, useContext, useState } from 'react'
import './index.css'

const sidebarStateContex = createContext();

export function useSidebarStateContex(){
   return useContext(sidebarStateContex);
}

export function App() {

    const [sidebarOpen, setSidebarOpen] = useState(true)


    return (
        <>
<<<<<<< HEAD
           <sidebarStateContex.Provider value={{sidebarOpen, setSidebarOpen}}>
=======
            <sidebarStateContex.Provider value={{sidebarOpen, setSidebarOpen}}>
>>>>>>> eed88539a49d9e7df706cbcaa214386498c92557
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