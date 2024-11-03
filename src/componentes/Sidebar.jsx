import { Container, Row } from "react-bootstrap"
import { AiOutlineAndroid } from "react-icons/ai";
import { SlArrowLeft } from "react-icons/sl";
import { Sidebarlink} from "./sidebarLink";
import { SidebarlinkCollapse } from "./sidebarCollapse";
import { useSidebarStateContex } from "../App";
import "../styles/sidebarOpen.css"

export function Sidebar() {
    
    const {sidebarOpen,setSidebarOpen} = useSidebarStateContex();

    const clickButtomSideBar = () => {
        setSidebarOpen(!sidebarOpen)
    }

    return (
        <div className="sidebarContainer">
            <section className="logoContent">
                <AiOutlineAndroid className={sidebarOpen ? 'logoContent-imgOpen' : 'logoContent-imgClose'} />
                <h2 className={sidebarOpen ? 'logoContent-h2Open' : 'logoContent-h2Close'}>JUDICELL</h2>
            </section>
            <Container className="linkContainer">
                <Row>
                    <span className={sidebarOpen ? 'linkContainer-spanOpen' : 'linkContainer-spanClose text-center'}>Menu</span>
                </Row>
                <Row>
                    <Sidebarlink direccion="/" nombre="Dashboard" nombreIcon="dashboard" />
                </Row>

                <Row>
                    <span className={sidebarOpen ? 'linkContainer-spanOpen' : 'linkContainer-spanClose text-center'}>Servicios:</span>
                </Row>
                <Row>
                    <Sidebarlink direccion="ventas" nombre="Ventas" nombreIcon="ventas"  />
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
                    <Sidebarlink direccion="configuracion" nombre="Configuracion" nombreIcon="configuracion"  />
                </Row>
                <Row>
                    <Sidebarlink direccion="salir" nombre="Salir" nombreIcon="salir" />
                </Row>

            </Container>
            <Container className="sidebarButtonContainer">
                <Row>
                    <button onClick={clickButtomSideBar} className={sidebarOpen ? 'sidebarButtonOpen' : 'sidebarButtonClose'}>
                        <SlArrowLeft />
                    </button>
                </Row>
            </Container>
        </div>
    )
}