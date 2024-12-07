import { NavLink } from "react-router-dom";
import { LinkIcon } from "../../assets/Icon";
import { useSidebarContext } from "../../context/SidebarContext";

export function Sidebarlink({ direccion, nombre, nombreIcon }) {
  const { isOpen } = useSidebarContext();

  return (
    <NavLink
      to={direccion}
      className={({ isActive }) => `linkSidebar${isActive ? ` actives` : ` `}`}
    >
      <div className={isOpen ? "linkIconOpen" : "linkIconClose"}>
        <LinkIcon nombreIcon={nombreIcon} />
      </div>
      <div className={isOpen ? "linkLabelOpen" : "linkLabelClose"}>
        <span>{nombre}</span>
      </div>
    </NavLink>
  );
}
