import { NavLink } from "react-router-dom";
import { useState } from 'react';
import { Row } from "react-bootstrap";
import Collapse from 'react-bootstrap/Collapse';
import { useSidebarStateContex } from "../App";
import { LinkIcon } from "../assets/Icon";

export function SidebarlinkCollapse({ nombre, nombreIcon }) {

    const sidebarOpen = useSidebarStateContex().sidebarOpen;
    const [open, setOpen] = useState(false);
    
    
    return (
        <>
            <div onClick={() => {setOpen(!open)}} className={`linkSidebar ${open ? ` activeState` : ` `}`}>
                <div className={sidebarOpen ? 'linkIconOpen' : 'linkIconClose'}>
                    <LinkIcon nombreIcon={nombreIcon} />
                </div>
                <div className={sidebarOpen ? 'linkLabelOpen' : 'linkLabelClose'}>
                    <span>{nombre}</span>
                </div>
            </div>
            <Collapse in={open} className={`${sidebarOpen? ``: `close`}`}>
                <div className={sidebarOpen ? 'sidebarCollapseOpen': 'sidebarCollapseClose'}>
                    <Row>
                        <span className='spanSideabarCollapse'>Marcas:</span>
                    </Row>
                    <NavLink to="samsung" className={({ isActive }) => `linkSidebar${isActive ? ` active` : ` `}`}>
                        <div >
                            <span>Samsung</span>
                        </div>
                    </NavLink>
                    <NavLink to="huawey" className={({ isActive }) => `linkSidebar${isActive ? ` active` : ` `}`}>
                        <div >
                            <span>Huawey</span>
                        </div>
                    </NavLink>
                    <NavLink to="Oppo" className={({ isActive }) => `linkSidebar${isActive ? ` active` : ` `}`}>
                        <div >
                            <span>Oppo</span>
                        </div>
                    </NavLink>
                    <NavLink to="xiaomi" className={({ isActive }) => `linkSidebar${isActive ? ` active` : ` `}`}>
                        <div >
                            <span>Xiaomi</span>
                        </div>
                    </NavLink>
                </div>
            </Collapse>
        </>
    )
}


