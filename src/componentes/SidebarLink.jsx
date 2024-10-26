import { NavLink } from "react-router-dom";
import { BsRadioactive, BsGear, BsPower } from "react-icons/bs";
import { LuLayoutDashboard } from "react-icons/lu";
import { TbCashRegister } from "react-icons/tb";
import { IoArchiveOutline } from "react-icons/io5";
import { useState } from 'react';
import { Row} from "react-bootstrap";
import Collapse from 'react-bootstrap/Collapse';
import { useSidebarStateContex } from "../App";


const LinkIcon = ({ nombreIcon }) => {
    switch (nombreIcon) {
        case 'pantalla':
            return <IoArchiveOutline />
        case 'dashboard':
            return <LuLayoutDashboard />;
        case 'configuracion':
            return <BsGear />;
        case 'salir':
            return <BsPower />;
        case 'ventas':
            return <TbCashRegister />;
        default:
            return <BsRadioactive />;
    }
};

export function Sidebarlink({ direccion, nombre, nombreIcon}) {

    const sidebarOpen = useSidebarStateContex().sidebarOpen;

    const linkLabelState = sidebarOpen ? 'linkLabelOpen' : 'linkLabelClose'
    const linkIconState = sidebarOpen ? 'linkIconOpen' : 'linkIconClose'

    return (
        //si el navlink esta activo le agregamos active
        <NavLink to={direccion} className={({ isActive }) => `linkSidebar${isActive ? ` actives` : ` `}`}>
             <div className={linkIconState}>
                    <LinkIcon nombreIcon={nombreIcon} />
                </div>
                <div className={linkLabelState}>
                    <span>{nombre}</span>
                </div>
        </NavLink>
    )
}

export function SidebarlinkCollapse({nombre, nombreIcon }) {

    const sidebarOpen = useSidebarStateContex().sidebarOpen;

    const [open, setOpen] = useState(false);
    const linkLabelState = sidebarOpen ? 'linkLabelOpen' : 'linkLabelClose'
    const linkIconState = sidebarOpen ? 'linkIconOpen' : 'linkIconClose'


    return (
        //si el navlink esta activo le agregamos active
        <>
            <div onClick={() => setOpen(!open)} className={`linkSidebar ${open?` activeState`:` `}`}>
                <div className={linkIconState}>
                    <LinkIcon nombreIcon={nombreIcon} />
                </div>
                <div className={linkLabelState}>
                    <span>{nombre}</span>
                </div>
            </div>
            <Collapse in={open}>
                <div className="sidebarCollapseOpen">
                <Row>
                    <span className='spanSideabarCollapse'>Marcas:</span>
                </Row>
                    <NavLink to="samsung" className={({ isActive }) => `linkSidebar${isActive ? ` active` : ` `}`}>
                        <div className={linkLabelState}>
                            <span>Samsung</span>
                        </div>
                    </NavLink>
                    <NavLink to="huawey" className={({ isActive }) => `linkSidebar${isActive ? ` active` : ` `}`}>
                        <div className={linkLabelState}>
                            <span>Huawey</span>
                        </div>
                    </NavLink> 
                    <NavLink to="Oppo" className={({ isActive }) => `linkSidebar${isActive ? ` active` : ` `}`}>
                        <div className={linkLabelState}>
                            <span>Oppo</span>
                        </div>
                    </NavLink>
                    <NavLink to="xiaomi" className={({ isActive }) => `linkSidebar${isActive ? ` active` : ` `}`}>
                        <div className={linkLabelState}>
                            <span>Xiaomi</span>
                        </div>
                    </NavLink>
                    
                    
                </div>
            </Collapse>
        </>
    )
}

