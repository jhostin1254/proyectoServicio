import { Container, Row } from "react-bootstrap"
import "../styles/sidebarOpen.css"
import "../styles/sidebarClose.css"
import { AiOutlineAndroid } from "react-icons/ai";
import { SlArrowLeft } from "react-icons/sl";
import { Sidebarlink, SidebarlinkCollapse } from "./sidebarLink";

export function Sidebar({ setTema, temas, sidebarOpen, setSidebarOpen }) {

    const h2State = sidebarOpen ? 'logoContent-h2Open' : 'logoContent-h2Close'
    const imgState = sidebarOpen ? 'logoContent-imgOpen' : 'logoContent-imgClose'
    const sidebarState = sidebarOpen ? 'sidebarButtonOpen' : 'sidebarButtonClose'

    const clickButtomSideBar = () => {
        setSidebarOpen(!sidebarOpen)
    }

    return (
        <div className="sidebarContainer">
            <section className="logoContent">
                <AiOutlineAndroid className={imgState} />
                <h2 className={h2State}>JUDICELL</h2>
            </section>
            <Container className="linkContainer">
                <Row>
                    <span className={sidebarOpen ? 'linkContainer-spanOpen' : 'linkContainer-spanClose text-center'}>Menu</span>
                </Row>
                <Row>
                    <Sidebarlink direccion="/" nombre="Dashboard" nombreIcon="dashboard" sidebarOpen={sidebarOpen} />
                </Row>

                <Row>
                    <span className={sidebarOpen ? 'linkContainer-spanOpen' : 'linkContainer-spanClose text-center'}>Servicios:</span>
                </Row>
                <Row>
                    <Sidebarlink direccion="ventas" nombre="Ventas" nombreIcon="ventas" sidebarOpen={sidebarOpen} />
                </Row>
                <Row>
                    <SidebarlinkCollapse direccion="samsung" nombre="Inventario" nombreIcon="pantalla" sidebarOpen={sidebarOpen} />
                </Row>

            </Container>
            <Container className="linkContainer">
                <div className="divider">
                    <hr />
                </div>
                <Row>
                    <Sidebarlink direccion="configuracion" nombre="Configuracion" nombreIcon="configuracion" sidebarOpen={sidebarOpen} />
                </Row>
                <Row>
                    <Sidebarlink direccion="salir" nombre="Salir" nombreIcon="salir" sidebarOpen={sidebarOpen} />
                </Row>

            </Container>
            <Container className="sidebarButtonContainer">
                <Row>
                    <button onClick={clickButtomSideBar} className={sidebarState}>
                        <SlArrowLeft />
                    </button>
                </Row>
            </Container>
            {/*
            <Container>
                <div className="ThemeContent">
                    <div className="ToggleContent">
                        <div className="grid theme-container">
                            <div className="content">
                                <div className="demo">
                                    <label className="switch">
                                        <input type="checkbox" className="theme-swither" onClick={cambiarTema} />
                                        <span className={`slider round ${temas ? '' : 'dark'}`} ></span>
                                    </label>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            */
            }
        </div>
    )
}