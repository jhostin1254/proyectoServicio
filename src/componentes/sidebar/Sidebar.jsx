import { Container, Row } from "react-bootstrap";
import { AiOutlineAndroid } from "react-icons/ai";
import { SlArrowLeft } from "react-icons/sl";
import { Sidebarlink } from "./SidebarLink";
import { SidebarlinkCollapse } from "./sidebarCollapse";
import "../../styles/sidebarOpen.css";
import { useSidebarContext } from "../../context/SidebarContext";

export function Sidebar() {
  const { isOpen, setIsOpen } = useSidebarContext();

  const clickButtomSideBar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="sidebarContainer">
      <section className="logoContent">
        <AiOutlineAndroid
          className={isOpen ? "hidden" : "logoContent-imgClose"}
        />
        <h2 className={isOpen ? "logoContent-h2Open" : "logoContent-h2Close"}>
          G'BERS TECH
        </h2>
      </section>
      <Container className="linkContainer">
        <Row>
          <span
            className={
              isOpen
                ? "linkContainer-spanOpen"
                : "linkContainer-spanClose text-center"
            }
          >
            Menu
          </span>
        </Row>
        <Row>
          <Sidebarlink
            direccion="/"
            nombre="Dashboard"
            nombreIcon="dashboard"
          />
        </Row>

        <Row>
          <span
            className={
              isOpen
                ? "linkContainer-spanOpen"
                : "linkContainer-spanClose text-center"
            }
          >
            Servicios:
          </span>
        </Row>
        <Row>
          <Sidebarlink direccion="ventas" nombre="Ventas" nombreIcon="ventas" />
        </Row>
        <Row>
          <Sidebarlink direccion="marcas" nombre="Marcas" nombreIcon="ventas" />
        </Row>
        <Row>
          <SidebarlinkCollapse nombre="Inventario" nombreIcon="pantalla" />
        </Row>
      </Container>
      <Container className="linkContainer">
        <div className="divider">
          <hr />
        </div>
        <Row>
          <Sidebarlink
            direccion="configuracion"
            nombre="Configuracion"
            nombreIcon="configuracion"
          />
        </Row>
        <Row>
          <Sidebarlink direccion="salir" nombre="Salir" nombreIcon="salir" />
        </Row>
      </Container>
      <Container className="sidebarButtonContainer">
        <Row>
          <button
            onClick={clickButtomSideBar}
            className={isOpen ? "sidebarButtonOpen" : "sidebarButtonClose"}
          >
            <SlArrowLeft />
          </button>
        </Row>
      </Container>
    </div>
  );
}
