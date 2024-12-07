import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Row } from "react-bootstrap";
import Collapse from "react-bootstrap/Collapse";
import { LinkIcon } from "../../assets/Icon";
import { useSidebarContext } from "../../context/SidebarContext";

export function SidebarlinkCollapse({ nombre, nombreIcon }) {
  const { isOpen } = useSidebarContext();

  const [open, setOpen] = useState(false);

  const inventaryPage = ["Samsung", "Huawei", "Oppo", "Xiaomi"];

  return (
    <>
      <div
        onClick={() => {
          setOpen(!open);
        }}
        className={`linkSidebar ${open ? ` activeState` : ` `}`}
      >
        <div className={isOpen ? "linkIconOpen" : "linkIconClose"}>
          <LinkIcon nombreIcon={nombreIcon} />
        </div>

        <div className={isOpen ? "linkLabelOpen" : "linkLabelClose"}>
          <span>{nombre}</span>
        </div>
      </div>

      <Collapse in={open} className={`${isOpen ? `` : `close`}`}>
        <div
          className={isOpen ? "sidebarCollapseOpen" : "sidebarCollapseClose"}
        >
          <Row>
            <span className="spanSideabarCollapse">Marcas:</span>
          </Row>
          {inventaryPage?.map((page) => (
            <NavLink
              to={`inventario/${page}`}
              key={page}
              className={({ isActive }) =>
                `linkSidebar${isActive ? ` active` : ` `}`
              }
            >
              <div>
                <span>{page}</span>
              </div>
            </NavLink>
          ))}
        </div>
      </Collapse>
    </>
  );
}
