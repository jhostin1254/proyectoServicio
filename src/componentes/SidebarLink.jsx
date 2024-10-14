import { NavLink } from "react-router-dom";
import { IoIosPhonePortrait } from "react-icons/io";
import { AiTwotoneDashboard } from "react-icons/ai";
import { BsRadioactive, BsGear, BsPower } from "react-icons/bs";


export function Sidebarlink({ direccion, nombre, nombreIcon, sidebarOpen }) {

    const linkLabelState = sidebarOpen ? 'linkLabelOpen' : 'linkLabelClose'
    const linkIconState = sidebarOpen ? 'linkIconOpen' : 'linkIconClose'

    return (
        //si el navlink esta activo le agregamos active
        <NavLink to={direccion} className={({ isActive }) => `linkSidebar${isActive ? ` active` : ``}`}>
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
            return <IoIosPhonePortrait/>;
        case 'dashboard':
            return <AiTwotoneDashboard />;
        case 'configuracion':
            return <BsGear />;
        case 'salir':
            return <BsPower />;
        default:
            return <BsRadioactive />;
    }
};
