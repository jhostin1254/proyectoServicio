import React, { useState, useContext } from "react"



const SidebarStateContext = React.createContext();
const SidebarTogleContext =  React.createContext();

export function useSidebarStateContext(){
    return useContext(SidebarStateContext);
}

export function useSidebarTogleContext(){
    return useContext(SidebarTogleContext)
}

export function SidebarState({Children}){

    const [sidebarState, setSidebarState] = useState(false)

    const clickButtomSideBar = () => {
        setSidebarState(!sidebarState)
    }


    return(
        <SidebarStateContext.Provider value={sidebarState}>
            <SidebarTogleContext.Provider value={clickButtomSideBar}>
                {Children}
            </SidebarTogleContext.Provider>
        </SidebarStateContext.Provider>

    )
}