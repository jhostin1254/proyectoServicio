import { NavLink } from "react-router-dom";
import { useSidebarStateContex } from "../App";
import { LinkIcon } from "../assets/Icon";

export function Sidebarlink({ direccion, nombre, nombreIcon }) {

    const sidebarOpen = useSidebarStateContex().sidebarOpen;

    return (
        <NavLink to={direccion} className={({ isActive }) => `linkSidebar${isActive ? ` actives` : ` `}`}>
            <div className={sidebarOpen ? 'linkIconOpen' : 'linkIconClose'}>
                <LinkIcon nombreIcon={nombreIcon} />
            </div>
            <div className={sidebarOpen ? 'linkLabelOpen' : 'linkLabelClose'}>
                <span>{nombre}</span>
            </div>
        </NavLink>
    )
}