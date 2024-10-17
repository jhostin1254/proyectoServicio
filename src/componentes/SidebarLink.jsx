import { NavLink } from "react-router-dom";
import { BsRadioactive, BsGear, BsPower } from "react-icons/bs";
import { LuLayoutDashboard } from "react-icons/lu";
import { TbCashRegister } from "react-icons/tb";
import { IoArchiveOutline } from "react-icons/io5";


export function Sidebarlink({ direccion, nombre, nombreIcon, sidebarOpen }) {

    const linkLabelState = sidebarOpen ? 'linkLabelOpen' : 'linkLabelClose'
    const linkIconState = sidebarOpen ? 'linkIconOpen' : 'linkIconClose'

    return (
        //si el navlink esta activo le agregamos active
        <NavLink to={direccion} className={({ isActive }) => `linkSidebar${isActive ? ` active` : ` `}`}>
            <div className={linkIconState}>
                <LinkIcon nombreIcon={nombreIcon} />
            </div>
            <div className={linkLabelState}>
                <span>{nombre}</span>
            </div>
        </NavLink>
    )
}

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
        case'ventas':
            return <TbCashRegister />            ;
        default:
            return <BsRadioactive />;
    }
};
